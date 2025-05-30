package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func ApplicationRoutes(e *echo.Echo, h *handlers.ApplicationHandler) {
	
	g := e.Group("/application")

	g.GET("/exists", h.ApplicationExistsHandler, h.JWT_METHOD.AutheticationMiddleware)

	g.GET("/fetch/assessments/:applicationID", h.FetchAssessmentsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/get", h.FetchApplicationDataHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/get/applied", h.FetchAppliedServicesHandler, h.JWT_METHOD.AutheticationMiddleware)

	g.GET("/by/staff/proccess/status", h.FetchApplicationByProccessStatusHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/disapproved/releaser", h.FetchDisapprovedReleaserHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/report", h.FetchReportApplicationHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.GET("/fetch/requirements/:applicationID", h.FetchCheckedRequirementsHandler, h.JWT_METHOD.AutheticationMiddleware)

	g.GET("/fetch/architectural/requirements/:applicationID", h.FetchArchitecturalRequirementsHandler, h.JWT_METHOD.AutheticationMiddleware)
	g.GET("/fetch/civil/requirements/:applicationID", h.FetchCivilRequirementsHandler, h.JWT_METHOD.AutheticationMiddleware)
	g.GET("/fetch/electrical/requirements/:applicationID", h.FetchElectricalRequirementsHandler, h.JWT_METHOD.AutheticationMiddleware)


	g.GET("/inboxes", h.FetchInboxesHandler, h.JWT_METHOD.AutheticationMiddleware)
	g.PUT("/inboxes/:inbox_id", h.UpdateInboxStatusHandler, h.JWT_METHOD.AutheticationMiddleware)
	g.DELETE("/delete/:inbox_id", h.DeleteInboxHandler, h.JWT_METHOD.AutheticationMiddleware)



	g.POST("/add", h.AddApplicationHandler, h.JWT_METHOD.AutheticationMiddleware)
	g.POST("/update/assessment", h.UpdateAssessmentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.POST("/update/requirements", h.UpdateFirstStepRequirementsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.POST("/assessment/paid", h.SetPaidAssessmentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.POST("/check/architectural/requirements", h.CheckArchitecturalRequirementsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.POST("/check/civil/requirements", h.CheckCivilRequirementsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.POST("/check/electrical/requirements", h.CheckElectricalRequirementsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.PUT("/update/code/:application_id", h.UpdateApplicationCodeHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/update/approval/:application_id", h.UpdateApplicationApprovalHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/update/disapproval", h.UpdateApplicationDisApprovalHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/submit/releaser", h.UpdateSubmitToReleaserHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.PUT("/set/release/date", h.SetReleaseDateHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	// g.PUT("/update/status/:application_id", h.UpdateApplicationStatusHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)


	g.GET("/by/year", h.FetchApplicationByYearHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/by/barangay", h.FetchApplicationByBarangayHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/by/permit_type", h.FetchApplicationByPermitTypeHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)


	g.GET("/fetch/occupancy/:application_id", h.FetchOccupancyDataHandler, h.JWT_METHOD.AutheticationMiddleware)

	g.PUT("/update/applicantForm/document", h.UpdateApplicantFormDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/update/firstStepReq/document", h.UpdateFirstStepReqDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/update/completionForm/document", h.UpdateCompletionFormDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/update/additionalForm/document", h.UpdateAdditionalFormDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.PUT("/finish/scanning", h.UpdateFinishScanningHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	
	
	g.GET("/first_step/:application_id", h.FetchDocumentFirstStepRequirementsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/monthly/assessment/:selectedAssessmentPermit", h.FetchMonthlyAssessmentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	
}