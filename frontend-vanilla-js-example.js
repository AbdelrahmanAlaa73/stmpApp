// Vanilla JavaScript Example - How to call the Email API
// You can use this in any JavaScript file or script tag

const API_URL = 'http://localhost:3000/api/send-email';

// Function to send email to ONE client
async function sendEmail(clientEmail, subject, message, options = {}) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientEmail: clientEmail,
        subject: subject,
        message: message,
        companyName: options.companyName,
        senderName: options.senderName,
        companyAddress: options.companyAddress
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Email sent successfully!', result);
      return result;
    } else {
      console.error('❌ Error:', result.error);
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    throw error;
  }
}

// Function to send email to MULTIPLE clients
async function sendEmails(clientEmails, subject, message, options = {}) {
  try {
    const response = await fetch('http://localhost:3000/api/send-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientEmails: clientEmails,
        subject: subject,
        message: message,
        companyName: options.companyName,
        senderName: options.senderName,
        companyAddress: options.companyAddress
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Emails sent successfully!', result);
      return result;
    } else {
      console.error('❌ Error:', result.error);
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('❌ Failed to send emails:', error);
    throw error;
  }
}

// Example Usage:

// Send to ONE client
sendEmail(
  'abdelrahmanala73@gmail.com',
  'Important Update',
  'We have exciting updates to share with you!',
  {
    companyName: 'Your Company',
    senderName: 'Your Name'
  }
)
.then(result => {
  console.log('Email sent!', result);
})
.catch(error => {
  console.error('Error:', error);
});

// Send to MULTIPLE clients
sendEmails(
  ['client1@example.com', 'client2@example.com', 'client3@example.com'],
  'Important Update',
  'We have exciting updates to share with you!',
  {
    companyName: 'Your Company',
    senderName: 'Your Name'
  }
)
.then(result => {
  console.log('Emails sent!', result);
})
.catch(error => {
  console.error('Error:', error);
});

