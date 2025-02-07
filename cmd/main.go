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

	// Comment this when you push to prod to avoid nginx error cors

	// e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
	// 	AllowOrigins: []string{"http://localhost:9090", "https://ptms-alpha.vercel.app"},
	// 	AllowMethods: []string{echo.GET, echo.POST, echo.PUT, echo.DELETE},
	// 	AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	// 	AllowCredentials: true,
	// }))

	e.Use(middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
		LogStatus: true,
		LogURI:    true,
		BeforeNextFunc: func(c echo.Context) {
			c.Set("customValueFromContext", 42)
		},
		LogValuesFunc: func(c echo.Context, v middleware.RequestLoggerValues) error {
			value, _ := c.Get("customValueFromContext").(int)
	
			// Determine the color based on HTTP method
			var colorStart string
			switch c.Request().Method {
				case "GET":
					colorStart = "\033[32m" // Green for GET requests
				case "POST":
					colorStart = "\033[33m" // Yellow for POST requests
				case "PUT":
					colorStart = "\033[34m" // Blue for PUT requests
				case "DELETE":
					colorStart = "\033[31m" // Red for DELETE requests
				default:
					colorStart = "\033[0m"  // Default color (no color)
			}
	
			colorEnd := "\033[0m"
	
			fmt.Printf("%sREQUEST: method: %v, uri: %v, status: %v, custom-value: %v%s\n", 
				colorStart, c.Request().Method, v.URI, v.Status, value, colorEnd)
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

	accessHandler := &handlers.AccessHandler{
		DB_METHOD: db,
		JWT_METHOD: jwt,
	}

	go accessHandler.DeleteOldLogsSchedulerHandler()
	go applicationHandler.TrashApplicationHandler()
	
	s3Err := documentHandler.InitS3Client()
	if s3Err != nil {
        log.Fatalf("Unable to load SDK config, %v", s3Err)
    }

	routes.AuthRoutes(e, authHandler)
	routes.ApplicationRoutes(e, applicationHandler)
	routes.DocumentRoutes(e, documentHandler)
	routes.AccessRoutes(e, accessHandler)

  
	log.Println("Go http server is listening on port 8080")
	if err := e.Start(":8080"); err != http.ErrServerClosed {
		log.Fatal(err)
	}
}