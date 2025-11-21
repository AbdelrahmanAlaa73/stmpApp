# SMTP Email API - Order Form Handler

A Node.js Express API server for sending order form emails via SMTP. Designed for Arabic content with RTL support.

## 🚀 Quick Start (Replit)

1. **Import to Replit:**
   - Go to https://replit.com
   - Click "Create Repl"
   - Click "Import from GitHub"
   - Enter your repository URL

2. **Set Environment Variables:**
   - Click the "Secrets" tab (lock icon) in Replit
   - Add these variables:
     ```
     SMTP_HOST = smtp.gmail.com
     SMTP_PORT = 587
     SMTP_USER = your-email@gmail.com
     SMTP_PASS = your-gmail-app-password
     ```

3. **Run:**
   - Click the "Run" button
   - Your API will be live at: `https://your-repl-name.repl.co`

## 📡 API Endpoints

### POST `/api/send-email`

Send order form email to a client.

**Request Body:**
```json
{
  "clientEmail": "recipient@example.com",
  "name": "أحمد محمد",
  "region": "الرياض",
  "whatsApp": "+966501234567",
  "phone": "+966501234567",
  "address": "شارع الملك فهد، الرياض",
  "productCount": "5",
  "totalPrice": "500",
  "damagedHair": true,
  "hairLoss": false,
  "usedProducts": true,
  "productsWorked": false
}
```

**Required Fields:**
- `clientEmail` - Recipient email address
- `name` - Customer name
- `phone` - Phone number
- `whatsApp` - WhatsApp number
- `region` - Region/Area
- `address` - Full address

**Optional Fields:**
- `productCount` - Number of products
- `totalPrice` - Total price
- `damagedHair` - Boolean
- `hairLoss` - Boolean
- `usedProducts` - Boolean
- `productsWorked` - Boolean

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully to recipient@example.com",
  "recipient": "recipient@example.com"
}
```

### POST `/api/send-emails`

Send email to multiple clients (legacy endpoint).

### GET `/`

Health check endpoint.

## ⚙️ Configuration

### Gmail Setup

1. Go to https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification if not already enabled
3. Generate an App Password for "Mail"
4. Use the 16-character password in `SMTP_PASS`

### Environment Variables

Set these in Replit Secrets or `.env` file:

- `SMTP_HOST` - SMTP server (e.g., `smtp.gmail.com`)
- `SMTP_PORT` - SMTP port (usually `587`)
- `SMTP_USER` - Your email address
- `SMTP_PASS` - Your email app password
- `PORT` - Server port (auto-set by Replit)

## 📧 Email Features

- ✅ Arabic text support (RTL)
- ✅ Professional HTML email template
- ✅ Plain text fallback
- ✅ Automatic formatting
- ✅ Company branding

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run server
npm start

# Server runs on http://localhost:3000
```

## 📦 Project Structure

```
├── server.js              # Express API server
├── smtp-email-sender.js   # Email sending logic
├── package.json           # Dependencies
├── .replit               # Replit configuration
└── README.md             # This file
```

## 🔒 Security Notes

- Never commit `.env` file to Git
- Use App Passwords, not regular passwords
- Keep SMTP credentials secure
- Use environment variables in production

## 📝 License

ISC
