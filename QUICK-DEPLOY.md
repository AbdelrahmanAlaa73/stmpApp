# ⚡ Quick Deploy to Render.com (5 Minutes)

## 🎯 Fastest Way to Get Your URL

### 1. Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/stmp-email-sender.git
git push -u origin main
```

### 2. Deploy on Render (3 min)

1. Go to: **https://render.com** → Sign up with GitHub
2. Click: **"New +"** → **"Web Service"**
3. Connect your GitHub repo
4. Settings:
   - **Name:** `stmp-email-sender`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** **Free**
5. Add Environment Variables (click "Advanced"):
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=bidoala73@gmail.com
   SMTP_PASS=your-gmail-app-password
   ```
6. Click **"Create Web Service"**

### 3. Get Your URL ✨

After 2-5 minutes, you'll get:
```
https://stmp-email-sender.onrender.com
```

**That's your live API URL!** 🎉

---

## 📧 Test It

```bash
# Health check
curl https://YOUR-URL.onrender.com/

# Send email
curl -X POST https://YOUR-URL.onrender.com/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"clientEmail":"test@example.com","subject":"Test","message":"Hello!"}'
```

---

## ⚠️ Important

- **Free tier sleeps** after 15 min inactivity
- First request after sleep takes ~30 seconds
- Use **UptimeRobot** (free) to keep it awake

---

For detailed instructions, see `DEPLOYMENT-GUIDE.md`

