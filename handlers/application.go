package handlers

import (
	"fmt"
	"net/http"
	"reflect"
	"strconv"
	"sync"
	"log"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/johnkristanf/TMS-IPAS/types"
	"github.com/labstack/echo/v4"
	"github.com/robfig/cron/v3"
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


func (h *ApplicationHandler) ApplicationExistsHandler(c echo.Context) error {
	firstName := c.QueryParam("firstName")
	lastName := c.QueryParam("lastName")
	permitType := c.QueryParam("permitType")

	isApplicationExists, err := h.DB_METHOD.IsApplicationExists(firstName, lastName, permitType)
	if err != nil {
		return err
	}

	if isApplicationExists {
		return c.JSON(http.StatusOK, "application_exists")
	}

	return c.JSON(http.StatusOK, "application_dont_exists")
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
	// selectedWeek := c.QueryParam("selectedWeek")
	
	applicantInfo, err := h.DB_METHOD.FetchApplication(status, searchTerm, selectedMonth)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, applicantInfo)
}

func (h *ApplicationHandler) FetchApplicationByProccessStatusHandler(c echo.Context) error {

	status := c.QueryParam("status")
	searchTerm := c.QueryParam("searchTerm")
	selectedMonth := c.QueryParam("selectedMonth")
	
	applicantInfo, err := h.DB_METHOD.FetchApplicationByStaffProccessStatus(status, searchTerm, selectedMonth)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, applicantInfo)
}


func (h *ApplicationHandler) FetchReportApplicationHandler(c echo.Context) error {

	searchTerm := c.QueryParam("searchTerm")
	selectedMonth := c.QueryParam("selectedMonth")
	
	applicantInfo, err := h.DB_METHOD.FetchReportApplication(searchTerm, selectedMonth)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, applicantInfo)
}


func (h *ApplicationHandler) FetchDisapprovedReleaserHandler(c echo.Context) error {

	staffProccessStatus := c.QueryParam("staffProccessStatus")
	searchTerm := c.QueryParam("searchTerm")
	selectedMonth := c.QueryParam("selectedMonth")
	
	applicantInfo, err := h.DB_METHOD.FetchDisapprovedReleaser(staffProccessStatus, searchTerm, selectedMonth)
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

	errorChan := make(chan error, 2) 
	var application *types.UpdateApplicationDisApproval

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

func (h *ApplicationHandler) UpdateSubmitToReleaserHandler(c echo.Context) error {

	applicationIdParam := c.QueryParam("application_id")

	applicationID, err := strconv.ParseInt(applicationIdParam, 10, 64)
	if err != nil {
		return c.JSON(400, map[string]string{
			"error": "Invalid application_id, must be an integer",
		})
	}

	if err := h.DB_METHOD.SubmitToReleaserApplication(applicationID); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Submitted to Releaser!")
}



func (h *ApplicationHandler) SetReleaseDateHandler(c echo.Context) error {

    var releaseDate *types.ReleaseDateData
	if err := c.Bind(&releaseDate); err != nil {
		return err
	}

    fmt.Println("Application ID:", releaseDate.ApplicationID)
    fmt.Println("DateFrom:", releaseDate.DateFrom)
    fmt.Println("DateTo:", releaseDate.DateTo)
    fmt.Println("Email:", releaseDate.Email)
    fmt.Println("UserID:", releaseDate.UserID)
    fmt.Println("Message:", releaseDate.Message)

    if releaseDate.ApplicationID == 0 || releaseDate.DateFrom == "" || releaseDate.DateTo == "" {
        return c.JSON(http.StatusBadRequest, map[string]string{"error": "Missing required fields"})
    }

    if err := h.DB_METHOD.UpdateReleaseDateAndSubmitToReport(releaseDate.ApplicationID, releaseDate.DateFrom, releaseDate.DateTo); err != nil {
        return c.JSON(http.StatusInternalServerError, map[string]string{"error": "Failed to update release date"})
    }

    errorChan := make(chan error, 2)
    var wg sync.WaitGroup

    wg.Add(2)

    go func() {
        defer wg.Done()
        if err := helpers.SendReleaseDateEmail(releaseDate.Email, releaseDate.Message); err != nil {
            errorChan <- err
        }
    }()

    go func() {
        defer wg.Done()
        if err := h.DB_METHOD.ReleaseDateInbox(releaseDate.UserID, releaseDate.Message); err != nil {
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
        return c.JSON(http.StatusInternalServerError, map[string]string{"error": chanErr.Error()})
    }

    return c.JSON(http.StatusOK, "Set Release Date Successfully")
}


func (h *ApplicationHandler) TrashApplicationHandler(){
	c := cron.New()

	_, err := c.AddFunc("@yearly", func(){

		if err := h.DB_METHOD.TrashApplication(); err != nil {
            log.Printf("Error in putting application to trash : %v", err)
        } else {
            log.Println("Application trashed successfully.")
        }
	})

	if err != nil {
        log.Fatalf("Failed to schedule job: %v", err)
    }

	c.Start()
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

	isCodeExists, err := h.DB_METHOD.IsApplicationCodeExists(update.ApplicationCode)
	if err != nil{
		return err
	}

	if isCodeExists {
		return c.JSON(http.StatusOK, "Application_Code_Existed")
	}

	if err := h.DB_METHOD.UpdateApplicationCode(int64(application_id), update.ApplicationCode); err != nil{
		return err
	}


	applicantName := fmt.Sprintf("%s %s %s", update.FirstName, update.MiddleInitial, update.LastName)
	errorChan := make(chan error, 2)
    var wg sync.WaitGroup

    wg.Add(2)

	go func ()  {
		defer wg.Done()

		if err := helpers.SendApplicationCodeSetEmail(update.ApplicationCode, update.Email, applicantName); err != nil{
			errorChan <- err
		}
	}()

	go func ()  {
		defer wg.Done()

		if err := h.DB_METHOD.SetApplicationCodeInbox(update.UserID, applicantName, update.ApplicationCode); err != nil{
			errorChan <- err
		}
	}()

	go func ()  {
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
        return c.JSON(http.StatusInternalServerError, map[string]string{"error": chanErr.Error()})
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
