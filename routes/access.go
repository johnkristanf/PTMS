package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func AccessRoutes(e *echo.Echo, h *handlers.AccessHandler) {
	
	g := e.Group("/access")

	g.POST("/request/role", h.RequestAccessHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.POST("/open/page", h.OpenGrantedStaffHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.GET("/fetch/pending", h.FetchPendingRequestAccessHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.GET("/fetch/admin/:admin_type/:user_id", h.FetchAdminAccessRequestsHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.GET("/fetch/request/staff/:user_id", h.FetchStaffAccessRequestsHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.PUT("/update/status/:request_id", h.UpdateRequestAccessStatusHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.DELETE("/request/delete/:request_id", h.DeleteAccessRequestHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	
}