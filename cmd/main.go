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


	routes.AuthRoutes(e, authHandler)
	routes.ApplicationRoutes(e, applicationHandler)

  
	if err := e.Start(":4040"); err != http.ErrServerClosed {
		log.Fatal(err)
	}
}