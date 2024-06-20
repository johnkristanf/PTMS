package helpers

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
)

var (
	host = "smtp.gmail.com"
	port = "465"

	// password = "bkzd cgbb wywn qmvi"
	// from="johnkristan01@gmail.com"

	password = "qhub gqap gbyu capy"
	from="panabocityengineeringptms07@gmail.com"
)

func Connection() (*smtp.Client, error) {
	TLSconfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName: host,
	}

	serverAddress := fmt.Sprintf("%s:%s", host, port)
	connection, err := tls.Dial("tcp", serverAddress, TLSconfig)
	if err != nil {
		return nil, err
	}

	return smtp.NewClient(connection, host)
}


func Disconnection(client *smtp.Client) {
	if client != nil {
        _ = client.Quit()
    }
}


func SendApplicationEmail(to string, applicantName string) error {

	client, err := Connection();
	if err != nil {
        return err
    }

    defer Disconnection(client)

	body := fmt.Sprintf(`Dear %s,
We are writing to inform you that we received your login information for applying for a permit in the PTMS portal of Panabo City's Engineering Office. Your successful login indicates that you are now ready to proceed with the application process.
We appreciate your interest in applying for permits through PTMS. You may now continue the application process by following these steps:

1. Fill out the applicant information.
2. Print the application form.
3. Check the requirements based on what services you want to apply for and submit them to Panabo City's Engineering Office.
4. Wait for the add-on requirements from the administration.

Thank you for your attention to this matter.

Sincerely,
Panabo City Engineering's Issuance of Permit Section `, applicantName)


	headers := map[string]string{
		"From":		from,
		"To": 		to,
		"Subject": "Panabo City's Engineering Office Issuance of Permits",
	}

	message := ""
	for k, v := range headers {
		message += fmt.Sprintf("%s: %s\r", k, v)
	}
	message += "\r" + body

	authenticate := smtp.PlainAuth("", from, password, host)


	if err := client.Auth(authenticate); err != nil{
		return err
	}

	if err := client.Mail(from); err != nil{
		return err
	}

	if err := client.Rcpt(headers["To"]); err != nil{
		return err
	}

	writer, err := client.Data()
    if err != nil {
        return err
    }


    _, err = writer.Write([]byte(message))
    if err != nil {
        return err
    }

	

	if err := writer.Close(); err != nil{
		return err
	}


	return nil
}