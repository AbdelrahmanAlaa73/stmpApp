const { sendUpdateToClient } = require('./smtp-email-sender');

/**
 * Simple script to send an update email to ONE client
 * 
 * CONFIGURED:
 * - Sender: bidoala73@gmail.com (configured in smtp-email-sender.js)
 * - Receiver: abdelrahmanala73@gmail.com
 * 
 * IMPORTANT: Before running, you need to:
 * 1. Get Gmail App Password for bidoala73@gmail.com
 *    - Go to: https://myaccount.google.com/apppasswords
 *    - Enable 2-Step Verification first
 *    - Generate App Password and update SMTP_PASS in smtp-email-sender.js
 * 2. Update the subject and message below
 * 3. Run: node send-to-one-client.js
 */

async function sendToClient() {
  // ===== CONFIGURE THESE VALUES =====
  // Receiver email
  const clientEmail = 'abdelrahmanala73@gmail.com'; // Receiver email
  
  const subject = 'Important Update: New Features & Improvements';
  
  const updateMessage = `
    We're excited to share some important updates with you:
    
    1. New features have been added to improve your experience
    2. System maintenance will occur on [Date] from [Time]
    3. We've enhanced security measures for your protection
    
    If you have any questions, please don't hesitate to contact us.
  `;
  
  const options = {
    companyName: 'Your Company Name',    // Optional: Your company name
    senderName: 'Your Name',             // Optional: Your name
    companyAddress: '123 Business St, City, State 12345' // Optional: Your address
  };
  // ====================================

  try {
    console.log(`Sending email to ${clientEmail}...`);
    
    await sendUpdateToClient(
      clientEmail,
      subject,
      updateMessage,
      options
    );
    
    console.log(`✅ Email sent successfully to ${clientEmail}!`);
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    process.exit(1);
  }
}

// Run the function
sendToClient();

