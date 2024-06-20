package helpers

import (
	"crypto/rand"
	"encoding/base64"
)

func GenerateStateOauthCookie() string {
	b := make([]byte, 16)
	rand.Read(b)
	state := base64.URLEncoding.EncodeToString(b)
   
	return state
}

