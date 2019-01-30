

# Send notifications on different channels with Twilio and SendGrid.

This repository demonstrates how to send notifications over SMS, WhatsApp, Voice (calls), and Email.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

### Requirements:
1. [Twilio Account](https://www.twilio.com/console)
2. [SendGrid Account](https://www.sendgrid.com)

> To send messages with WhatsApp in production, you have to wait for WhatsApp to formally approve your account. But, that doesn't mean you have to wait to start building. Twilio Sandbox for WhatsApp lets you test your app in a developer environment.

### Product documentation:
1. [Programmable SMS](https://www.twilio.com/docs/sms)
2. [Programmable Voice](https://www.twilio.com/docs/voice)
	3. [Amazon Polly TTS TwiML](https://www.twilio.com/docs/voice/twiml/say/text-speech#voices)
3. [WhatsApp](https://www.twilio.com/docs/sms/whatsapp/api)
4. [Email](https://sendgrid.com/docs/for-developers/)

## Using this project
Clone the project, change into the directory and install the dependencies.
```bash

git clone https://github.com/jonedavis/twilio-saastr-demo.git

cd twilio-saastr-demo

npm install

```
Create a `.env` file for environment variables in the root directory of this project.

Example:
```bash
TWILIO_ACCOUNT_SID=ACCOUNT_SID_HERE
TWILIO_AUTH_TOKEN=AUTH_TOKEN_HERE
SENDGRID_API_KEY=API_KEY_HERE
```
Read the blog post [How To Set Environment Variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) to learn more.

You can start the server on its own with the command:
```bash

npm run server

```
Run the React application on its own with the command:
```bash

npm start
```
Run both applications together with the command:
```bash

npm run dev

```
The React application will run on port 3000 and the server port 3002.
