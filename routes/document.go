package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func DocumentRoutes(e *echo.Echo, h *handlers.DocumentHandler) {
	
	g := e.Group("/document")

	g.POST("/upload", h.UploadDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.GET("/get/:application_code", h.GetDocumentHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	
}