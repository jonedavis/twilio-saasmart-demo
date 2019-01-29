import React, { Component } from 'react';
import Toggle from 'react-toggle';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { IoIosText, IoIosMail } from 'react-icons/io';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.channelTypes = ['sms', 'whatsApp', 'email', 'phone'];
    this.channels = [];

    this.state = {
      name: '',
      emailAddress: '',
      number: '',
      sms: false,
      phone: false,
      whatsApp: false,
      email: false,
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleToggle = param => (event) => {
    this.setState({[param]: event.target.checked });
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();

    await this.notify();
  }

  notify = async () => {
    this.channels = [];
    this.channelTypes.forEach(type => {
        if (this.state[type]) this.channels.push(type);
    });

    try {
        await axios.post('http://localhost:3002/api/notify', {
            channels: this.channels,
            name: this.state.name,
            email: this.state.emailAddress,
            number: this.state.number
        });
    } catch (err) {
        console.log(err);
    }
  }

  render() {
    return (
      <div className="container centered">
        <div className="row">
          <div className="col">
            <p>How to receive notifications on different communication channels with Twilio and SendGrid demo.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Channels</h2>
              <label className="px-3">
                <Toggle
                    icons = {{
                        checked: <FaPhone />,
                        unchecked: <FaPhone />
                    }}
                    defaultChecked={this.state.phone}
                    onChange={this.handleToggle('phone')} />
                    <h6> Phone </h6>
            </label>
            <label className="px-3">
                <Toggle
                    icons = {{
                        checked: <IoIosMail />,
                        unchecked: <IoIosMail />
                    }}
                    defaultChecked={this.state.email}
                    onChange={this.handleToggle('email')} />
                    <h6> E-Mail </h6>
            </label>
            <label className="px-3">
                <Toggle
                    icons = {{
                        checked: <IoIosText />,
                        unchecked: <IoIosText />
                    }}
                    defaultChecked={this.state.sms}
                    onChange={this.handleToggle('sms')} />
                    <h6> SMS </h6>
            </label>
            <label className="px-3">
                <Toggle
                    icons = {{
                        checked: <FaWhatsapp />,
                        unchecked: <FaWhatsapp />
                    }}
                    defaultChecked={this.state.whatsApp}
                    onChange={this.handleToggle('whatsApp')} />
                    <h6> WhatsApp </h6>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Information</h2>
            <form onSubmit={this.handleFormSubmit}>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Full name" required/>
              <input type="email" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} placeholder="Email" required/>
              <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} placeholder="Phone number" required/>
              <div className="pt-3">
                <button type="submit"><span>Send Notifications</span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col">
          <p>Visit <a href="https://www.twilio.com/docs">twilio.com/docs</a> and <a href="https://www.sendgrid.com/">sendgrid.com</a> for more information.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
