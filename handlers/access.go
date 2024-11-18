package handlers

import (
	"log"
	"net/http"
	"strconv"

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


func (h *AccessHandler) StaffRequestAccessHandler(c echo.Context) error {

	var accessRoleData *types.StaffAccessRole	
	if err := c.Bind(&accessRoleData); err != nil{
		return err
	}

	if err := h.DB_METHOD.StaffRequestAccessRole(accessRoleData); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Sent Access Request Successfully")
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

func (h *AccessHandler) FetchPendingRequestAccessHandler(c echo.Context) error{
	accessLogs, err := h.DB_METHOD.FetchPendingRequestAccess()
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, accessLogs)
}


func (h *AccessHandler) UpdateRequestAccessStatusHandler(c echo.Context) error{

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