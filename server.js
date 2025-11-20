const express = require('express');
const cors = require('cors');
const { sendUpdateToClient, sendUpdateToClients } = require('./smtp-email-sender');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow frontend to call this API
app.use(express.json()); // Parse JSON request body

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Email API Server is running!',
    endpoints: {
      'POST /api/send-email': 'Send email to one client',
      'POST /api/send-emails': 'Send email to multiple clients'
    }
  });
});

// API Endpoint: Send email to ONE client
app.post('/api/send-email', async (req, res) => {
  try {
    const { 
      clientEmail, 
      subject, 
      message, 
      companyName, 
      senderName, 
      companyAddress 
    } = req.body;

    // Validate required fields
    if (!clientEmail || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: clientEmail, subject, and message are required'
      });
    }

    // Send email
    await sendUpdateToClient(
      clientEmail,
      subject,
      message,
      {
        companyName: companyName || 'Your Company',
        senderName: senderName || 'The Team',
        companyAddress: companyAddress || ''
      }
    );

    res.json({
      success: true,
      message: `Email sent successfully to ${clientEmail}`,
      recipient: clientEmail
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email'
    });
  }
});

// API Endpoint: Send email to MULTIPLE clients
app.post('/api/send-emails', async (req, res) => {
  try {
    const { 
      clientEmails, 
      subject, 
      message, 
      companyName, 
      senderName, 
      companyAddress 
    } = req.body;

    // Validate required fields
    if (!clientEmails || !Array.isArray(clientEmails) || clientEmails.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'clientEmails must be a non-empty array'
      });
    }

    if (!subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: subject and message are required'
      });
    }

    // Send emails
    await sendUpdateToClients(
      clientEmails,
      subject,
      message,
      {
        companyName: companyName || 'Your Company',
        senderName: senderName || 'The Team',
        companyAddress: companyAddress || ''
      }
    );

    res.json({
      success: true,
      message: `Emails sent successfully to ${clientEmails.length} clients`,
      recipients: clientEmails,
      count: clientEmails.length
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to send emails'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email API Server is running on http://localhost:${PORT}`);
  console.log(`📧 Ready to send emails!`);
});

