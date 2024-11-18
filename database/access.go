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
	Status     string 		`gorm:"not null;default:'PENDING'"`
	UserID     int64        `gorm:"not null"`

	CreatedAt time.Time `gorm:"not null;autoCreateTime"`
	UpdatedAt time.Time `gorm:"not null;autoCreateTime"`
}


type ACCESS_DB_METHOD interface {
	StaffRequestAccessRole(*types.StaffAccessRole) error
	DeleteOldAccessLogs() error
	FetchPendingRequestAccess() ([]types.FetchPendingRequestAccess, error)
	UpdateRequestAccessStatus(int64, string) error
}

func (sql * SQL) StaffRequestAccessRole(accessData *types.StaffAccessRole) error {

	accessRoleData := Access_Logs{
		Role: accessData.Role,
		AccessRole: accessData.AccessRole,
		UserID: accessData.UserID,
	}

	if result := sql.DB.Create(&accessRoleData); result.Error != nil {
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


func (sql *SQL) FetchPendingRequestAccess() ([]types.FetchPendingRequestAccess, error) {

	var accessLogs []types.FetchPendingRequestAccess

	 if err := sql.DB.Table("access_logs").Select("id", "role", "access_role").
        Where("status = ?", PENDING). 
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