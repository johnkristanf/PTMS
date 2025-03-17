package helpers

import (
	"time"
)

func GetPhTimeZone() (time.Time, error) {
	location, err := time.LoadLocation("Asia/Manila")
    if err != nil {
        return time.Time{}, err
    }

	now := time.Now().In(location)

	return now, nil
}
