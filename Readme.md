// This service is setup in order to send emails using nodeMailer

To SetUp

1) npm i
2) create .env file set your email account and password using the following variables and a mongodbConnectUrl
GMAIL_USER_ID
GMAIL_PASSWORD
DB_URL
3) npm start
4) use post localhost:3000/send/email
5) send the following in req
 normal text -->  in req body in text format
 emailListString --> in query params
 emailSubject --> in query params
6) If you have any attachments put it in attachments folder and give your file name and path or else comment attachment key from mailOptions in emailService.