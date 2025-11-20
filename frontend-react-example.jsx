// React Example - How to call the Email API from React
// Install: npm install axios (or use fetch)

import React, { useState } from 'react';
import axios from 'axios'; // or use fetch API

const API_URL = 'http://localhost:3000/api/send-email';

function EmailSender() {
  const [formData, setFormData] = useState({
    clientEmail: 'abdelrahmanala73@gmail.com',
    subject: 'Important Update',
    message: 'We\'re excited to share some important updates with you!',
    companyName: '',
    senderName: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // Option 1: Using axios
      const response = await axios.post(API_URL, formData);
      
      // Option 2: Using fetch (alternative)
      // const response = await fetch(API_URL, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // const result = await response.json();

      if (response.data.success) {
        setMessage({ 
          text: response.data.message, 
          type: 'success' 
        });
        // Reset form
        setFormData({
          clientEmail: '',
          subject: '',
          message: '',
          companyName: '',
          senderName: ''
        });
      } else {
        setMessage({ 
          text: response.data.error, 
          type: 'error' 
        });
      }
    } catch (error) {
      setMessage({ 
        text: error.response?.data?.error || error.message, 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-sender">
      <h1>📧 Send Email</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>To (Email):</label>
          <input
            type="email"
            name="clientEmail"
            value={formData.clientEmail}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Company Name (Optional):</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Sender Name (Optional):</label>
          <input
            type="text"
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  );
}

export default EmailSender;

