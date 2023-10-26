import React, { useState } from 'react';
import './Newsletter.css';

function NewsletterSignup() {
  const [showMessage, setShowMessage] = useState(false); 
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true); 
    setEmail(''); 
  };

  return (
    <div className="signup-form">
      <form action="/" onSubmit={handleSubmit}>
        <div className='space1'>
        <div className="form-row">
          <div className="form-group">
            <h4>SIGN UP FOR OUR DAILY INSIDER</h4>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              required
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">
            Subscribe
          </button>
        </div>
        {showMessage && (
          <div className="thank-you-message">Thank you for signing up!</div>
        )}
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;
