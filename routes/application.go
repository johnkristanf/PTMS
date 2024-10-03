package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func ApplicationRoutes(e *echo.Echo, h *handlers.ApplicationHandler) {
	
	g := e.Group("/application")

	g.GET("/fetch/assessments/:applicationID", h.FetchAssessmentsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/get", h.FetchApplicationDataHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/get/applied", h.FetchAppliedServicesHandler, h.JWT_METHOD.AutheticationMiddleware)

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

	// g.PUT("/update/status/:application_id", h.UpdateApplicationStatusHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)



	
}