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


	err = s3UploadDocument(src, applicationCode, file.Filename)
    if err != nil {
        return c.String(http.StatusInternalServerError, fmt.Sprintf("Failed to upload file to S3: %v", err))
    }

	return c.JSON(http.StatusOK, "Document uploaded successfully")
}


func s3UploadDocument(file multipart.File, applicationCode string, filename string) error {

	s3key := path.Join("document", applicationCode, filename)

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