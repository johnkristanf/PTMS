package handlers

import (
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/johnkristanf/TMS-IPAS/types"
	"github.com/labstack/echo/v4"
	"github.com/robfig/cron/v3"
)

type AccessHandler struct {
	DB_METHOD 	database.ACCESS_DB_METHOD
	JWT_METHOD  middlewares.JWT_METHOD
}


func (h *AccessHandler) RequestAccessHandler(c echo.Context) error {

	var accessRoleData *types.AccessRole	
	if err := c.Bind(&accessRoleData); err != nil{
		return err
	}

	if err := h.DB_METHOD.RequestAccessRole(accessRoleData); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Sent Access Request Successfully")
}

func contains(slice [3]string, value string) bool {
    for _, v := range slice {
        if v == value {
            return true
        }
    }
    return false
}

func (h *AccessHandler) OpenGrantedStaffHandler(c echo.Context) error {
	var accessRoleData *types.OpenGrantedStaffPage	
	if err := c.Bind(&accessRoleData); err != nil{
		return err
	}

	c.SetCookie(&http.Cookie{
		Name:     "access_token",
		Value:    "",
		Path:     "/",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	})

	c.SetCookie(&http.Cookie{
		Name:     "refresh_token",
		Value:    "",
		Path:     "/",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	})

	admins := [3]string{"architectural", "electrical", "civil"}
	
	var userInfo *types.UserInfo 
    var findUserErr error

	if contains(admins, accessRoleData.AccessRole){
		userInfo, findUserErr = h.DB_METHOD.FindUserByAdminType(accessRoleData.AccessRole)

	} else {
		userInfo, findUserErr = h.DB_METHOD.FindUserByRole(accessRoleData.AccessRole)
	}

	if findUserErr != nil{
		return findUserErr
	}

	

	loginAccountNoPicture := ""
	access_token, err := h.JWT_METHOD.GenerateAccessToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, loginAccountNoPicture)
	if err != nil {
		return err
	}

	refresh_token, err := h.JWT_METHOD.GenerateRefreshToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, loginAccountNoPicture)
	if err != nil {
		return err
	}

		accessTokenCookie := &http.Cookie{
			Name:     "access_token",
			Value:    access_token,
			Path:     "/",
			SameSite: http.SameSiteLaxMode,
			Expires:  time.Now().Add(5 * time.Hour),
			HttpOnly: true,
			Secure:   false,

		}
	
		refreshTokenCookie := &http.Cookie{
			Name:     "refresh_token",
			Value:    refresh_token,
			Path:     "/",
			SameSite: http.SameSiteLaxMode,
			Expires:  time.Now().Add(3 * 24 * time.Hour),
			HttpOnly: true,
			Secure:   false,

		}
	
		c.SetCookie(accessTokenCookie)
		c.SetCookie(refreshTokenCookie)

		switch userInfo.Role {
			case "RECEIVER":
				return c.JSON(http.StatusOK, "RECEIVER")
			case "SCANNER":
				return c.JSON(http.StatusOK, "SCANNER")
			case "RELEASER":
				return c.JSON(http.StatusOK, "RELEASER")
		}

		switch userInfo.AdminType {
			case "architectural":
				return c.JSON(http.StatusOK, "architectural")
			case "electrical":
				return c.JSON(http.StatusOK, "electrical")
			case "civil":
				return c.JSON(http.StatusOK, "civil")
		}

	return c.JSON(http.StatusUnauthorized, "Invalid role")
}




// Admin Modal Notification
func (h *AccessHandler) FetchPendingRequestAccessHandler(c echo.Context) error{
	accessLogs, err := h.DB_METHOD.FetchPendingRequestAccess()
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, accessLogs)
}

func (h *AccessHandler) FetchAdminAccessRequestsHandler(c echo.Context) error {


	adminTypeParam := c.Param("admin_type")

	userIDParam := c.Param("user_id")
	userID, err := strconv.ParseInt(userIDParam, 10, 64)
	if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{
            "error": "Invalid user_id",
        })
    }

	accessLogs, err := h.DB_METHOD.FetchAdminRequestAccess(adminTypeParam, userID); 
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, accessLogs)

}

// Staff Modal Notification
func (h *AccessHandler) FetchStaffAccessRequestsHandler(c echo.Context) error {

	userIDParam := c.Param("user_id")
	userID, err := strconv.ParseInt(userIDParam, 10, 64)
	if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{
            "error": "Invalid user_id",
        })
    }

	accessLogs, err := h.DB_METHOD.FetchStaffAccessRequests(userID)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, accessLogs)
}



func (h *AccessHandler) UpdateRequestAccessStatusHandler(c echo.Context) error {

	requestIDParam := c.Param("request_id")
	requestID, err := strconv.ParseInt(requestIDParam, 10, 64)
	if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{
            "error": "Invalid inbox_id",
        })
    }

	var updateAccessStatus *types.UpdateAccessStatus	
	if err := c.Bind(&updateAccessStatus); err != nil{
		return err
	}

	if err := h.DB_METHOD.UpdateRequestAccessStatus(requestID, updateAccessStatus.Status); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Request Access Update Successfully")
}


func (h *AccessHandler) DeleteAccessRequestHandler(c echo.Context) error {

	requestIDParam := c.Param("request_id")
	requestID, err := strconv.ParseInt(requestIDParam, 10, 64)
	if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{
            "error": "Invalid inbox_id",
        })
    }

	if err := h.DB_METHOD.DeleteAccessRequest(requestID); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Access Request Deleted Successfully")
}


func (h *AccessHandler) DeleteOldLogsSchedulerHandler(){
	c := cron.New()

	_, err := c.AddFunc("@daily", func(){
		log.Println("Running deletion job: Deleting logs older than 5 seconds")

		if err := h.DB_METHOD.DeleteOldAccessLogs(); err != nil {
            log.Printf("Error deleting logs: %v", err)
        } else {
            log.Println("Old Logs deleted successfully.")
        }
	})

	if err != nil {
        log.Fatalf("Failed to schedule job: %v", err)
    }

	c.Start()
}