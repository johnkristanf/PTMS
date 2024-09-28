package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"

	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"

	"github.com/johnkristanf/TMS-IPAS/database"
	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/middlewares"
	"github.com/johnkristanf/TMS-IPAS/types"
	"github.com/labstack/echo/v4"
)

var (
	oauthStateString = helpers.GenerateStateOauthCookie()
)


func getGoogleOauthConfig() *oauth2.Config {
    return &oauth2.Config{
        RedirectURL:  os.Getenv("REDIRECT_URL"),
        ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
        ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
        Scopes: []string{
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        },
        Endpoint: google.Endpoint,
    }
}


type AuthHandler struct {
	DB_METHOD 	database.AUTH_DB_METHOD
	JWT_METHOD  middlewares.JWT_METHOD
}

func (h *AuthHandler) LoginHandler(c echo.Context) error {

	ctx, cancel := context.WithTimeout(c.Request().Context(), time.Millisecond * 200)
	defer cancel()

	loginResponseChan := make(chan *types.LoginResponse)
	var lc *types.LoginCredentialsBind

	if err := c.Bind(&lc); err != nil {
		return c.JSON(http.StatusBadRequest, "bad request")
	}

	fmt.Println("email: ", lc.Email)
	fmt.Println("password: ", lc.Password)

	lcDTO := &types.LoginCredentialsDTO{
		Email: strings.TrimSpace(lc.Email),
		Password: strings.TrimSpace(lc.Password),
	}

	go func() {
		defer close(loginResponseChan)

		userInfo, err := h.DB_METHOD.Login(lcDTO)
		if err != nil {
			loginResponseChan <- &types.LoginResponse{UserInfo: nil, Error: err}
			return
		}

		loginResponseChan <- &types.LoginResponse{UserInfo: userInfo, Error: nil}
	}()

	select {

	case <-ctx.Done():
		return c.JSON(http.StatusRequestTimeout, "Request Timeout: ClamScanner took too long to respond")

	case response := <-loginResponseChan:

		userInfo, err := response.UserInfo, response.Error
		fmt.Println("response.Error: ", response.Error)
		if err != nil {
			return c.JSON(http.StatusUnauthorized, "Invalid Username or Password")
		}

		loginAccountNoPicture := ""
		access_token, err := h.JWT_METHOD.GenerateAccessToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, loginAccountNoPicture)
		if err != nil {
			return err
		}

		refresh_token, err := h.JWT_METHOD.GenerateRefreshToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, loginAccountNoPicture)
		if err != nil {
			return err
		}

		accessTokenCookie := &http.Cookie{
			Name:     "access_token",
			Value:    access_token,
			Path:     "/",
			SameSite: http.SameSiteLaxMode,
			Expires:  time.Now().Add(5 * time.Hour),
			HttpOnly: true,
			Secure:   false,

		}
	
		refreshTokenCookie := &http.Cookie{
			Name:     "refresh_token",
			Value:    refresh_token,
			Path:     "/",
			SameSite: http.SameSiteLaxMode,
			Expires:  time.Now().Add(3 * 24 * time.Hour),
			HttpOnly: true,
			Secure:   false,

		}
	
		c.SetCookie(accessTokenCookie)
		c.SetCookie(refreshTokenCookie)

		switch userInfo.AdminType {
			case "architectural":
				return c.JSON(http.StatusOK, "architectural")
			case "electrical":
				return c.JSON(http.StatusOK, "electrical")
			case "civil":
				return c.JSON(http.StatusOK, "civil")
		}

		switch userInfo.Role {
			case "RECEIVER":
				return c.JSON(http.StatusOK, "RECEIVER")
			case "SCANNER":
				return c.JSON(http.StatusOK, "SCANNER")
			case "RELEASER":
				return c.JSON(http.StatusOK, "RELEASER")
		}

        return c.JSON(http.StatusUnauthorized, "Invalid role")
	}

}



// ---------------------GOOGLE LOGIN ---------------------------------

func (h *AuthHandler) OauthGoogleLogin(c echo.Context) error {
	googleOauthConfig := getGoogleOauthConfig()
	URL := googleOauthConfig.AuthCodeURL(oauthStateString, oauth2.AccessTypeOffline, oauth2.ApprovalForce)
	return c.Redirect(http.StatusTemporaryRedirect, URL)
}

func (h *AuthHandler) OauthGoogleCallback(c echo.Context) error {
	responseSignInChan := make(chan *types.SignInResponseChan, 1)

	state := c.QueryParam("state")
	if state != oauthStateString {
		fmt.Println("Invalid oauth state")
		return c.Redirect(http.StatusTemporaryRedirect, "/")
	}

	googleUserInfo, err := getUserFromGoogle(c.QueryParam("code"))
	if err != nil {
		fmt.Printf("Failed to exchange token: %s\n", err.Error())
		return c.Redirect(http.StatusTemporaryRedirect, "/")
	}

	go func() {
		defer close(responseSignInChan)

		lastSignInUserInfo, isExistingUser, err := h.DB_METHOD.SignupGoogleUser(googleUserInfo)
		if err != nil {
			responseSignInChan <- &types.SignInResponseChan{
				Error:    err,
				UserInfo: nil,
			}
			return
		}

		responseSignInChan <- &types.SignInResponseChan{
			Error:    nil,
			UserInfo: lastSignInUserInfo,
			IsExistingUser: isExistingUser,
		}
	}()

	signInResponse := <-responseSignInChan

	err, userInfo, isExistingUser := signInResponse.Error, signInResponse.UserInfo, signInResponse.IsExistingUser
	if err != nil {
		return err
	}


	access_token, err := h.JWT_METHOD.GenerateAccessToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, userInfo.Picture)
	if err != nil {
		return err
	}

	refresh_token, err := h.JWT_METHOD.GenerateRefreshToken(userInfo.ID, userInfo.Name, userInfo.Email, userInfo.Role, userInfo.Picture)
	if err != nil {
		return err
	}

	accessTokenCookie := &http.Cookie{
		Name:     "access_token",
		Value:    access_token,
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
		Expires:  time.Now().Add(5 * time.Hour),
		HttpOnly: true,
		Secure:   false,

	}

	refreshTokenCookie := &http.Cookie{
		Name:     "refresh_token",
		Value:    refresh_token,
		Path:     "/",
		SameSite: http.SameSiteLaxMode,
		Expires:  time.Now().Add(3 * 24 * time.Hour),
		HttpOnly: true,
		Secure:   false,

	}

	c.SetCookie(accessTokenCookie)
	c.SetCookie(refreshTokenCookie)

	if isExistingUser {
		return c.Redirect(http.StatusTemporaryRedirect, os.Getenv("EXISTING_USER_REDIRECT_URL"))
	}

	return c.Redirect(http.StatusTemporaryRedirect, os.Getenv("NEW_USER_REDIRECT_URL"))
}



func getUserFromGoogle(code string) (*types.GoogleUserInfo, error){
	googleOauthConfig := getGoogleOauthConfig()
	token, err := googleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		return nil, err
	}


	client := http.Client{}
	response, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		return nil, err
		
	}
	defer response.Body.Close()


	var googleUserInfo *types.GoogleUserInfo
	if err := json.NewDecoder(response.Body).Decode(&googleUserInfo); err != nil{
		return nil, err
	}
	
	return googleUserInfo, nil
}


func (h *AuthHandler) CreateStaffAccountHandler(c echo.Context) error {

	var staff *types.CreateStaffAccountBind

	if err := c.Bind(&staff); err != nil{
		return err
	}


	staffDTO := &types.CreateStaffAccountDTO{
		Name: strings.TrimSpace(staff.Name),
		Email: strings.TrimSpace(staff.Email),
		Role: strings.TrimSpace(staff.Role),
		Password: strings.TrimSpace(staff.Password),
	}

	if err := h.DB_METHOD.CreateStaffAccount(staffDTO); err != nil{
		return err
	}

	return c.JSON(http.StatusOK, "Staff Account Created")
}


func (h *AuthHandler) FetchStaffAccountsHandler(c echo.Context) error {

	staffAccounts, err := h.DB_METHOD.FetchStaffAccounts()
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, staffAccounts)
}


func (h *AuthHandler) FetchStaffAccountByIdHandler(c echo.Context) error {

	userPayload, ok := c.Get("userPayload").(*types.UserPayload)
	if !ok{
		return c.JSON(http.StatusUnauthorized, "You are Unauthorized to Access this Page")
	}

	staffAccount, err := h.DB_METHOD.FetchStaffAccountById(userPayload.UserID)
	if err != nil{
		return err
	}


	return c.JSON(http.StatusOK, staffAccount)
}

func (h *AuthHandler) EditStaffAccountHandler(c echo.Context) error {
	var staffBind *types.EditStaffAccountBind
	staff_id := c.Param("staff_id")

	if err := c.Bind(&staffBind); err != nil{
		return err
	}

	editStaffData := &types.EditStaffAccountDTO{
		Name: staffBind.Name,
		Email: staffBind.Email,
		OldPassword: staffBind.OldPassword,
		NewPassword: staffBind.NewPassword,
	}

	if err := h.DB_METHOD.EditStaffAccount(editStaffData, staff_id); err != nil{
		fmt.Println("error in edit: ", err)

		if err.Error() == "old_password_not_match"{
			return c.JSON(http.StatusNotFound, "Old Password you entered does not match our records")
		}

		return err
	}

	return c.JSON(http.StatusOK, "Edited Staff Account Successfully")
}

func (h *AuthHandler) DeleteStaffAccountHandler(c echo.Context) error {

	staff_id := c.Param("staff_id")
	if err := h.DB_METHOD.DeleteStaffAccount(staff_id); err != nil{
		return err
	}

	return nil
}


func (h *AuthHandler) FetchAdminAccountHandler(c echo.Context) error {

	userPayload, ok := c.Get("userPayload").(*types.UserPayload)
	if userPayload.Role != "admin" || !ok{
		return c.JSON(http.StatusUnauthorized, "You are Unauthorized to Access this Page")
	}

	admin, err := h.DB_METHOD.FetchAdmin(userPayload.UserID)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, admin)
}

func (h *AuthHandler) FetchLoginAccountHandler(c echo.Context) error {

	userPayload, ok := c.Get("userPayload").(*types.UserPayload)
	if !ok{
		return c.JSON(http.StatusUnauthorized, "You are Unauthorized to Access this Page")
	}

	if userPayload.Role == "admin"{

		admin, err := h.DB_METHOD.FetchAdmin(userPayload.UserID)
		if err != nil{
			return err
		}

		loginAccountAdmin := &types.LoginAccount{
			ID: userPayload.UserID,
			Name: userPayload.Name,
			Role: userPayload.Role,
			AdminType: admin.AdminType,
		}
	
		return c.JSON(http.StatusOK, loginAccountAdmin)
	}

	loginAccountStaff := &types.LoginAccount{
		ID: userPayload.UserID,
		Name: userPayload.Name,
		Role: userPayload.Role,
		Picture: userPayload.Picture,
	}

	return c.JSON(http.StatusOK, loginAccountStaff)
}



func (h *AuthHandler) FetchLoginApplicantHandler(c echo.Context) error {

	userPayload, ok := c.Get("userPayload").(*types.UserPayload)
	if !ok{
		return c.JSON(http.StatusUnauthorized, "You are Unauthorized to Access this Page")
	}

	loginApplicant, err := h.DB_METHOD.FetchLoginApplicant(userPayload.UserID)
	if err != nil{
		return err
	}

	return c.JSON(http.StatusOK, loginApplicant)
}

func (h *AuthHandler) SignoutHandler(c echo.Context) error {

	c.SetCookie(&http.Cookie{
		Name:     "access_token",
		Value:    "",
		Path:     "/",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	})

	c.SetCookie(&http.Cookie{
		Name:     "refresh_token",
		Value:    "",
		Path:     "/",
		Expires:  time.Unix(0, 0),
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	})


	return c.JSON(http.StatusOK, "Signed out successfully")
}