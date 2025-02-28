package database

import (
	"errors"
	"fmt"
	"time"

	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/types"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// type User struct {
// 	ID        	int64		`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
// 	GoogleID  	string		`gorm:"not null"`
// 	Name  		string		`gorm:"not null"`
// 	Email     	string 		`gorm:"not null;index"`
// 	Role      	string 		`gorm:"not null"`
// 	Picture     string 		`gorm:"not null"`
// 	HasLogined  bool 		`gorm:"not null"`
// 	CreatedAt 	time.Time 	`gorm:"not null;autoCreateTime"`
// 	UpdatedAt 	time.Time	`gorm:"not null;autoUpdateTime"`
// }


type User struct {
	ID        	int64		`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	FullName  	string		
	Email     	string 		`gorm:"not null;index"`
	Password    string 		`gorm:"not null;index"`
	Picture     string 		`gorm:"not null;default:'No_Profile'"`
	TempPassword     string 		`gorm:"not null;default:'G8v#2Qz!1xT'"`
	HasLogined  bool 		`gorm:"not null"`
	IsVerified  bool 		`gorm:"not null;default:false"`
	CreatedAt 	time.Time 	`gorm:"not null;autoCreateTime"`
	UpdatedAt 	time.Time 	`gorm:"not null;autoUpdateTime"`
}



type OfficeAccounts struct {
	ID        int64			`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Name	  string		`gorm:"not null"`
	Email     string 		`gorm:"not null;index"`
	Password  string 		`gorm:"not null"`
	Role      string 		`gorm:"not null"`
	AdminType string		
	CreatedAt time.Time 	`gorm:"not null;autoCreateTime"`
	UpdatedAt time.Time		`gorm:"not null;autoUpdateTime"`
}



type AUTH_DB_METHOD interface {
	Login(*types.LoginCredentialsDTO) (*types.StaffAccountInfo, error)
	UserChangePassword(string, string) error

	LoginApplicant(*types.LoginCredentialsDTO) (*types.LoginApplicantInfo, error)
	SignupApplicant(*types.SignupCredentialsDTO) (*types.SignupResponse, error)

	SignupGoogleUser(*types.GoogleUserInfo) (*types.LastSignedInUser, bool, error)

	CreateStaffAccount(*types.CreateStaffAccountDTO) error
	FetchStaffAccounts() ([]*types.FetchOfficeAccounts, error)
	FetchStaffAccountById(int64) (*types.FetchOfficeAccounts, error)

	EditStaffAccount(*types.EditStaffAccountDTO, string) error
	DeleteStaffAccount(string) error 

	FetchAdmin(int64) (*types.FetchAdminAccount, error)
	FetchLoginApplicant(int64) (*types.LoginApplicant, error)
}

func (sql *SQL) Login(lc *types.LoginCredentialsDTO) (userInfo *types.StaffAccountInfo, err error){

	result := sql.DB.Select("id, name, email, password, role, admin_type").Table("office_accounts").Where("email = ?", lc.Email).First(&userInfo)
	if result.Error != nil {
		return nil, result.Error
	}

	if err := bcrypt.CompareHashAndPassword([]byte(userInfo.Password), []byte(lc.Password)); err != nil {
		return nil, err
	}

	return userInfo, nil
}

func (sql *SQL) SignupApplicant(sc *types.SignupCredentialsDTO) (*types.SignupResponse, error){
	var applicantInfo *types.ApplicantAccountInfo

	result := sql.DB.Table("users").
        Select("id, full_name, email, password, has_logined, is_verified").
        Where("email = ?", sc.Email).
        First(&applicantInfo)

	if result.Error == nil {  
    	// User already exists, handle it
		return &types.SignupResponse{Message: "email_already_exists"}, nil

	} else if !errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return nil, result.Error
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(sc.Password), bcrypt.DefaultCost)
	if err != nil {
		return nil, fmt.Errorf("failed to hash password")
	}

	newApplicant := types.ApplicantAccountInfo{
		FullName:   sc.FullName,
		Email:      sc.Email,
		Password:   string(hashedPassword),
		HasLogined: false,
		IsVerified: false,
		CreatedAt:  time.Now(),  
		UpdatedAt:  time.Now(), 
	}

	if err := sql.DB.Table("users").Create(&newApplicant).Error; err != nil {
		return nil, err
	}

	return &types.SignupResponse{Message: "verification_needed", Email: newApplicant.Email}, nil

}

func (sql *SQL) LoginApplicant(lc *types.LoginCredentialsDTO) (*types.LoginApplicantInfo, error) {
	var userInfo User

	result := sql.DB.Select("id, full_name, email, password, picture, temp_password, has_logined").
		Table("users").
		Where("email = ?", lc.Email).
		First(&userInfo)

	if result.Error != nil {
		if errors.Is(result.Error, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("Invalid_Credentials")
		}
		return nil, result.Error
	}

	err := bcrypt.CompareHashAndPassword([]byte(userInfo.Password), []byte(lc.Password))
	if err != nil {
		// If normal password doesn't match, check if a temporary password is set
		if userInfo.TempPassword != "" {

			fmt.Println("userInfo.TempPassword: ", userInfo.TempPassword)
			fmt.Println("lc.Password: ", lc.Password)

			if userInfo.TempPassword != lc.Password {
				return nil, fmt.Errorf("Invalid_Credentials")
			}

			// Optionally, you can add a flag to indicate that the temporary password was used,
			// and perhaps force the user to change it.

		} else {
			// No temporary password to fall back on
			return nil, fmt.Errorf("Invalid_Credentials")
		}
	}

	if !userInfo.IsVerified{
		updateResult := sql.DB.Model(&userInfo).Update("has_logined", true)
		if updateResult.Error != nil {
			return nil, updateResult.Error
		}
	}

	
	return &types.LoginApplicantInfo{
		ID:        userInfo.ID,
		FullName:      userInfo.FullName,
		Email:     userInfo.Email,
		Picture:   userInfo.Picture,
		Role: 	   "applicant",
		HasLogined: userInfo.HasLogined,
	}, nil
}



func (sql *SQL) UserChangePassword(email string, newPassword string) error {

	hashedPassword, err := helpers.GenerateHashedPassword(newPassword)
	if err != nil {
		return err
	}

	result := sql.DB.Model(&OfficeAccounts{}).Where("email = ? ", email).Update("password", hashedPassword)
	if result.Error != nil {
		return result.Error
	}

	return nil
}


func (sql *SQL) CreateStaffAccount(staffDTO *types.CreateStaffAccountDTO) error {
	
	hashedPassword, err := helpers.GenerateHashedPassword(staffDTO.Password)
	if err != nil{
		return err
	}


	staff := &OfficeAccounts{
		Name: staffDTO.Name,
		Email: staffDTO.Email,
		Password: hashedPassword,
		Role: staffDTO.Role,
	}

	if result := sql.DB.Create(&staff); result.Error != nil{
		return result.Error
	}

	return nil
}

func (sql *SQL) FetchStaffAccounts() (staffAccounts []*types.FetchOfficeAccounts, err error){

	result := sql.DB.Select("id, name, email, role").Table("office_accounts").Where("role IN (?)", []string{"RECEIVER", "SCANNER", "RELEASER"}).Find(&staffAccounts)
	err = result.Error
	if err != nil {
		return nil, err
	}

	return staffAccounts, nil

}


func (sql *SQL) FetchStaffAccountById(staff_id int64) (staffAccount *types.FetchOfficeAccounts, err error){

	result := sql.DB.Select("id, name, email, role").
		Table("office_accounts").
		Where("id = ?", staff_id).
		First(&staffAccount)
	err = result.Error
	if err != nil {
		return nil, err
	}

	return staffAccount, nil
}


func (sql *SQL) EditStaffAccount(editStaffData *types.EditStaffAccountDTO, staff_id string) error {

	type OldPassword struct{
		Password string
	}
	var oldPassword OldPassword

	query := sql.DB.Select("password").Table("office_accounts").Where("email = ?", editStaffData.Email).First(&oldPassword)
	if query.Error != nil {
		return query.Error
	}

	if err := bcrypt.CompareHashAndPassword([]byte(oldPassword.Password), []byte(editStaffData.OldPassword)); err != nil {
		return fmt.Errorf("old_password_not_match")
	}


	hashedPassword, err := helpers.GenerateHashedPassword(editStaffData.NewPassword)
	if err != nil{
		return err
	}

	result := sql.DB.Model(&OfficeAccounts{}).Where("id = ?", staff_id).Updates(&OfficeAccounts{
		Name: editStaffData.Name,
		Email: editStaffData.Email,
		Password: hashedPassword,
	})

	if result.Error != nil{
		return result.Error
	}

	return nil
}


func (sql *SQL) DeleteStaffAccount(staff_id string) error {

	if result := sql.DB.Delete(&OfficeAccounts{}, staff_id); result.Error != nil {
		return result.Error
	}

	return nil
}


func (sql *SQL) FetchAdmin(id int64) (admin *types.FetchAdminAccount, err error){

	type Admin struct {
		ID 		  int64
		Role      string 		
	}

	conds := &Admin{ID: id, Role: "admin"}
	result := sql.DB.Model(&OfficeAccounts{}).Where(conds).First(&admin)
	err = result.Error
	if err != nil{
		return nil, err
	}

	return admin, nil
}


// --------------------- GOOGLE USER ----------------------------

func (sql *SQL) SignupGoogleUser(googleUserInfo *types.GoogleUserInfo) (*types.LastSignedInUser, bool, error) {
	var existingUser User

	if err := sql.DB.Where("email = ?", googleUserInfo.Email).First(&existingUser).Error; err == nil {
		return &types.LastSignedInUser{
			ID:        existingUser.ID,
			Name:      existingUser.FullName,
			Email:     existingUser.Email,
			// Role:      existingUser.Role,
			Picture:   existingUser.Picture,	
			HasLogined: existingUser.HasLogined,
		}, true, nil 
		
	}


	googleUser := &User{
		FullName:       googleUserInfo.Name,
		Email:      googleUserInfo.Email,
		// Role:       "applicant",
		Picture: 	googleUserInfo.Picture,
		HasLogined: true,
	}

	if err := sql.DB.Create(googleUser).Error; err != nil {
		return nil, false, err
	}

	return &types.LastSignedInUser{
		ID:        googleUser.ID,
		Name:      googleUser.FullName,
		Email:     googleUser.Email,
		// Role:      googleUser.Role,
		Picture:   googleUser.Picture,
		HasLogined: googleUser.HasLogined,
	}, false, nil 
}


func (sql *SQL) FetchLoginApplicant(user_id int64) (loginApplicant *types.LoginApplicant, err error){

	result := sql.DB.Select("id, email").Table("users").Where("id = ?", user_id).First(&loginApplicant)
	err = result.Error
	if err != nil {
		return nil, err
	}


	return loginApplicant, nil
}