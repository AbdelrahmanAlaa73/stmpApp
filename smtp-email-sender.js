const nodemailer = require('nodemailer');

// Load environment variables from .env file if it exists
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not installed, continue without it
}

// SMTP Configuration
// Sender: bidoala73@gmail.com
// IMPORTANT: You need to get an App Password from Gmail for bidoala73@gmail.com
// Steps: https://myaccount.google.com/apppasswords
// 
// OPTION 1: Use .env file (recommended)
// Create a .env file with:
// SMTP_USER=bidoala73@gmail.com
// SMTP_PASS=your-app-password-here
//
// OPTION 2: Update the values below directly
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'bidoala73@gmail.com', // Sender email
    pass: process.env.SMTP_PASS || 'your-app-password' // Get App Password from Gmail
  }
};

// Create transporter
const transporter = nodemailer.createTransport(smtpConfig);

/**
 * Send update email to clients
 * @param {Array<string>} clientEmails - Array of client email addresses
 * @param {string} subject - Email subject
 * @param {string} updateMessage - The update message to send
 * @param {Object} options - Additional options (from, replyTo, etc.)
 * @returns {Promise} - Promise that resolves when emails are sent
 */
async function sendUpdateToClients(clientEmails, subject, updateMessage, options = {}) {
  try {
    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP server is ready to send emails');

    // Prepare email options
    const mailOptions = {
      from: options.from || smtpConfig.auth.user,
      replyTo: options.replyTo || smtpConfig.auth.user,
      to: clientEmails.join(', '), // Send to all clients
      subject: subject,
      html: generateUpdateEmailHTML(updateMessage, options),
      text: generateUpdateEmailText(updateMessage, options)
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Update email sent successfully!');
    console.log('Message ID:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending update email:', error);
    throw error;
  }
}

/**
 * Generate HTML email template for updates
 * @param {string} message - The update message
 * @param {Object} options - Additional options
 * @returns {string} - HTML email content
 */
function generateUpdateEmailHTML(message, options = {}) {
  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <style>
        * {
          direction: rtl;
          text-align: right;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Arial, 'Arabic Typesetting', 'Traditional Arabic', sans-serif;
          line-height: 1.8;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .header {
          background-color: #4CAF50;
          color: white;
          padding: 25px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .update-message {
          background-color: #f9f9f9;
          padding: 20px;
          border-right: 4px solid #4CAF50;
          margin: 20px 0;
          border-radius: 4px;
          white-space: pre-line;
          font-size: 16px;
          line-height: 2;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #666;
          font-size: 12px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        .info-section {
          margin: 15px 0;
          padding: 10px;
          background-color: #fafafa;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${options.companyName || 'إشعار مهم'}</h1>
      </div>
      <div class="content">
        <div class="update-message">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <div class="footer">
          <p><strong>${options.senderName || 'الفريق'}</strong></p>
          ${options.companyAddress ? `<p>${options.companyAddress}</p>` : ''}
          <p style="font-size: 11px; color: #999; margin-top: 15px;">هذه رسالة تلقائية. يرجى عدم الرد على هذا البريد الإلكتروني.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email for updates
 * @param {string} message - The update message
 * @param {Object} options - Additional options
 * @returns {string} - Plain text email content
 */
function generateUpdateEmailText(message, options = {}) {
  return `
${options.companyName || 'Important Update'}

Dear Valued Client,

${message}

Thank you for your continued partnership.

Best regards,
${options.senderName || 'The Team'}

---
This is an automated message. Please do not reply to this email.
${options.companyAddress ? options.companyAddress : ''}
  `.trim();
}

/**
 * Send update to a single client
 * @param {string} clientEmail - Client email address
 * @param {string} subject - Email subject
 * @param {string} updateMessage - The update message
 * @param {Object} options - Additional options
 * @returns {Promise} - Promise that resolves when email is sent
 */
async function sendUpdateToClient(clientEmail, subject, updateMessage, options = {}) {
  return sendUpdateToClients([clientEmail], subject, updateMessage, options);
}

// Example usage - Send to ONE client
async function example() {
  // Receiver email address
  const clientEmail = 'abdelrahmanala73@gmail.com';

  const updateMessage = `
    We're excited to share some important updates with you:
    
    1. New features have been added to improve your experience
    2. System maintenance will occur on [Date] from [Time]
    3. We've enhanced security measures for your protection
    
    If you have any questions, please don't hesitate to contact us.
  `;

  try {
    // Send to ONE client
    await sendUpdateToClient(
      clientEmail,
      'Important Update: New Features & Improvements',
      updateMessage,
      {
        companyName: 'Your Company Name',
        senderName: 'Your Name',
        companyAddress: '123 Business St, City, State 12345'
      }
    );
    console.log(`Email sent successfully to ${clientEmail}`);
  } catch (error) {
    console.error('Failed to send update email:', error);
  }
}

// Example usage - Send to MULTIPLE clients (if needed)
async function exampleMultiple() {
  const clients = [
    'client1@example.com',
    'client2@example.com',
    'client3@example.com'
  ];

  const updateMessage = `
    We're excited to share some important updates with you:
    
    1. New features have been added to improve your experience
    2. System maintenance will occur on [Date] from [Time]
    3. We've enhanced security measures for your protection
    
    If you have any questions, please don't hesitate to contact us.
  `;

  try {
    await sendUpdateToClients(
      clients,
      'Important Update: New Features & Improvements',
      updateMessage,
      {
        companyName: 'Your Company Name',
        senderName: 'Your Name',
        companyAddress: '123 Business St, City, State 12345'
      }
    );
    console.log(`Emails sent successfully to ${clients.length} clients`);
  } catch (error) {
    console.error('Failed to send update emails:', error);
  }
}

// Export functions
module.exports = {
  sendUpdateToClients,
  sendUpdateToClient,
  transporter
};

// Run example if this file is executed directly
if (require.main === module) {
  example();
}

