'use strict';

// Learn more about setting your .env here:
// https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html

// Requires Twilio Account Sid and Auth Token
// Visit https://www.twilio.com/console to sign up
const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Requires Twilio Account Sid and Auth Token
// Visit https://www.sendgrid.com to sign up
const sgClient = require('@sendgrid/mail');
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const notificationBody = require('./notificationBody');
const FROM_NUMBER = 'TWILIO_NUMBER_HERE';
const FROM_EMAIL = 'test@example.com';

module.exports = class Notify {
    async sendMessage(event, channel, customerName, customerNumber) {
        const body = notificationBody(channel, customerName);
        let from = FROM_NUMBER;

        // Requires whatsApp:
        // https://www.twilio.com/whatsapp
        if (channel === 'whatsApp') {
            customerNumber = `whatsapp:${customerNumber}`;
            from = `whatsapp:${FROM_NUMBER}`;
        }

        // Requires Twilio Phone Number
        // Visit https://www.twilio.com/console/phone-numbers/search
        return await twilioClient.messages.create({
            to: customerNumber,
            from: from,
            body: body
        });
    };

    async call(customerName, customerNumber) {
        // Learn to set up TwiML bins: https://www.twilio.com/docs/voice/twiml
        const twiml = notificationBody('phone', customerName);
        return await twilioClient.calls.create({
            url: twiml,
            to: customerNumber,
            from: FROM_NUMBER
        });
    }

    async sendEmail(customerName, customerEmail) {
        // Visit https://sendgrid.com/docs/for-developers/ to get started sending emails.
        const body = notificationBody('email', customerName);
        const email = {
            to: customerEmail,
            from: {
                name: 'Mr. Demo Demo',
                email: FROM_EMAIL,
            },
            subject: 'Hello Notification',
            text: body
        };
        sgClient.send(email);
    }
}