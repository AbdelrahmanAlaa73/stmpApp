# دليل الإعداد - Setup Guide

## المشكلة: "لا تتوفر لديكَ أي كلمات مرور للتطبيقات"

إذا رأيت هذه الرسالة: **"لا تتوفر لديكَ أي كلمات مرور للتطبيقات"** أو **"You don't have any app passwords available"**

**السبب:** لم تفعّل **التحقق بخطوتين (2-Step Verification)** بعد.

**⚠️ مهم جداً:** لا يمكنك إنشاء كلمة مرور التطبيق بدون تفعيل التحقق بخطوتين أولاً!

---

## المشكلة: "الإعداد الذي تبحث عنه غير متاح في حسابك"

إذا ظهرت لك هذه الرسالة، اتبع الخطوات التالية:

### الخطوة 1: تفعيل التحقق بخطوتين (2-Step Verification) - **مطلوب أولاً!**

**⚠️ هذه الخطوة إلزامية!** لا يمكنك المتابعة بدونها.

1. اذهب إلى: **https://myaccount.google.com/security**
2. سجل الدخول بحساب `bidoala73@gmail.com`
3. ابحث عن قسم **"كيفية تسجيل الدخول إلى Google"** أو **"Signing in to Google"**
4. اضغط على **"التحقق بخطوتين"** أو **"2-Step Verification"**
5. اتبع التعليمات لتفعيله:
   - ستحتاج إلى إدخال **رقم هاتفك**
   - سيرسل لك Google **رسالة نصية** برمز التحقق
   - أدخل الرمز لإكمال التفعيل
6. **انتظر حتى يتم التفعيل بنجاح** قبل المتابعة للخطوة التالية

### الخطوة 2: إنشاء كلمة مرور التطبيق (بعد تفعيل 2-Step Verification)

**بعد** تفعيل التحقق بخطوتين بنجاح:

1. اذهب إلى: **https://myaccount.google.com/apppasswords**
   - أو ابحث في Google Account عن "App passwords"
2. الآن يجب أن يظهر لك خيار **"كلمات مرور التطبيقات"** أو **"App passwords"**
3. اختر:
   - **التطبيق:** Mail (البريد)
   - **الجهاز:** Other (Custom name) - آخر (اسم مخصص)
   - **الاسم:** أدخل أي اسم مثل "Node.js Email Sender" أو "Email App"
4. اضغط **"Generate"** أو **"إنشاء"**
5. **انسخ كلمة المرور** (16 حرف، مثل: `abcd efgh ijkl mnop`)
   - ⚠️ **مهم جداً:** انسخها الآن! لن تتمكن من رؤيتها مرة أخرى
   - لا تضع مسافات عند استخدامها (أزل المسافات)

### إذا لم يظهر خيار App Passwords بعد تفعيل 2-Step Verification:

### الخطوة 3: إضافة كلمة المرور إلى المشروع

#### الطريقة 1: استخدام ملف .env (موصى به)

1. أنشئ ملف `.env` في نفس المجلد (بجانب `package.json`)
2. أضف المحتوى التالي:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bidoala73@gmail.com
SMTP_PASS=abcdefghijklmnop
```
   (ضع كلمة المرور التي نسختها في الخطوة 2 - بدون مسافات)

**في Windows PowerShell:**
```powershell
# أنشئ الملف
New-Item -Path .env -ItemType File

# أو استخدم محرر النصوص
notepad .env
```

#### الطريقة 2: تعديل الملف مباشرة

افتح `smtp-email-sender.js` وعدّل السطر 27:
```javascript
pass: process.env.SMTP_PASS || 'your-16-character-app-password-here'
```
ضع كلمة المرور بدلاً من `'your-16-character-app-password-here'`

---

### حل المشاكل الشائعة

#### المشكلة: لا يظهر خيار "App passwords"
- تأكد من تفعيل **التحقق بخطوتين** أولاً (الخطوة 1)
- انتظر بضع دقائق بعد التفعيل
- جرب تسجيل الخروج والدخول مرة أخرى

#### المشكلة: كلمة المرور لا تعمل
- تأكد من إزالة المسافات من كلمة المرور (16 حرف متتالي)
- تأكد من نسخ كلمة المرور بشكل صحيح
- جرب إنشاء كلمة مرور جديدة

---

#### الحل البديل: استخدام حساب Outlook أو Yahoo

إذا كان Gmail لا يعمل، يمكنك استخدام:
- Outlook: smtp-mail.outlook.com
- Yahoo: smtp.mail.yahoo.com

#### الحل البديل 2: استخدام حساب Outlook أو Yahoo

إذا كان Gmail لا يعمل، يمكنك استخدام:
- Outlook: smtp-mail.outlook.com
- Yahoo: smtp.mail.yahoo.com

---

---

## English Instructions

### Problem: "You don't have any app passwords available"

If you see this message, it means **2-Step Verification is not enabled yet**.

**⚠️ Important:** You cannot create an app password without enabling 2-Step Verification first!

### Step 1: Enable 2-Step Verification (Required First!)

1. Go to: **https://myaccount.google.com/security**
2. Sign in with `bidoala73@gmail.com`
3. Find **"Signing in to Google"** section
4. Click on **"2-Step Verification"**
5. Follow instructions:
   - You'll need to enter your **phone number**
   - Google will send you a **text message** with a verification code
   - Enter the code to complete setup
6. **Wait until it's successfully enabled** before proceeding

### Step 2: Create App Password (After 2-Step Verification)

**After** successfully enabling 2-Step Verification:

1. Go to: **https://myaccount.google.com/apppasswords**
2. Now **"App passwords"** option should appear
3. Select:
   - **App:** Mail
   - **Device:** Other (Custom name)
   - **Name:** Enter any name like "Node.js Email Sender"
4. Click **"Generate"**
5. **Copy the password** (16 characters)
   - ⚠️ **Important:** Copy it now! You won't see it again
   - Remove spaces when using it

### Step 3: Add Password to Project

#### Method 1: Use .env file (Recommended)

1. Create a `.env` file in the same folder (next to `package.json`)
2. Add:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bidoala73@gmail.com
SMTP_PASS=your-16-character-password-here
```
   (Paste the password you copied in Step 2 - without spaces)

#### Method 2: Edit file directly

Edit `smtp-email-sender.js` line 27 and replace the password.

### Troubleshooting

- **App passwords option doesn't appear:** Make sure 2-Step Verification is enabled first
- **Password doesn't work:** Make sure you removed spaces and copied it correctly

