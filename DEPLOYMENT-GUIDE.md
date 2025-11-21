# 🚀 Free Server Deployment Guide

This guide will help you deploy your SMTP Email Sender project to **Render.com** (free tier) and get a live URL.

## 📋 Prerequisites

1. A GitHub account (free)
2. Your project code ready
3. Your SMTP credentials (Gmail App Password, etc.)

## 🎯 Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it (e.g., `stmp-email-sender`)
   - Make it **Public** (required for free tier)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/stmp-email-sender.git
   git push -u origin main
   ```

### Step 2: Deploy to Render.com

1. **Sign up for Render:**
   - Go to https://render.com
   - Click "Get Started for Free"
   - Sign up with your GitHub account (easiest option)

2. **Create a New Web Service:**
   - Click "New +" button
   - Select "Web Service"
   - Connect your GitHub account if not already connected
   - Select your repository (`stmp-email-sender`)

3. **Configure the Service:**
   - **Name:** `stmp-email-sender` (or any name you like)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** (leave empty)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Select **Free** plan

4. **Add Environment Variables:**
   Click "Advanced" and add these environment variables:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `bidoala73@gmail.com` (or your email)
   - `SMTP_PASS` = `your-app-password-here` (Gmail App Password)
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render sets this automatically, but good to have)

5. **Deploy:**
   - Click "Create Web Service"
   - Wait 2-5 minutes for deployment
   - Your app will be live at: `https://stmp-email-sender.onrender.com` (or similar)

### Step 3: Get Your Live URL

Once deployment is complete:
- Your URL will be displayed at the top of the Render dashboard
- Format: `https://YOUR-SERVICE-NAME.onrender.com`
- Example: `https://stmp-email-sender.onrender.com`

### Step 4: Test Your API

1. **Health Check:**
   ```
   GET https://YOUR-URL.onrender.com/
   ```

2. **Send Test Email:**
   ```bash
   curl -X POST https://YOUR-URL.onrender.com/api/send-email \
     -H "Content-Type: application/json" \
     -d '{
       "clientEmail": "test@example.com",
       "subject": "Test Email",
       "message": "This is a test message"
     }'
   ```

## 🔄 Alternative Free Hosting Options

### Option 2: Railway.app (Free Tier with $5 Credit)

1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables in the Variables tab
6. Your app will be live at: `https://YOUR-PROJECT.up.railway.app`

### Option 3: Fly.io (Free Tier)

1. Install Fly CLI: https://fly.io/docs/getting-started/installing-flyctl/
2. Run: `fly launch`
3. Follow the prompts
4. Add secrets: `fly secrets set SMTP_USER=... SMTP_PASS=...`
5. Deploy: `fly deploy`

### Option 4: Cyclic.sh (Free Tier)

1. Go to https://cyclic.sh
2. Sign up with GitHub
3. Click "Deploy Now"
4. Connect your repository
5. Add environment variables
6. Your app will be live at: `https://YOUR-APP.cyclic.app`

## ⚙️ Environment Variables Setup

Make sure to set these in your hosting platform:

| Variable | Value | Example |
|----------|-------|---------|
| `SMTP_HOST` | Your SMTP server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_USER` | Your email | `bidoala73@gmail.com` |
| `SMTP_PASS` | App password | `abcd efgh ijkl mnop` |
| `NODE_ENV` | Environment | `production` |
| `PORT` | Server port | `10000` (auto-set by host) |

## 🔒 Security Notes

- **Never commit `.env` file** to GitHub
- Use environment variables in your hosting platform
- Keep your App Password secret
- Free tier services may sleep after inactivity (Render free tier sleeps after 15 min)

## 📝 Important Notes

1. **Render Free Tier:**
   - Service sleeps after 15 minutes of inactivity
   - First request after sleep takes ~30 seconds (wake-up time)
   - Perfect for development and testing

2. **Keep-Alive (Optional):**
   - Use a service like UptimeRobot (free) to ping your URL every 14 minutes
   - This prevents the service from sleeping

3. **Upgrade Options:**
   - Render: $7/month for always-on service
   - Railway: Pay-as-you-go after free credit
   - Fly.io: Free tier with usage limits

## 🎉 You're Done!

Your API is now live and accessible via:
```
https://YOUR-SERVICE-NAME.onrender.com
```

Test endpoints:
- `GET /` - Health check
- `POST /api/send-email` - Send to one client
- `POST /api/send-emails` - Send to multiple clients

## 🆘 Troubleshooting

**Deployment fails?**
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Service not responding?**
- Check if service is sleeping (free tier)
- Wait 30 seconds for wake-up
- Check logs in Render dashboard

**Email not sending?**
- Verify SMTP credentials are correct
- Check Gmail App Password is valid
- Review error logs in Render dashboard

## 📞 Need Help?

- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app
- Fly.io Docs: https://fly.io/docs

