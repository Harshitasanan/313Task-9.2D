import React, { useState } from 'react';
import axios from 'axios';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    const apiKey = '30a3ce8811b63c8db6f2d04bcbd2feec-28e9457d-fa886a70';
    const domain = 'sandbox3e65c01713bc4a6c94f68a4bd652220d.mailgun.org';

    const data = {
      from: 'Harshita <harshita4789.be22@chitkara.edu.in>',
      to: email,
      subject: 'Subject of the Email',
      text: message,
    };

    try {
      const response = await axios.post(
        `https://api.mailgun.net/v3/${domain}/messages`,
        data,
        {
          auth: {
            username: 'api',
            password: apiKey,
          },
        }
      );
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter recipient's email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default EmailForm;
