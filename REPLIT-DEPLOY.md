# 🚀 Deploy to Replit - Quick Guide

## Step 1: Import to Replit

1. Go to **https://replit.com**
2. Sign up/Login with GitHub
3. Click **"Create Repl"**
4. Click **"Import from GitHub"**
5. Enter your repository: `AbdelrahmanAlaa73/stmpApp`
6. Click **"Import"**

## Step 2: Set Environment Variables

1. In Replit, click the **"Secrets"** tab (lock icon 🔒) in the left sidebar
2. Add these environment variables:

   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = bidoala73@gmail.com
   SMTP_PASS = your-gmail-app-password
   ```

3. Click **"Add new secret"** for each variable

## Step 3: Run Your App

1. Click the **"Run"** button (green play button)
2. Wait for dependencies to install
3. Your API will be live at: `https://your-repl-name.repl.co`

## Step 4: Test Your API

### Health Check
```
GET https://your-repl-name.repl.co/
```

### Send Test Email
```bash
curl -X POST https://your-repl-name.repl.co/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "clientEmail": "test@example.com",
    "name": "أحمد محمد",
    "phone": "+966501234567",
    "whatsApp": "+966501234567",
    "region": "الرياض",
    "address": "شارع الملك فهد",
    "productCount": "5",
    "totalPrice": "500",
    "damagedHair": true,
    "hairLoss": false,
    "usedProducts": true,
    "productsWorked": false
  }'
```

## 📝 API Endpoint

**POST** `/api/send-email`

**Request Body:**
```json
{
  "clientEmail": "recipient@example.com",
  "name": "اسم العميل",
  "phone": "+966501234567",
  "whatsApp": "+966501234567",
  "region": "المنطقة",
  "address": "العنوان الكامل",
  "productCount": "5",
  "totalPrice": "500",
  "damagedHair": true,
  "hairLoss": false,
  "usedProducts": true,
  "productsWorked": false
}
```

## ✅ Required Fields

- `clientEmail` - Recipient email
- `name` - Customer name
- `phone` - Phone number
- `whatsApp` - WhatsApp number
- `region` - Region/Area
- `address` - Full address

## 📧 Email Features

- ✅ Arabic text support (RTL)
- ✅ Professional HTML template
- ✅ Automatic formatting
- ✅ Company branding (شركة موهرة)

## 🔒 Security

- Never commit `.env` file
- Use Replit Secrets for environment variables
- Keep SMTP credentials secure

## 🆘 Troubleshooting

**App won't start?**
- Check Replit console for errors
- Verify all environment variables are set
- Check SMTP credentials are correct

**Email not sending?**
- Verify Gmail App Password is correct
- Check Replit console for error messages
- Ensure SMTP credentials are in Secrets tab

**Need help?**
- Check Replit docs: https://docs.replit.com
- Review error logs in Replit console

