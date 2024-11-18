package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func AccessRoutes(e *echo.Echo, h *handlers.AccessHandler) {
	
	g := e.Group("/access")

	g.POST("/staff/request", h.StaffRequestAccessHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.GET("/fetch/pending", h.FetchPendingRequestAccessHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.PUT("/update/status/:request_id", h.UpdateRequestAccessStatusHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	
}