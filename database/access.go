package database

import (
	"time"

	"github.com/johnkristanf/TMS-IPAS/types"
)


const (
	PENDING  = "PENDING"
	GRANTED  = "GRANTED"
	DENIED   = "DENIED"
)

type Access_Logs struct {
	ID         int64        `gorm:"primaryKey;autoIncrement:true;uniqueIndex:idx_userID"`
	Role       string       `gorm:"not null"`
	AccessRole string       `gorm:"not null"`
	IsAdmin    bool       	`gorm:"not null"`
	Status     string 		`gorm:"not null;default:'PENDING'"`
	UserID     int64        `gorm:"not null"`

	CreatedAt time.Time `gorm:"not null;autoCreateTime"`
	UpdatedAt time.Time `gorm:"not null;autoCreateTime"`
}


type ACCESS_DB_METHOD interface {
	RequestAccessRole(*types.AccessRole) error
	FindUserByRole(string) (*types.StaffAccountInfo, error)
	FindUserByAdminType(string) (*types.StaffAccountInfo, error)

	FetchPendingRequestAccess() ([]types.FetchPendingRequestAccess, error)
	FetchAdminRequestAccess(string, int64) ([]types.FetchAdminRequestAccess, error)

	FetchStaffAccessRequests(int64) ([]types.FetchStaffAccessRequests, error)

	UpdateRequestAccessStatus(int64, string) error

	DeleteAccessRequest(int64) error
	DeleteOldAccessLogs() error
	

}

func (sql * SQL) RequestAccessRole(accessData *types.AccessRole) error {

	accessRoleData := Access_Logs{
		Role: accessData.Role,
		AccessRole: accessData.AccessRole,
		UserID: accessData.UserID,
		IsAdmin: accessData.IsAdmin,
	}

	if result := sql.DB.Create(&accessRoleData); result.Error != nil {
		return result.Error
	}

	return nil
}

func (sql *SQL) FindUserByRole(role string) (userInfo *types.StaffAccountInfo, err error) {
	result := sql.DB.Select("id, name, email, password, role, admin_type").Table("office_accounts").Where("role = ?", role).First(&userInfo)
	if result.Error != nil {
		return nil, result.Error
	}

	return userInfo, nil
}

func (sql *SQL) FindUserByAdminType(adminType string) (userInfo *types.StaffAccountInfo, err error) {
	result := sql.DB.Select("id, name, email, password, role, admin_type").Table("office_accounts").Where("admin_type = ?", adminType).First(&userInfo)
	if result.Error != nil {
		return nil, result.Error
	}

	return userInfo, nil
}




func (sql *SQL) FetchPendingRequestAccess() ([]types.FetchPendingRequestAccess, error) {

	var accessLogs []types.FetchPendingRequestAccess

	 if err := sql.DB.Table("access_logs").Select("id", "role", "access_role").
        Where("status = ? AND is_admin = ? ", PENDING, false). 
		
		
        Find(&accessLogs).Error; err != nil {
        return nil, err
    }

	return accessLogs, nil
}

func (sql *SQL) FetchAdminRequestAccess(adminType string, userID int64) ([]types.FetchAdminRequestAccess, error) {

	var accessLogs []types.FetchAdminRequestAccess

	 if err := sql.DB.Table("access_logs").Select("id", "role", "access_role", "status", "user_id").
        Where("access_role = ? OR user_id = ? AND is_admin = ? ", adminType, userID, true). 
		
		
        Find(&accessLogs).Error; err != nil {
        return nil, err
    }

	return accessLogs, nil
}

func (sql *SQL) FetchStaffAccessRequests(userID int64) ([]types.FetchStaffAccessRequests, error) {

	var accessLogs []types.FetchStaffAccessRequests

	if err := sql.DB.Table("access_logs").
    Select("id", "status", "access_role").
    Where("status IN (?) AND is_admin = ? AND user_id = ?", []string{GRANTED, DENIED}, false, userID).
    Find(&accessLogs).Error; err != nil {
        return nil, err
    }

	return accessLogs, nil
}



func (sql *SQL) UpdateRequestAccessStatus(requestID int64, status string) error {

	result := sql.DB.Model(&Access_Logs{}).Where("id = ?", requestID).Updates(&Access_Logs{
        Status: status,
    })

    if result.Error != nil {
        return result.Error
    }

    return nil
}

func (sql *SQL) DeleteAccessRequest(requestID int64) error {

	result := sql.DB.Where("id = ?", requestID).Delete(&Access_Logs{})
	if result.Error != nil {
		return result.Error
	}

	return nil
}


func (sql *SQL) DeleteOldAccessLogs() error {

	oneDayAgo := time.Now().Add(-24 * time.Hour)

	result := sql.DB.Where("created_at < ?", oneDayAgo).Delete(&Access_Logs{})
	if result.Error != nil {
		return result.Error
	}

	return nil
}