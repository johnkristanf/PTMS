package database

import (
	"fmt"
	"time"

	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/types"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	ID        	int64		`gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	GoogleID  	string		`gorm:"not null"`
	Name  		string		`gorm:"not null"`
	Email     	string 		`gorm:"not null;index"`
	Role      	string 		`gorm:"not null"`
	Picture     string 		`gorm:"not null"`
	HasLogined  bool 		`gorm:"not null"`
	CreatedAt 	time.Time 	`gorm:"not null;autoCreateTime"`
	UpdatedAt 	time.Time	`gorm:"not null;autoUpdateTime"`
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
	Login(*types.LoginCredentialsDTO) (*types.UserInfo, error)
	SignupGoogleUser(*types.GoogleUserInfo) (*types.LastSignedInUser, bool, error)

	CreateStaffAccount(*types.CreateStaffAccountDTO) error
	FetchStaffAccounts() ([]*types.FetchOfficeAccounts, error)
	FetchStaffAccountById(int64) (*types.FetchOfficeAccounts, error)

	EditStaffAccount(*types.EditStaffAccountDTO, string) error
	DeleteStaffAccount(string) error 

	FetchAdmin(int64) (*types.FetchAdminAccount, error)
	FetchLoginApplicant(int64) (*types.LoginApplicant, error)
}

func (sql *SQL) Login(lc *types.LoginCredentialsDTO) (userInfo *types.UserInfo, err error){

	result := sql.DB.Select("id, name, email, password, role, admin_type").Table("office_accounts").Where("email = ?", lc.Email).First(&userInfo)
	if result.Error != nil {
		return nil, result.Error
	}

	if err := bcrypt.CompareHashAndPassword([]byte(userInfo.Password), []byte(lc.Password)); err != nil {
		return nil, err
	}

	return userInfo, nil
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
			Name:      existingUser.Name,
			Email:     existingUser.Email,
			Role:      existingUser.Role,
			Picture:   existingUser.Picture,	
			HasLogined: existingUser.HasLogined,
		}, true, nil 
		
	}


	googleUser := &User{
		GoogleID:   googleUserInfo.ID,
		Name:       googleUserInfo.Name,
		Email:      googleUserInfo.Email,
		Role:       "applicant",
		Picture: 	googleUserInfo.Picture,
		HasLogined: true,
	}

	if err := sql.DB.Create(googleUser).Error; err != nil {
		return nil, false, err
	}

	return &types.LastSignedInUser{
		ID:        googleUser.ID,
		Name:      googleUser.Name,
		Email:     googleUser.Email,
		Role:      googleUser.Role,
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