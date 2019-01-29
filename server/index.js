'use strict';

const express = require('express');
const pino = require('express-pino-logger')();
const app = express();
const Notify = require('./notify');

app.use(express.json());
app.use(pino);

app.post('/api/notify', (req, res) => {
  try {
    const notify = new Notify();
    let notifiers = [];
    let event = { ...req.body };

    if (!event || Object.keys(event).length === 0) {
      res.send('No event arg. Reload page and try again?');
    }

    event.channels.forEach(channel => {
      if (channel === 'sms' || channel === 'whatsApp') {
        notifiers.push(notify.sendMessage(channel, event.name, event.number));
      } else if (channel === 'email') {
        notifiers.push(notify.sendEmail(event.name, event.emailAddress));
      } else if (channel === 'phone') {
        notifiers.push(notify.call(event.name, event.number));
      } else {
        throw new Error('Unknown channel.');
      }
    });

    (async () => {
      await Promise.all(notifiers)
    })();

  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }

  res.sendStatus(200);
});

app.listen(3002, () =>
  console.log('Express server is running on localhost:3002')
);