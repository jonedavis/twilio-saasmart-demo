'use strict';

module.exports = (channel, name) => {
    const notifications = {
        sms: `Hello ${name} from SMS.`,
        phone: `LINK_TO_TWIML_BIN_HERE`, // https://www.twilio.com/docs/voice/twiml
        whatsApp: `Hello ${name} from WhatsApp.`,
        email: `Hello ${name} from Email.`,
    };

    return notifications[channel];
}