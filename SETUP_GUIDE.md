# Kochukov & Blume - Contact Form & Booking Setup Guide

This guide will help you set up Resend for email handling and Cal.com for consultation bookings.

## 📋 Prerequisites

- Node.js installed
- Project dependencies installed (`npm install`)
- Access to email account: info@kblegal.co.za

---

## 🔧 Part 1: Resend Email Setup (Contact Form)

### Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (no credit card required)
3. Verify your email address

### Step 2: Get Your API Key

1. Once logged in, go to **API Keys** in the dashboard
2. Click **"Create API Key"**
3. Name it something like "Koch Blume Production"
4. Select "Sending access" permission
5. Click **Create**
6. **IMPORTANT**: Copy the API key immediately (you won't see it again)
7. Keep it safe - you'll need it in Step 4

### Step 3: Verify Your Domain (Important!)

For production use, you need to verify your domain:

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `kblegal.co.za`
4. Resend will give you DNS records to add:
   - SPF record
   - DKIM record
   - Domain verification record
5. Add these records to your domain's DNS settings (usually in your hosting provider)
6. Wait for verification (can take 24-48 hours)
7. Once verified, update the `FROM_EMAIL` in your `.env.local` to: `noreply@kblegal.co.za`

**Note**: For testing, you can use `onboarding@resend.dev` which works immediately.

### Step 4: Configure Environment Variables

1. Create a file named `.env.local` in your project root
2. Add the following (replace the values):

```env
# Resend API Key (from Step 2)
RESEND_API_KEY=re_your_actual_api_key_here

# Email that receives contact form submissions
CONTACT_EMAIL=info@kblegal.co.za

# From email address
# Use onboarding@resend.dev for testing
# Use noreply@kblegal.co.za after domain verification
FROM_EMAIL=onboarding@resend.dev

# Cal.com booking URL (see Part 2)
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/username/consultation
```

3. Save the file
4. **IMPORTANT**: Never commit `.env.local` to git (it's already in `.gitignore`)

### Step 5: Test the Contact Form

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Go to your contact page
3. Fill out the form with test data
4. Click "Send message"
5. Check `info@kblegal.co.za` for the email
6. If using `onboarding@resend.dev`, emails only go to verified email addresses in your Resend account

### Troubleshooting Resend

**Issue**: Not receiving emails
- Check Resend dashboard logs (shows all sent emails)
- Verify API key is correct
- Check spam folder
- Make sure `CONTACT_EMAIL` is correct

**Issue**: Domain not verified
- Wait 24-48 hours after adding DNS records
- Use `onboarding@resend.dev` for testing in the meantime

**Issue**: 403 Forbidden error
- API key might be incorrect or expired
- Generate a new API key in Resend dashboard

---

## 📅 Part 2: Cal.com Setup (Consultation Booking)

### Step 1: Create Cal.com Account

1. Go to [https://cal.com/signup](https://cal.com/signup)
2. Sign up for a free account
3. Choose your username (e.g., `kochukov-blume` or `kb-legal`)
4. Complete the onboarding

### Step 2: Connect Your Calendar

1. In Cal.com dashboard, go to **Apps**
2. Find and install **Google Calendar** (or Outlook/other)
3. Authorize Cal.com to access your calendar
4. Select which calendar to use for bookings

### Step 3: Create Consultation Event Type

1. In Cal.com, go to **Event Types**
2. Click **"New Event Type"**
3. Configure your consultation:

   **Basic Settings:**
   - Title: "Legal Consultation"
   - URL: `/consultation` (your booking link will be `cal.com/username/consultation`)
   - Description: "Schedule a consultation with Kochukov & Blume"
   - Duration: 30 minutes (or your preference)

   **Availability:**
   - Set your working hours (e.g., Mon-Fri 9am-5pm)
   - Set buffer time between meetings (e.g., 15 minutes)
   - Set minimum notice period (e.g., 24 hours)

   **Booking Questions:**
   - Add custom questions like:
     - "What is the nature of your legal matter?"
     - "Have you consulted with us before?"
     - "Preferred method of consultation" (Office visit / Video call / Phone)

   **Location:**
   - Add office address: 1st Floor, 145 Second St, Sandton
   - Add Zoom/Google Meet option if offering virtual consultations
   - Add phone call option

4. Save the event type

### Step 4: Get Your Booking URL

1. Go to your event type
2. Copy the booking URL (looks like: `https://cal.com/kochukov-blume/consultation`)
3. Update your `.env.local`:

```env
NEXT_PUBLIC_CAL_BOOKING_URL=https://cal.com/kochukov-blume/consultation
```

4. Restart your dev server

### Step 5: Customize Branding (Optional)

1. Go to **Settings** → **Profile**
2. Upload your logo
3. Add business information
4. Customize colors to match your brand (#548caf for primary)

### Step 6: Set Up Email Notifications

Cal.com automatically sends:
- Booking confirmation to client
- Booking notification to you
- Reminder emails before the meeting
- Rescheduling/cancellation notifications

You can customize these in **Settings** → **Email**

### Step 7: Test Your Booking

1. Go to your contact page on the website
2. Click "Book Your Consultation" button
3. You'll be redirected to Cal.com
4. Make a test booking
5. Check that you receive confirmation emails
6. Check that it appears in your connected calendar

### Troubleshooting Cal.com

**Issue**: Booking button not working
- Check that `NEXT_PUBLIC_CAL_BOOKING_URL` is set correctly in `.env.local`
- Restart dev server after changing environment variables
- Make sure the URL is public (not set to private in Cal.com)

**Issue**: Calendar not syncing
- Reconnect calendar in Cal.com Apps
- Check calendar permissions
- Make sure the calendar isn't set to busy/unavailable

**Issue**: Not receiving notifications
- Check email settings in Cal.com
- Check spam folder
- Verify email address in Cal.com profile

---

## 🚀 Deployment Checklist

Before deploying to production:

### Resend:
- [ ] Domain verified in Resend
- [ ] `FROM_EMAIL` updated to your domain (not `onboarding@resend.dev`)
- [ ] API key added to hosting platform environment variables
- [ ] Test email from production site

### Cal.com:
- [ ] Event type configured and published
- [ ] Calendar connected and syncing
- [ ] Availability hours set correctly
- [ ] Booking link added to environment variables
- [ ] Test booking from production site

### Environment Variables on Hosting Platform:

If deploying to **Vercel**:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add these variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `FROM_EMAIL`
   - `NEXT_PUBLIC_CAL_BOOKING_URL`
4. Redeploy your site

If deploying to **Netlify** or other platforms, add the same environment variables in their respective settings.

---

## 📞 Support

### Resend Support
- Documentation: [https://resend.com/docs](https://resend.com/docs)
- Email: support@resend.com
- Discord: [https://resend.com/discord](https://resend.com/discord)

### Cal.com Support
- Documentation: [https://cal.com/docs](https://cal.com/docs)
- GitHub: [https://github.com/calcom/cal.com](https://github.com/calcom/cal.com)
- Community: [https://cal.com/slack](https://cal.com/slack)

---

## 💰 Pricing & Limits

### Resend Free Tier:
- 3,000 emails/month
- 100 emails/day
- Perfect for starting out
- Upgrade if you exceed limits ($20/month for 50k emails)

### Cal.com Free Tier:
- Unlimited bookings
- Unlimited event types
- Calendar sync
- Basic integrations
- Upgrade for advanced features ($12/month)

---

## 🔒 Security Notes

1. **Never** commit `.env.local` to version control
2. **Never** share your Resend API key publicly
3. Keep your API keys secure
4. Rotate API keys periodically
5. Use different API keys for development and production

---

## ✅ Quick Start Checklist

- [ ] Created Resend account
- [ ] Got Resend API key
- [ ] Created `.env.local` file
- [ ] Added Resend credentials to `.env.local`
- [ ] Created Cal.com account
- [ ] Connected calendar to Cal.com
- [ ] Created consultation event type
- [ ] Added Cal.com URL to `.env.local`
- [ ] Restarted dev server
- [ ] Tested contact form
- [ ] Tested booking button
- [ ] Verified emails are being received

---

## 📁 Files Modified

The following files have been created/modified:

1. **`/src/app/api/contact/route.ts`** - API endpoint for contact form
2. **`/src/app/api/contact/email-template.tsx`** - Email template
3. **`/src/app/contact/page.tsx`** - Updated form submission and booking redirect
4. **`.env.local`** - Environment variables (you need to create this)

---

**Need help?** Contact the developer or refer to the documentation links above.
