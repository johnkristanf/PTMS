package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/johnkristanf/TMS-IPAS/handlers"
)

func AuthRoutes(e *echo.Echo, h *handlers.AuthHandler) {
	
	g := e.Group("/auth")
	
	g.POST("/staff_account/login", h.StaffAccountLoginHandler)

	g.POST("/applicant/signup", h.ApplicantSignupHandler)
	g.POST("/applicant/login", h.ApplicantLoginHandler)

	g.POST("/verify-email/reset", h.VerifyEmailResetHandler)
	g.POST("/send/temp_passowrd", h.SendTemporaryPasswordHandler)

	g.PUT("/change/password", h.PasswordResetHandler)


	g.POST("/create/staff", h.CreateStaffAccountHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.GET("/fetch/staff", h.FetchStaffAccountsHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.GET("/staff", h.FetchStaffAccountByIdHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)

	g.PUT("/edit/staff/:staff_id", h.EditStaffAccountHandler, h.JWT_METHOD.StaffAdminAutheticationMiddleware)
	g.DELETE("/delete/staff/:staff_id", h.DeleteStaffAccountHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	
	g.GET("/google/login", h.OauthGoogleLogin)
	g.GET("/google/callback", h.OauthGoogleCallback)

	g.GET("/fetch/admin", h.FetchAdminAccountHandler, h.JWT_METHOD.AdminAutheticationMiddleware)
	g.GET("/fetch/login/account", h.FetchLoginAccountHandler, h.JWT_METHOD.AutheticationMiddleware)

	g.GET("/fetch/applicant", h.FetchLoginApplicantHandler, h.JWT_METHOD.AutheticationMiddleware)


	g.POST("/signout", h.SignoutHandler)
}