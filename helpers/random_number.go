package helpers

import (
	"fmt"
	"math/rand"
)

func GenerateRandomNumber() string {
	randomPart := rand.Intn(100000) 
	return fmt.Sprintf("09%05d", randomPart) // Ensure 7 digits with "09" prefix
}


