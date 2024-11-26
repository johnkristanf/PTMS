package handlers

import (
	"context"
	"fmt"
	"mime/multipart"
	"net/http"
	"path"
	"time"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/labstack/echo/v4"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

type DocumentHandler struct {
	DB_METHOD 	database.APPLICATION_DB_METHOD
	JWT_METHOD  middlewares.JWT_METHOD
}

var (
	bucketName = "ptms-s3-bucket"
	bucketRegion = "ap-southeast-1"
	s3Client *s3.Client
	preSigner *s3.PresignClient
)


func (h *DocumentHandler) InitS3Client() error {
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion(bucketRegion))
	if err != nil {
        return err
    }

    s3Client = s3.NewFromConfig(cfg)
	preSigner = s3.NewPresignClient(s3Client)

	return nil
}

func (h *DocumentHandler) UploadDocumentHandler(c echo.Context) error {

	applicationCode := c.FormValue("application_code")
    if applicationCode == "" {
        return c.String(http.StatusBadRequest, "applicationCode is required")
    }

	fmt.Println("applicationCode: ", applicationCode)

	file, err := c.FormFile("document")
    if err != nil {
        return c.String(http.StatusBadRequest, fmt.Sprintf("Failed to retrieve file: %v", err))
    }
   
	src, err := file.Open()
    if err != nil {
        return err
    }
    defer src.Close()


	err = s3ObjectUpload(src, "document", applicationCode, file.Filename)
    if err != nil {
        return c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to upload file to S3: %v", err))
    }

	return c.JSON(http.StatusOK, "Document uploaded successfully")
}


func (h *DocumentHandler) UploadProfileHandler(c echo.Context) error {

	userID := c.FormValue("userID")
    if userID == "" {
        return c.String(http.StatusBadRequest, "userID is required")
    }

	fmt.Println("userID: ", userID)

	file, err := c.FormFile("image")
    if err != nil {
        return c.String(http.StatusBadRequest, fmt.Sprintf("Failed to retrieve file: %v", err))
    }
   
	src, err := file.Open()
    if err != nil {
        return err
    }
    defer src.Close()


	// himoa nig go routine unya and duha ka s3 operations para efficient ang performance

	oldProfileKey := path.Join("profile_picture", userID)
	err = deleteOldProfileImage(oldProfileKey)
    if err != nil {
        return c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to delete odl profile to S3: %v", err))
    }

	err = s3ObjectUpload(src, "profile_picture", userID, file.Filename)
    if err != nil {
        return c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to upload profile picture to S3: %v", err))
    }

	return c.JSON(http.StatusOK, "Document uploaded successfully")
}



func s3ObjectUpload(file multipart.File, root string, sub string, filename string) error {

	s3key := path.Join(root, sub, filename)

	fmt.Println("s3key:", s3key)

	_, err := s3Client.PutObject(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String(bucketName),
		Key: aws.String(s3key),
		Body:   file,
	})

	if err != nil{
		return err
	}

	return nil
}

func deleteOldProfileImage(oldProfilePrefix string) error {

	listInput := &s3.ListObjectsV2Input{
		Bucket: aws.String(bucketName),
		Prefix: aws.String(oldProfilePrefix),
	}

	results, err := s3Client.ListObjectsV2(context.TODO(), listInput)
	if err != nil {
		return err
	}

	for _, item := range results.Contents {
		_, deleteObjErr := s3Client.DeleteObject(context.TODO(), &s3.DeleteObjectInput{
			Bucket: aws.String(bucketName),
			Key:    aws.String(*item.Key),
		})
	
		if deleteObjErr != nil {
			return deleteObjErr
		}
	}

	return nil
}



func (h *DocumentHandler) GetDocumentHandler(c echo.Context) error {

	applicationCode := c.Param("application_code")
	presignedURLSlice := make([]string, 0)

	prefix := path.Join("document", applicationCode)


	listInput := &s3.ListObjectsV2Input{
		Bucket: aws.String(bucketName),
		Prefix: aws.String(prefix),
	}


	result, err := s3Client.ListObjectsV2(context.TODO(), listInput)
	if err != nil {
		return c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to list files for prefix %s: %v", prefix, err))
	}


	for _, item := range result.Contents {

		presignInput := &s3.GetObjectInput{
			Bucket: aws.String(bucketName),
			Key:    aws.String(*item.Key),
		}
	
		expires := s3.WithPresignExpires(15 * time.Minute)
	
		presignedURLs, err := preSigner.PresignGetObject(context.TODO(), presignInput, expires)
		if err != nil{
			return err
		}

		presignedURLSlice = append(presignedURLSlice, presignedURLs.URL)
	}


	return c.JSON(http.StatusOK, map[string]interface{}{
		"prefix": prefix,
		"urls":   presignedURLSlice,
	})

}


func (h *DocumentHandler) GetProfilePictureHandler(c echo.Context) error {

	userID := c.Param("userID")
	prefix := path.Join("profile_picture", userID)

	listInput := &s3.ListObjectsV2Input{
		Bucket: aws.String(bucketName),
		Prefix: aws.String(prefix),
	}


	result, err := s3Client.ListObjectsV2(context.TODO(), listInput)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, fmt.Sprintf("Failed to list files for prefix %s: %v", prefix, err))
	}

	if len(result.Contents) == 0 {
        return c.JSON(http.StatusOK, "No_Profile")
    }

	objectKey := *result.Contents[0].Key
	fmt.Println("Found object:", objectKey)
	
	expires := s3.WithPresignExpires(1 * time.Hour)

	presignInput := &s3.GetObjectInput{
		Bucket: aws.String(bucketName),
		Key:    aws.String(objectKey),
	}
	
	presignedURLs, err := preSigner.PresignGetObject(context.TODO(), presignInput, expires)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, map[string]interface{}{
		"prefix": prefix,
		"profile_src":   presignedURLs.URL,
	})

}
