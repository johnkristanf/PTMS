package helpers

import (
	"crypto/tls"
	"fmt"
	"net/smtp"
)

var (
	host = "smtp.gmail.com"
	port = "587"

	// password = "bkzd cgbb wywn qmvi"
	// from="johnkristan01@gmail.com"

	// password = "qhub gqap gbyu capy"
	// from="panabocityengineeringptms07@gmail.com"

	password = "nwmv kqis ixjg vcqs"
	from="jkpogz4@gmail.com"
)

func Connection() (*smtp.Client, error) {
    serverAddress := fmt.Sprintf("%s:%s", host, port)

    // Establish the initial connection
    conn, err := smtp.Dial(serverAddress)
    if err != nil {
        return nil, err
    }

    // Upgrade to TLS
    if err := conn.StartTLS(&tls.Config{ServerName: host}); err != nil {
        return nil, err
    }

    return conn, nil
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


func SendDisapprovalEmail(to string, disApprovalMessage string) error {

	client, err := Connection();
	if err != nil {
        return err
    }

    defer Disconnection(client)

	body := disApprovalMessage

	headers := map[string]string{
		"From":		from,
		"To": 		to,
		"Subject": "Panabo City's Engineering Office Issuance of Permits",
	}

	message := ""
    for k, v := range headers {
        message += fmt.Sprintf("%s: %s\r\n", k, v) 
    }
    message += "\r\n" + body

	authenticate := smtp.PlainAuth("", from, password, host)


	if err := client.Auth(authenticate); err != nil{
		return err
	}

	if err := client.Mail(from); err != nil{
		return err
	}

	if err := client.Rcpt(to); err != nil{
		return err
	}

	writer, err := client.Data()
    if err != nil {
		fmt.Println("Data Error:", err)
        return err
    }


    _, err = writer.Write([]byte(message))
    if err != nil {
        return err
    }

	
	if err := writer.Close(); err != nil {
        fmt.Println("Writer Close Error:", err)
        return err
    }

    fmt.Println("Email sent successfully to:", to)
    return nil
}


func SendReleaseDateEmail(to string, disApprovalMessage string) error {

	client, err := Connection();
	if err != nil {
        return err
    }

    defer Disconnection(client)

	body := disApprovalMessage

	headers := map[string]string{
		"From":		from,
		"To": 		to,
		"Subject": "Panabo City's Engineering Office Issuance of Permits",
	}

	message := ""
    for k, v := range headers {
        message += fmt.Sprintf("%s: %s\r\n", k, v) 
    }
    message += "\r\n" + body

	authenticate := smtp.PlainAuth("", from, password, host)


	if err := client.Auth(authenticate); err != nil{
		return err
	}

	if err := client.Mail(from); err != nil{
		return err
	}

	if err := client.Rcpt(to); err != nil{
		return err
	}

	writer, err := client.Data()
    if err != nil {
		fmt.Println("Data Error:", err)
        return err
    }


    _, err = writer.Write([]byte(message))
    if err != nil {
        return err
    }

	
	if err := writer.Close(); err != nil {
        fmt.Println("Writer Close Error:", err)
        return err
    }

    fmt.Println("Email sent successfully to:", to)
    return nil
}


func SendApprovalEmail(to string, applicantName string) error {

	client, err := Connection();
	if err != nil {
        return err
    }

    defer Disconnection(client)

	body := fmt.Sprintf(`Dear %s,

We are delighted to inform you that your application for a permit has been successfully reviewed and approved by the PTMS team of Panabo City's Engineering Office. Your submitted documents and information have met all the necessary requirements, and we are now proceeding with the final stages of your permit issuance.

We appreciate your effort and cooperation throughout the process. Should you need further assistance or have any questions, please feel free to reach out to us.

Thank you and congratulations on the approval of your application!

Sincerely,
Panabo City Engineering's Issuance of Permit Section`, applicantName)


	headers := map[string]string{
		"From":		from,
		"To": 		to,
		"Subject": "Panabo City's Engineering Office Issuance of Permits",
	}

	message := ""
    for k, v := range headers {
        message += fmt.Sprintf("%s: %s\r\n", k, v) 
    }
    message += "\r\n" + body

	authenticate := smtp.PlainAuth("", from, password, host)


	if err := client.Auth(authenticate); err != nil{
		return err
	}

	if err := client.Mail(from); err != nil{
		return err
	}

	if err := client.Rcpt(to); err != nil{
		return err
	}

	writer, err := client.Data()
    if err != nil {
		fmt.Println("Data Error:", err)
        return err
    }


    _, err = writer.Write([]byte(message))
    if err != nil {
        return err
    }

	
	if err := writer.Close(); err != nil {
        fmt.Println("Writer Close Error:", err)
        return err
    }

    fmt.Println("Email sent successfully to:", to)
    return nil
}



func SendApplicationCodeSetEmail(applicationCode string, to string, applicantName string) error {

	client, err := Connection();
	if err != nil {
        return err
    }

    defer Disconnection(client)

	body := fmt.Sprintf(`Dear %s,

We are pleased to inform you that your application code %s has been successfully set. This signifies that your application is now ready to proceed to the next stage and is currently under review by the PTMS administration team.

We appreciate your patience as we move forward with the review process. You will be notified of any further updates regarding your application status. Should you need further assistance or have any questions, please feel free to reach out to us.

Thank you for your cooperation.

Sincerely,
Panabo City Engineering's Issuance of Permit Section`, applicantName, applicationCode)



	headers := map[string]string{
		"From":		from,
		"To": 		to,
		"Subject": "Panabo City's Engineering Office Issuance of Permits",
	}

	message := ""
    for k, v := range headers {
        message += fmt.Sprintf("%s: %s\r\n", k, v) 
    }
    message += "\r\n" + body

	authenticate := smtp.PlainAuth("", from, password, host)


	if err := client.Auth(authenticate); err != nil{
		return err
	}

	if err := client.Mail(from); err != nil{
		return err
	}

	if err := client.Rcpt(to); err != nil{
		return err
	}

	writer, err := client.Data()
    if err != nil {
		fmt.Println("Data Error:", err)
        return err
    }


    _, err = writer.Write([]byte(message))
    if err != nil {
        return err
    }

	
	if err := writer.Close(); err != nil {
        fmt.Println("Writer Close Error:", err)
        return err
    }

    fmt.Println("Email sent successfully to:", to)
    return nil
}