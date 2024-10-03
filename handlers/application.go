package handlers

import (
	"fmt"
	"sync"
	"net/http"
	"reflect"
	"strconv"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/johnkristanf/TMS-IPAS/types"
	"github.com/labstack/echo/v4"
)


type ApplicationHandler struct {
	DB_METHOD 	database.APPLICATION_DB_METHOD
	JWT_METHOD  middlewares.JWT_METHOD
}

func checkType(application *types.ApplicantInfo) {
    scopeType := reflect.TypeOf(application.ScopeType)
    fmt.Println("Type of ScopeType:", scopeType)

    occupancyType := reflect.TypeOf(application.CharacterOfOccupancy)
    fmt.Println("Type of CharacterOfOccupancy:", occupancyType)
}

func (h *ApplicationHandler) AddApplicationHandler(c echo.Context) error {

	var application *types.ApplicantInfo	
	errorChan := make(chan error, 3)

	if err := c.Bind(&application); err != nil{
		return err
	}

	fmt.Println("scopeType: ", application.ScopeType)
	fmt.Println("occupancyType: ", application.CharacterOfOccupancy)

	checkType(application)

	go func() {
		if err := h.DB_METHOD.AddApplication(application); err != nil{
			errorChan <- err
		}
	}()

	applicantName := fmt.Sprintf("%s %s %s", application.FirstName, application.MiddleInitial, application.LastName)
	
	go func() {
		if err := helpers.SendApplicationEmail(application.Email, applicantName); err != nil {
			errorChan <- err
		} 
	}()
	
	go func() {
		if err := h.DB_METHOD.ApplicationInbox(application.UserID, applicantName); err != nil {
			errorChan <- err
		} 
	}()
	

	
	var err error
	for i := 0; i < 3; i++ {
		if e := <-errorChan; e != nil {
			err = e
		}
	}
	close(errorChan)

	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, "New Applicant Added")
}

func (h *ApplicationHandler) FetchAppliedServicesHandler(c echo.Context) error {
	userPayload, ok := c.Get("userPayload").(*types.UserPayload)
	if !ok{
		return c.JSON(http.StatusUnauthorized, "You are Unauthorized to Access this Page")
	}

	appliedServices, err := h.DB_METHOD.FetchAppliedServices(userPayload.UserID)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, appliedServices)
}


func (h *ApplicationHandler) FetchApplicationDataHandler(c echo.Context) error {

	status := c.QueryParam("status")
	searchTerm := c.QueryParam("searchTerm")
	selectedMonth := c.QueryParam("selectedMonth")
	selectedWeek := c.QueryParam("selectedWeek")
	
	applicantInfo, err := h.DB_METHOD.FetchApplication(status, searchTerm, selectedMonth, selectedWeek)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, applicantInfo)
}


func (h *ApplicationHandler) UpdateApplicationApprovalHandler(c echo.Context) error {
	
	param := c.Param("application_id")
	application_id, err := strconv.Atoi(param)
	if err != nil{
		return err
	}
	var update types.UpdateApplicationApproval

	if err := c.Bind(&update); err != nil{
		return err
	}

	if err := h.DB_METHOD.UpdateApplicationApproval(int64(application_id), update.AdminApproved); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Application Code Updated Successfully")
}


func (h *ApplicationHandler) UpdateApplicationDisApprovalHandler(c echo.Context) error {
	errorChan := make(chan error, 2) // Create a buffered channel to hold potential errors
	var application *types.UpdateApplicationDisApproval

	// Bind the request body to the application struct
	if err := c.Bind(&application); err != nil {
		return err
	}

	fmt.Println("Email: ", application.Email)
	fmt.Println("Application ID: ", application.ApplicationID)
	fmt.Println("User ID: ", application.UserID)
	fmt.Println("Disapproval Message: ", application.DisapprovalMessage)

	if err := h.DB_METHOD.UpdateApplicationDisApproval(application.ApplicationID, application.DisapprovalMessage); err != nil {
		return err
	}

	var wg sync.WaitGroup 

	wg.Add(2)

	go func() {
		defer wg.Done() 
		if err := helpers.SendDisapprovalEmail(application.Email, application.DisapprovalMessage); err != nil {
			errorChan <- err 
		}
	}()

	go func() {
		defer wg.Done()
		if err := h.DB_METHOD.DisapprovalInbox(application.UserID, application.DisapprovalMessage); err != nil {
			errorChan <- err 
		}
	}()

	go func() {
		wg.Wait()
		close(errorChan) 
	}()

	
	var chanErr error
	for e := range errorChan { 
		if e != nil {
			chanErr = e
		}
	}

	if chanErr != nil {
		return chanErr
	}

	return c.JSON(http.StatusOK, "Application Disapproved Successfully")
}






// ASSESSMENTS

func (h *ApplicationHandler) FetchAssessmentsHandler(c echo.Context) error {

	param := c.Param("applicationID")
	applicationID, err := strconv.Atoi(param)
	if err != nil{
		return err
	}

	assessments, err := h.DB_METHOD.FetchAssessments(int64(applicationID))
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, assessments)
}

func (h *ApplicationHandler) UpdateAssessmentHandler(c echo.Context) error {
	var assessment *types.AssessmentTypes

	if err := c.Bind(&assessment); err != nil{
		return err
	}

	if err := h.DB_METHOD.UpdateAssessment(assessment); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Assessment Updated Successfully")
}


func (h *ApplicationHandler) SetPaidAssessmentHandler(c echo.Context) error {

	var formData types.AssessmentsPaidFormData

    if err := c.Bind(&formData); err != nil {
        return c.JSON(http.StatusBadRequest, err.Error())
    }

	if err := h.DB_METHOD.SetPaidAsssesment(formData); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Assessment Updated Successfully")
}



func (h *ApplicationHandler) UpdateApplicationCodeHandler(c echo.Context) error {
	
	param := c.Param("application_id")
	application_id, err := strconv.Atoi(param)
	if err != nil{
		return err
	}
	var update types.UpdateApplicationCode

	if err := c.Bind(&update); err != nil{
		return err
	}

	if err := h.DB_METHOD.UpdateApplicationCode(int64(application_id), update.ApplicationCode); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Application Code Updated Successfully")
}


// REQUIREMENTS

func (h *ApplicationHandler) FetchCheckedRequirementsHandler(c echo.Context) error {

	param := c.Param("applicationID")
	applicationID, err := strconv.Atoi(param)
	if err != nil{
		return err
	}

	fmt.Println("applicationID", applicationID)

	requirements, err := h.DB_METHOD.FetchRequirements(int64(applicationID))
	if err != nil{
		return err
	}

	fmt.Println("requirements", requirements)

	return c.JSON(http.StatusOK, requirements)
}

func (h *ApplicationHandler) UpdateFirstStepRequirementsHandler(c echo.Context) error {
    fmt.Println("Handler called")

    var requirements types.FirstStepRequirements
    if err := c.Bind(&requirements); err != nil {
        return c.JSON(http.StatusBadRequest, err.Error())
    }

    fmt.Println("requirements", requirements)

    if err := h.DB_METHOD.UpdateFirstStepRequirements(&requirements); err != nil {
        return c.JSON(http.StatusInternalServerError, err.Error())
    }

    return c.JSON(http.StatusOK, "Application Status Updated Successfully")
}

func (h *ApplicationHandler) CheckArchitecturalRequirementsHandler(c echo.Context) error {

	var requirements *types.ArchitecturalRequirements
    if err := c.Bind(&requirements); err != nil {
        return c.JSON(http.StatusBadRequest, err.Error())
    }

    fmt.Println("requirements", requirements)

    if err := h.DB_METHOD.CheckArchitecturalRequirements(requirements); err != nil {
        return c.JSON(http.StatusInternalServerError, err.Error())
    }

    return c.JSON(http.StatusOK, "Application Status Updated Successfully")

}

func (h *ApplicationHandler) CheckCivilRequirementsHandler(c echo.Context) error {

	var requirements *types.CivilRequirements
    if err := c.Bind(&requirements); err != nil {
        return c.JSON(http.StatusBadRequest, err.Error())
    }

    fmt.Println("requirements", requirements)

    if err := h.DB_METHOD.CheckCivilRequirements(requirements); err != nil {
        return c.JSON(http.StatusInternalServerError, err.Error())
    }

    return c.JSON(http.StatusOK, "Application Status Updated Successfully")

}

func (h *ApplicationHandler) CheckElectricalRequirementsHandler(c echo.Context) error {

	var requirements *types.ElectricalRequirements
    if err := c.Bind(&requirements); err != nil {
        return c.JSON(http.StatusBadRequest, err.Error())
    }

    fmt.Println("requirements", requirements)

    if err := h.DB_METHOD.CheckElectricalRequirements(requirements); err != nil {
        return c.JSON(http.StatusInternalServerError, err.Error())
    }

    return c.JSON(http.StatusOK, "Application Status Updated Successfully")

}



func (h *ApplicationHandler) FetchArchitecturalRequirementsHandler(c echo.Context) error {

	param := c.Param("applicationID")
	applicationID, err := strconv.Atoi(param)
	if err != nil{
		return err
	}

	requirements, err := h.DB_METHOD.FetchArchitechturalRequirements(int64(applicationID))
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, requirements)
}

func (h *ApplicationHandler) FetchCivilRequirementsHandler(c echo.Context) error {

	param := c.Param("applicationID")
	applicationID, err := strconv.Atoi(param)
	if err != nil{
		return err
	}

	requirements, err := h.DB_METHOD.FetchCivilRequirements(int64(applicationID))
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, requirements)
}

func (h *ApplicationHandler) FetchElectricalRequirementsHandler(c echo.Context) error {

	param := c.Param("applicationID")
	applicationID, err := strconv.Atoi(param)
	if err != nil{
		return err
	}

	requirements, err := h.DB_METHOD.FetchElectricalRequirements(int64(applicationID))
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, requirements)
}



// INBOXES

func (h *ApplicationHandler) FetchInboxesHandler(c echo.Context) error {

	paramID := c.QueryParam("user_id")
	userID, err := strconv.Atoi(paramID)
	if err != nil{
		return err
	}

	selectedFilter := c.QueryParam("selectedFilter")

	if selectedFilter == "all"{

		inboxes, err := h.DB_METHOD.FetchAllInboxes(int64(userID))
		if err != nil{
			return err
		}

		fmt.Println("inboxes all:", inboxes)

		return c.JSON(http.StatusOK, inboxes)

	} 

	if selectedFilter == "unread"{
		inboxes, err := h.DB_METHOD.FetchUnreadInboxes(int64(userID))
		if err != nil{
			return err
		}

		fmt.Println("inboxes all:", inboxes)

		return c.JSON(http.StatusOK, inboxes)
	}

	if selectedFilter == "latest"{

		inboxes, err := h.DB_METHOD.FetchInboxesToday(int64(userID))
		if err != nil{
			return err
		}


		return c.JSON(http.StatusOK, inboxes)

	}

	return nil
}




func (h *ApplicationHandler) UpdateInboxStatusHandler(c echo.Context) error {

	inboxIDParam := c.Param("inbox_id")
	inboxID, err := strconv.ParseInt(inboxIDParam, 10, 64)
	if err != nil {
        return c.JSON(http.StatusBadRequest, map[string]string{
            "error": "Invalid inbox_id",
        })
    }

	if err := h.DB_METHOD.UpdateInboxStatus(inboxID); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Inbox Status Updated")
}

func (h *ApplicationHandler) DeleteInboxHandler(c echo.Context) error {
	
	inboxID := c.Param("inbox_id")
	fmt.Println("inboxID: ", inboxID)

	if err := h.DB_METHOD.DeleteInbox(inboxID); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Inbox Deleted")
}
