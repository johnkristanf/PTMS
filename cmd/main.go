package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/handlers"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/johnkristanf/TMS-IPAS/routes"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

var (
	accessTokenDuration   						= 5 * time.Hour
	refreshTokenDuration  						= 3 * 24 * time.Hour
	accessTokenSecret	  						= "accessToken_secret"
	refreshTokenSecret	  						= "refreshToken_secret"
)


func main(){

	err := godotenv.Load(".env")
    if err != nil {
        log.Fatalf("Error loading .env file")
    }

	e := echo.New()

	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:9090"},
		AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		AllowCredentials: true,
	}))

	e.Use(middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
		LogStatus: true,
		LogURI:    true,
		BeforeNextFunc: func(c echo.Context) {
			// You can put anything right here for debugging purposes, it could be user payload 
			// request id etc...
			c.Set("customValueFromContext", 42)
		},
		LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
			value, _ := c.Get("customValueFromContext").(int)
			fmt.Printf("REQUEST: uri: %v, status: %v, custom-value: %v\n", v.URI, v.Status, value)
			return nil
		},
	}))


	db, err := database.DB_CONFIG()
	if err != nil{
		fmt.Println("error in db: ", err)
	}

	jwt := middlewares.JWT_CONFIG(
		accessTokenDuration, 
		refreshTokenDuration, 
		accessTokenSecret, 
		refreshTokenSecret,
	)

	authHandler := &handlers.AuthHandler{
		DB_METHOD: db,
		JWT_METHOD: jwt,
	}


	applicationHandler := &handlers.ApplicationHandler{
		DB_METHOD: db,
		JWT_METHOD: jwt,
	}

	documentHandler := &handlers.DocumentHandler{
		DB_METHOD: db,
		JWT_METHOD: jwt,
	}

	s3Err := documentHandler.InitS3Client()
	if s3Err != nil {
        log.Fatalf("Unable to load SDK config, %v", s3Err)
    }

	routes.AuthRoutes(e, authHandler)
	routes.ApplicationRoutes(e, applicationHandler)
	routes.DocumentRoutes(e, documentHandler)

  
	log.Println("Go http server is listening on port 4040")
	if err := e.Start(":4040"); err != http.ErrServerClosed {
		log.Fatal(err)
	}
}