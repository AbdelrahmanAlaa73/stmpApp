# SMTP Email Sender for Client Updates

A Node.js application for sending update emails to clients using SMTP.

## What is SMTP?

**SMTP** stands for **Simple Mail Transfer Protocol**. It's the standard protocol used to send emails over the internet.

### In Simple Terms:
- **SMTP** is like a **postal service** for emails
- It's the system that **delivers your emails** from your application to your clients' inboxes
- Just like you need a post office address to send mail, you need an **SMTP server** (like `smtp.gmail.com`) to send emails
- The SMTP server acts as a **middleman** that takes your email and delivers it to the recipient's email server

### Why Use SMTP?
- It's the **standard way** to send emails programmatically (from code)
- Works with **any email provider** (Gmail, Outlook, Yahoo, custom domains, etc.)
- Allows you to **automate** sending emails to multiple clients
- More reliable than using email clients manually

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your SMTP settings:
   - Copy `.env.example` to `.env`
   - Update the SMTP configuration with your email credentials

## Usage

### Basic Usage

```javascript
const { sendUpdateToClients } = require('./smtp-email-sender');

const clients = ['client1@example.com', 'client2@example.com'];
const message = 'We have exciting updates to share with you!';

sendUpdateToClients(
  clients,
  'Important Update',
  message,
  {
    companyName: 'Your Company',
    senderName: 'Your Name'
  }
);
```

### Send to Single Client

```javascript
const { sendUpdateToClient } = require('./smtp-email-sender');

sendUpdateToClient(
  'client@example.com',
  'Update Subject',
  'Your update message here'
);
```

## Configuration

### Where to Get SMTP Settings

Set environment variables in `.env` file or update the `smtpConfig` object in `smtp-email-sender.js`:

- `SMTP_HOST` - Your SMTP server hostname (see provider-specific settings below)
- `SMTP_PORT` - SMTP port (usually 587 for TLS, 465 for SSL)
- `SMTP_USER` - Your full email address
- `SMTP_PASS` - Your email password or app password (see provider-specific instructions)

### Gmail Setup

**SMTP Settings:**
- `SMTP_HOST`: `smtp.gmail.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: Your Gmail address (e.g., `yourname@gmail.com`)
- `SMTP_PASS`: App Password (NOT your regular password)

**Steps to Get Gmail App Password:**
1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** as the app and **Other** as the device
6. Enter a name (e.g., "Node.js Email Sender")
7. Click **Generate**
8. Copy the 16-character password (use this in `SMTP_PASS`)

### Outlook/Hotmail Setup

**SMTP Settings:**
- `SMTP_HOST`: `smtp-mail.outlook.com` or `smtp.office365.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: Your Outlook email address
- `SMTP_PASS`: Your Outlook password

**Note:** For Outlook, you may need to enable "Less secure app access" or use an app password if 2FA is enabled.

### Yahoo Mail Setup

**SMTP Settings:**
- `SMTP_HOST`: `smtp.mail.yahoo.com`
- `SMTP_PORT`: `587` or `465`
- `SMTP_USER`: Your Yahoo email address
- `SMTP_PASS`: App Password (required)

**Steps to Get Yahoo App Password:**
1. Go to Yahoo Account Security: https://login.yahoo.com/account/security
2. Enable **Two-step verification**
3. Generate an **App Password** for "Mail"
4. Use the generated password in `SMTP_PASS`

### Custom Email Provider (cPanel, Hosting, etc.)

If you have your own domain email (e.g., `yourname@yourdomain.com`):

1. **Check your hosting provider's documentation** for SMTP settings
2. **Common settings:**
   - `SMTP_HOST`: Usually `mail.yourdomain.com` or `smtp.yourdomain.com`
   - `SMTP_PORT`: `587` (TLS) or `465` (SSL)
   - `SMTP_USER`: Your full email address
   - `SMTP_PASS`: Your email account password

3. **Contact your hosting provider** if you're unsure about SMTP settings

### Other Popular Providers

- **Zoho Mail**: `smtp.zoho.com`, port `587`
- **SendGrid**: `smtp.sendgrid.net`, port `587`, username: `apikey`, password: your API key
- **Mailgun**: `smtp.mailgun.org`, port `587`
- **Amazon SES**: Check AWS SES documentation for your region's SMTP endpoint

## Features

- Send emails to multiple clients at once
- HTML and plain text email support
- Professional email templates
- Error handling
- SMTP connection verification