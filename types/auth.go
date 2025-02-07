package types

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type OfficeAccounts struct {
	Name 	 	string
	Email    	string
	Password 	string
	Role     	string
	AdminType 	string
}


type SignupCredentialsBind struct {
	FullName    string 	`json:"full_name"`
	Email    	string 	`json:"email"`
	Password 	string 	`json:"password"`
}

type LoginCredentialsBind struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type PasswordRestEmailBind struct {
	Email    string `json:"email"`
}

type UpdateUserPassword struct {
	Email    string `json:"email"`
	NewPassword string `json:"newPassword"`
}


type SignupCredentialsDTO struct {
	FullName    string
	Email    string
	Password string
}

type LoginCredentialsDTO struct {
	Email    string
	Password string
}

type CreateStaffAccountBind struct {
	Name 	 string		`json:"name"`
	Email    string 	`json:"email"`
	Role     string 	`json:"role"`
	Password string 	`json:"password"`
}

type CreateStaffAccountDTO struct {
	Name 		string
	Email    	string
	Role 		string
	Password 	string
}

type FetchOfficeAccounts struct{
	ID 		int64		`json:"id"`
	Name 	string		`json:"name"`
	Email 	string		`json:"email"`
	Role 	string		`json:"role"`
}

type FetchAdminAccount struct{
	ID 			int64		`json:"id"`
	Name 		string		`json:"name"`
	AdminType 	string		`json:"adminType"`
}


type EditStaffAccountBind struct {
	Name 	 string		`json:"name"`
	Email    string 	`json:"email"`
	OldPassword    string 	`json:"old_password"`
	NewPassword    string 	`json:"new_password"`

}

type EditStaffAccountDTO struct {
	Name 	 	   string		
	Email    	   string 	
	OldPassword    string 	
	NewPassword    string 	
}


type StaffAccountInfo struct {
	ID       int64
	Name	 string
	Email    string
	Password string
	Role     string
	AdminType string
}

type ApplicantAccountInfo struct {
	ID       	int64
	FullName	string
	Email    	string
	Password 	string
	HasLogined 	bool
	IsVerified 	bool
	CreatedAt   time.Time
	UpdatedAt   time.Time
}

type SignupResponse struct{
	Message string
	Email string
}



type GoogleUserInfo struct {
	ID       string 	`json:"id"`
	Email    string 	`json:"email"`
	Name     string 	`json:"name"`
	Picture  string 	`json:"picture"`

}

type LastSignedInUser struct {
	ID       	   int64 		`json:"id"`
	Name 	 	   string		`json:"name"`
	Email    	   string 		`json:"email"`
	Role     	   string		`json:"role"`
	Picture  	   string 		`json:"picture"`
	HasLogined     bool		
}

type LoginApplicantInfo struct {
	ID       	   int64 		`json:"id"`
	FullName 	 	   string		`json:"full_name"`
	Email    	   string 		`json:"email"`
	Role     	   string		`json:"role"`
	Picture  	   string 		`json:"picture"`
	HasLogined     bool		
}

type SignInResponseChan struct{
	Error    error
	UserInfo *LastSignedInUser
	IsExistingUser bool
}


type LoginResponse struct {
	UserInfo *StaffAccountInfo
	Error    error
}

type JWTPayloadClaims struct {
	ID      int64 	 	`json:"user_id"`
	Name	string		`json:"name"`
	Email   string 		`json:"email"`
	Role    string 		`json:"role"`
	Picture string 		`json:"picture"`
	Expires int64  		`json:"expires"`
	jwt.RegisteredClaims
}

type UserPayload struct {
	UserID  int64
	Name 	string
	Email   string
	Role 	string
	Picture string
}

type LoginAccount struct{
	ID      	 int64 		`json:"id"`
	Name    	 string 	`json:"name"`
	Role    	 string 	`json:"role"`
	AdminType    string 	`json:"adminType"`
	Picture    	 string 	`json:"picture"`
}

type LoginApplicant struct{
	ID       int64 		`json:"user_id"`
	Email    string 	`json:"email"`
}