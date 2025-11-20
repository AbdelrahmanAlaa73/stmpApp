# دليل إنشاء كلمة مرور التطبيق - App Password Guide

## المشكلة: "لا تتوفر لديكَ أي كلمات مرور للتطبيقات"

إذا رأيت هذه الرسالة، فهذا يعني أنك لم تفعّل **التحقق بخطوتين (2-Step Verification)** بعد.

---

## ✅ الحل: اتبع هذه الخطوات بالترتيب

### الخطوة 1: تفعيل التحقق بخطوتين (مطلوب أولاً)

**⚠️ مهم جداً:** لا يمكنك إنشاء كلمة مرور التطبيق بدون تفعيل التحقق بخطوتين أولاً!

1. اذهب إلى: **https://myaccount.google.com/security**
2. سجّل الدخول بحساب `bidoala73@gmail.com`
3. ابحث عن قسم **"كيفية تسجيل الدخول إلى Google"** أو **"Signing in to Google"**
4. اضغط على **"التحقق بخطوتين"** أو **"2-Step Verification"**
5. اتبع التعليمات:
   - ستحتاج إلى إدخال رقم هاتفك
   - سيرسل لك Google رسالة نصية برمز التحقق
   - أدخل الرمز لإكمال التفعيل

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
   - ⚠️ **مهم:** انسخها الآن! لن تتمكن من رؤيتها مرة أخرى
   - لا تضع مسافات عند استخدامها (أزل المسافات)

### الخطوة 3: إضافة كلمة المرور إلى المشروع

#### الطريقة 1: استخدام ملف .env (موصى به)

1. انسخ ملف `.env.example` إلى `.env`:
   ```bash
   copy .env.example .env
   ```
   أو في PowerShell:
   ```powershell
   Copy-Item .env.example .env
   ```

2. افتح ملف `.env` وعدّل:
   ```
   SMTP_USER=bidoala73@gmail.com
   SMTP_PASS=abcdefghijklmnop
   ```
   (ضع كلمة المرور التي نسختها في الخطوة 2)

#### الطريقة 2: تعديل الملف مباشرة

افتح `smtp-email-sender.js` وعدّل السطر 27:
```javascript
pass: process.env.SMTP_PASS || 'your-16-character-app-password-here'
```
ضع كلمة المرور بدلاً من `'your-16-character-app-password-here'`

---

## 🔍 حل المشاكل الشائعة

### المشكلة: لا يظهر خيار "App passwords"

**الحل:**
- تأكد من تفعيل **التحقق بخطوتين** أولاً (الخطوة 1)
- انتظر بضع دقائق بعد التفعيل
- جرب تسجيل الخروج والدخول مرة أخرى

### المشكلة: "الإعداد الذي تبحث عنه غير متاح في حسابك"

**الحل:**
- هذا يعني أن التحقق بخطوتين غير مفعّل
- اتبع الخطوة 1 أعلاه

### المشكلة: كلمة المرور لا تعمل

**الحل:**
- تأكد من إزالة المسافات من كلمة المرور (16 حرف متتالي)
- تأكد من نسخ كلمة المرور بشكل صحيح
- جرب إنشاء كلمة مرور جديدة

---

## 📝 ملخص سريع

1. ✅ فعّل **2-Step Verification**: https://myaccount.google.com/security
2. ✅ أنشئ **App Password**: https://myaccount.google.com/apppasswords
3. ✅ انسخ كلمة المرور (16 حرف)
4. ✅ ضعها في ملف `.env` أو في `smtp-email-sender.js`

---

## English Instructions

### Step 1: Enable 2-Step Verification (Required First)

**⚠️ Important:** You cannot create an app password without enabling 2-Step Verification first!

1. Go to: **https://myaccount.google.com/security**
2. Sign in with `bidoala73@gmail.com`
3. Find **"Signing in to Google"** section
4. Click on **"2-Step Verification"**
5. Follow instructions (requires phone number)

### Step 2: Create App Password (After 2-Step Verification)

**After** successfully enabling 2-Step Verification:

1. Go to: **https://myaccount.google.com/apppasswords**
2. Select:
   - **App:** Mail
   - **Device:** Other (Custom name)
   - **Name:** Enter any name like "Node.js Email Sender"
3. Click **"Generate"**
4. **Copy the password** (16 characters)
   - ⚠️ **Important:** Copy it now! You won't see it again
   - Remove spaces when using it

### Step 3: Add Password to Project

#### Method 1: Use .env file (Recommended)

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Edit `.env`:
   ```
   SMTP_USER=bidoala73@gmail.com
   SMTP_PASS=your-16-character-password-here
   ```

#### Method 2: Edit file directly

Edit `smtp-email-sender.js` line 27 and replace the password.

---

## Quick Summary

1. ✅ Enable **2-Step Verification**: https://myaccount.google.com/security
2. ✅ Create **App Password**: https://myaccount.google.com/apppasswords
3. ✅ Copy password (16 characters)
4. ✅ Add it to `.env` file or `smtp-email-sender.js`

