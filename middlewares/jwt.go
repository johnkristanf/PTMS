package middlewares

import (
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/johnkristanf/TMS-IPAS/types"
	"github.com/labstack/echo/v4"
)


type JWT struct{
	AccessTokenDuration   		time.Duration
	RefreshTokenDuration  		time.Duration
	AccessTokenSecret	  		string
	RefreshTokenSecret	  		string
}			

type JWT_METHOD interface{
	GenerateAccessToken(int64, string, string, string, string) (string, error)
	GenerateRefreshToken(int64, string, string, string, string) (string, error)

	AdminAutheticationMiddleware(echo.HandlerFunc) echo.HandlerFunc
	StaffAdminAutheticationMiddleware(echo.HandlerFunc) echo.HandlerFunc
	AutheticationMiddleware(echo.HandlerFunc) echo.HandlerFunc
}

func JWT_CONFIG(accessTokenDuration time.Duration, refreshTokenDuration  time.Duration, accessTokenSecret string, refreshTokenSecret string) *JWT {
	return &JWT{
		AccessTokenDuration: accessTokenDuration,
		RefreshTokenDuration: refreshTokenDuration,
		AccessTokenSecret: accessTokenSecret,
		RefreshTokenSecret: refreshTokenSecret,
	}
}




func (j JWT) GenerateAccessToken(user_id int64, name string, email string, role string, picture string) (string, error) {

	jwt_token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": user_id,
		"name":    name,
		"email":   email,
		"role":	   role,
		"picture": picture,
		"expires": time.Now().Add(j.AccessTokenDuration).Unix(),  
	})

	return jwt_token.SignedString([]byte(j.AccessTokenSecret))
}




func (j JWT) GenerateRefreshToken(user_id int64, name string, email string, role string, picture string) (string, error) {

	jwt_token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": user_id,
		"name":    name,
		"email":   email,
		"role":	   role,
		"picture": picture,
		"expires": time.Now().Add(j.RefreshTokenDuration).Unix(),  
	})

	return jwt_token.SignedString([]byte(j.RefreshTokenSecret))
}





func (j JWT) AdminAutheticationMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	
	const unauthorizedMessage = "You are Unauthorized to Access this Page";

	return func(c echo.Context) error {

		access_token, err := c.Cookie("access_token")
		if err != nil || access_token.Value == "" {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}
		

		token, err := jwt.ParseWithClaims(access_token.Value, &types.JWTPayloadClaims{}, func(t *jwt.Token) (interface{}, error) {
			return []byte(j.AccessTokenSecret), nil
		})


		if err != nil || !token.Valid {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		claims, ok := token.Claims.(*types.JWTPayloadClaims)
		if !ok {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}

		

		if time.Until(time.Unix(claims.Expires, 0)) < 0 {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		if claims.Role != "admin" {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		payloadData := &types.UserPayload{
			UserID: claims.ID,
			Name: claims.Name,
			Email: claims.Email,
			Role: claims.Role,
			Picture: claims.Picture,
		}

		c.Set("userPayload", payloadData)
		return next(c)
	}

}


func (j JWT) StaffAdminAutheticationMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	
	const unauthorizedMessage = "You are Unauthorized to Access this Page";

	return func(c echo.Context) error {

		access_token, err := c.Cookie("access_token")
		if err != nil || access_token.Value == "" {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}
		

		token, err := jwt.ParseWithClaims(access_token.Value, &types.JWTPayloadClaims{}, func(t *jwt.Token) (interface{}, error) {
			return []byte(j.AccessTokenSecret), nil
		})


		if err != nil || !token.Valid {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		userInfo, ok := token.Claims.(*types.JWTPayloadClaims)
		if !ok {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}		

		if time.Until(time.Unix(userInfo.Expires, 0)) < 0 {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}

		if userInfo.Role == "applicant" {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		payloadData := &types.UserPayload{
			UserID: userInfo.ID,
			Name: userInfo.Name,
			Email: userInfo.Email,
			Role: userInfo.Role,
		}

		c.Set("userPayload", payloadData)
		return next(c)
	}

}


func (j JWT) AutheticationMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	
	const unauthorizedMessage = "You are Unauthorized to Access this Page";

	return func(c echo.Context) error {

		access_token, err := c.Cookie("access_token")
		if err != nil || access_token.Value == "" {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}
		

		token, err := jwt.ParseWithClaims(access_token.Value, &types.JWTPayloadClaims{}, func(t *jwt.Token) (interface{}, error) {
			return []byte(j.AccessTokenSecret), nil
		})


		if err != nil || !token.Valid {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		claims, ok := token.Claims.(*types.JWTPayloadClaims)
		if !ok {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}
		

		if time.Until(time.Unix(claims.Expires, 0)) < 0 {
			return c.JSON(http.StatusUnauthorized, unauthorizedMessage)
		}


		payloadData := &types.UserPayload{
			UserID: claims.ID,
			Name: claims.Name,
			Email: claims.Email,
			Role: claims.Role,
			Picture: claims.Picture,
		}

		c.Set("userPayload", payloadData)
		return next(c)
	}

}

