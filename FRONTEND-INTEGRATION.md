# Frontend Integration Guide

## 📋 Overview

This guide explains how to integrate the email sending functionality into your frontend application.

## 🚀 Quick Start

### Step 1: Start the API Server

```bash
npm run server
```

The server will run on `http://localhost:3000`

### Step 2: Call the API from Frontend

Use one of the examples below based on your frontend framework.

---

## 📡 API Endpoints

### 1. Send Email to ONE Client

**Endpoint:** `POST http://localhost:3000/api/send-email`

**Request Body:**
```json
{
  "clientEmail": "client@example.com",
  "subject": "Email Subject",
  "message": "Your message here",
  "companyName": "Your Company (optional)",
  "senderName": "Your Name (optional)",
  "companyAddress": "Address (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully to client@example.com",
  "recipient": "client@example.com"
}
```

### 2. Send Email to MULTIPLE Clients

**Endpoint:** `POST http://localhost:3000/api/send-emails`

**Request Body:**
```json
{
  "clientEmails": ["client1@example.com", "client2@example.com"],
  "subject": "Email Subject",
  "message": "Your message here",
  "companyName": "Your Company (optional)",
  "senderName": "Your Name (optional)",
  "companyAddress": "Address (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Emails sent successfully to 2 clients",
  "recipients": ["client1@example.com", "client2@example.com"],
  "count": 2
}
```

---

## 💻 Frontend Examples

### 1. Vanilla JavaScript / HTML

See `frontend-example.html` for a complete working example.

**Simple JavaScript:**
```javascript
async function sendEmail() {
  const response = await fetch('http://localhost:3000/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      clientEmail: 'client@example.com',
      subject: 'Important Update',
      message: 'Your message here'
    })
  });
  
  const result = await response.json();
  console.log(result);
}
```

### 2. React

See `frontend-react-example.jsx` for a complete React component.

**Using axios:**
```jsx
import axios from 'axios';

const sendEmail = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/send-email', {
      clientEmail: 'client@example.com',
      subject: 'Important Update',
      message: 'Your message here'
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
```

**Using fetch:**
```jsx
const sendEmail = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientEmail: 'client@example.com',
        subject: 'Important Update',
        message: 'Your message here'
      })
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
```

### 3. Vue.js

```javascript
// In your Vue component
methods: {
  async sendEmail() {
    try {
      const response = await this.$http.post('http://localhost:3000/api/send-email', {
        clientEmail: 'client@example.com',
        subject: 'Important Update',
        message: 'Your message here'
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
```

### 4. Angular

```typescript
// In your Angular service
import { HttpClient } from '@angular/common/http';

sendEmail(emailData: any) {
  return this.http.post('http://localhost:3000/api/send-email', emailData);
}

// In your component
this.emailService.sendEmail({
  clientEmail: 'client@example.com',
  subject: 'Important Update',
  message: 'Your message here'
}).subscribe(result => {
  console.log(result);
});
```

---

## 🔧 Configuration

### Change API URL

If your server runs on a different port or domain, update the `API_URL` in your frontend code:

```javascript
// For production
const API_URL = 'https://your-domain.com/api/send-email';

// For development
const API_URL = 'http://localhost:3000/api/send-email';
```

### CORS Configuration

The server already has CORS enabled. If you need to restrict it to specific domains, edit `server.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}));
```

---

## 🧪 Testing

### Test with HTML Example

1. Start the server:
   ```bash
   npm run server
   ```

2. Open `frontend-example.html` in your browser

3. Fill the form and click "Send Email"

### Test with cURL

```bash
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "clientEmail": "abdelrahmanala73@gmail.com",
    "subject": "Test Email",
    "message": "This is a test message"
  }'
```

---

## 📝 Error Handling

Always handle errors in your frontend:

```javascript
try {
  const response = await fetch('http://localhost:3000/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  const result = await response.json();
  
  if (result.success) {
    // Success
    alert('Email sent successfully!');
  } else {
    // API returned error
    alert('Error: ' + result.error);
  }
} catch (error) {
  // Network or other error
  alert('Failed to send email: ' + error.message);
}
```

---

## 🚀 Production Deployment

### Backend (API Server)

1. Deploy `server.js` to a hosting service (Heroku, Vercel, AWS, etc.)
2. Make sure `.env` file is configured with your SMTP credentials
3. Update CORS to allow your frontend domain

### Frontend

1. Update API URL to your production backend URL
2. Deploy your frontend application
3. Test the integration

---

## 📚 Files Created

- `server.js` - Express API server
- `frontend-example.html` - Complete HTML example
- `frontend-react-example.jsx` - React component example
- `frontend-vanilla-js-example.js` - Vanilla JavaScript example

---

## ❓ Common Issues

### CORS Error

If you see CORS errors, make sure:
- The server is running
- CORS is enabled in `server.js` (it is by default)
- You're using the correct API URL

### Connection Refused

- Make sure the server is running (`npm run server`)
- Check if the port (3000) is correct
- Check firewall settings

### Email Not Sending

- Verify `.env` file has correct SMTP credentials
- Check server console for error messages
- Verify Gmail App Password is correct

