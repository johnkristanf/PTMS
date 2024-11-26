package database

import (
	"fmt"
	"os"
	"time"

	"github.com/johnkristanf/TMS-IPAS/helpers"
	"github.com/johnkristanf/TMS-IPAS/types"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type SQL struct {
	DB *gorm.DB
}


func DB_CONFIG() (*SQL, error) {

	
	host     :=  os.Getenv("DB_HOST")
	port     :=  os.Getenv("DB_PORT")
	user     :=  os.Getenv("DB_USER")
	password :=  os.Getenv("DB_PASSWORD")
	dbname   :=  os.Getenv("DB_NAME")

	errorChan := make(chan error, 1)
	dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	sql, err := db.DB()
	if err != nil {
		return nil, err
	}

	sql.SetMaxOpenConns(10)
	sql.SetMaxIdleConns(5)
	sql.SetConnMaxLifetime(time.Hour * 1)
	sql.SetConnMaxIdleTime(time.Minute * 30)

	if err := db.AutoMigrate(
		&OfficeAccounts{}, 
		&User{}, 
		&Application{}, 
		&First_Step_Requirements{}, 
		&Architectural_Requirements{}, 
		&Civil_Requirements{}, 
		&Electrical_Requirements{}, 
		&Assessment{}, 
		&Inbox{},
		&Access_Logs{},
	); err != nil {
		return nil, err
	}

	go func ()  {
		defer close(errorChan)

		if err := SeedOfficeAccounts(db); err != nil{
			errorChan <- err
		}

	}() 

	if err := <- errorChan; err != nil{
		return nil, err
	}

	return &SQL{DB: db}, nil
}


func SeedOfficeAccounts(db *gorm.DB) error {

	adminData := []*types.OfficeAccounts{
		{Name: "Arch. Denis Balatero", Email: "architect@gmail.com", Password: "admin123", Role: "admin", AdminType: "architectural"},
		{Name: "Engr. Jan Riel Enriquz", Email: "electrical@gmail.com", Password: "admin123", Role: "admin", AdminType: "electrical"},
		{Name: "Engr. Goffer Balano", Email: "civil@gmail.com", Password: "admin123", Role: "admin", AdminType: "civil"},
	}

	for _, data := range adminData {

		hashedPassword, err := helpers.GenerateHashedPassword(data.Password)
		if err != nil {
			return err
		}

		accounts := &OfficeAccounts{
			Name: data.Name,
			Email:    data.Email,
			Password: hashedPassword,
			Role:     data.Role,
			AdminType: data.AdminType,
		}

		if err := db.FirstOrCreate(accounts, OfficeAccounts{ Email: data.Email }).Error; err != nil {
			return err
		}
	}

	return nil
}
