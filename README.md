
# Send notifications on different channels with Twilio and SendGrid.

This repository demonstrates how to send notifications over SMS, WhatsApp, Voice (calls), and Email.

### Requirements:
1. [Twilio Account](https://www.twilio.com/console)
2. [SendGrid Account](https://www.sendgrid.com)

> To send messages with WhatsApp in production, you have to wait for WhatsApp to formally approve your account. But, that doesn't mean you have to wait to start building. Twilio Sandbox for WhatsApp lets you test your app in a developer environment.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

## Using this project
Clone the project, change into the directory and install the dependencies.
```bash

git clone https://github.com/jonedavis/twilio-saastr-demo.git

cd twilio-saastr-demo

npm install

```
Create a `.env` file for environment variables in your server.

Example:
```bash
TWILIO_ACCOUNT_SID=ACCOUNT_SID_HERE
TWILIO_AUTH_TOKEN=AUTH_TOKEN_HERE
SENDGRID_API_KEY=API_KEY_HERE
```
Learn more about setting your .env from Twilio's blog post, [How To Set Environment Variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html).

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