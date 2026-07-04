# GoHighLevel Setup Guide for Mailhouse Media

## Overview

GoHighLevel (GHL) will handle all contact management, email/SMS sequences, booking forms, pipelines, and payments. n8n just handles scraping and pushing data to GHL.

---

## Step 1: GHL Account Setup

### 1.1 Account Structure (Single Account)

Use a **single GHL account** for all Mailhouse Media operations across all cities.

**Why single account:**
- See all leads across all cities in one place
- Unified reporting and analytics
- Simpler management
- Easier to spot cross-city opportunities
- No switching between accounts

**Organization strategy:**
- Use **tags** to organize by city, route, status
- Use **custom fields** to store city/route data
- Use **pipelines** to track sales process
- Use **smart lists** to filter by city/route

**Note:** You already have ATS locations and other businesses as sub-accounts. Keep Mailhouse Media as its own separate account (not a sub-account) for clean separation.

### 1.2 SaaS Mode Opportunity (Unlimited Plan)

Your Unlimited plan includes **SaaS mode** — you can white-label GHL and resell it.

**What This Means:**
You could license the platform to local operators in other cities:
- Charge monthly fee ($297-$997/month per city)
- They run it using your workflows/templates
- You collect recurring revenue without doing the work

**SaaS Scaling Math:**
- 10 cities @ $497/mo = $4,970/month ($59,640/year)
- 50 cities @ $497/mo = $24,850/month ($298,200/year)

This is how you build a $1M+ business without doing the fulfillment.

**Note:** This is optional. You can run Mailhouse Media without SaaS mode. But it's a massive opportunity if you want to scale without operational overhead.

### 1.3 Create Custom Fields

Go to **Settings → Custom Fields** and create these fields:

| Field Name | Type | Description |
|---|---|---|
| `businessName` | Text | Business name |
| `category` | Text | Business category (restaurant, gym, etc.) |
| `googleRating` | Text | Google rating (e.g., "4.5") |
| `reviewCount` | Number | Number of Google reviews |
| `routeNumber` | Text | Postal route number (1-8) |
| `zipCode` | Text | ZIP code (e.g., "28301") |
| `adSpaceRoute` | Text | Route where ad space is reserved |
| `adSpaceSlot` | Number | Slot number (1-20) |
| `adSpaceStatus` | Text | Status: available, reserved, paid, ad_received, mailed |
| `adSpaceType` | Text | Package type: standard, premium, featured |
| `adSpacePrice` | Number | Price paid ($550, $750, $1000) |
| `adHeadline` | Text | Ad headline text |
| `adDescription` | Text | Ad description/body text |
| `adFileUrl` | Text | URL to uploaded ad creative |
| `mailerEdition` | Text | Mailer edition (e.g., "Fayetteville Summer 2026") |

### 1.2 Create Tags

Go to **Settings → Tags** and create these tags:

**City Tags:**
- `city-fayetteville`
- `city-jacksonville`
- `city-raleigh`
- `city-charlotte`
- `city-tampa`
- `city-orlando`
- `city-san-antonio`
- `city-austin`
- `city-columbus`
- `city-indianapolis`

**Status Tags:**
- `status-new`
- `status-contacted`
- `status-interested`
- `status-not-interested`
- `status-reserved`
- `status-paid`
- `status-ad-received`
- `status-mailed`
- `status-do-not-contact`

**Source Tags:**
- `source-google-maps`
- `source-website`
- `source-referral`

**Route Tags (create as needed):**
- `route-1`
- `route-2`
- `route-3`
- `route-4`
- `route-5`
- `route-6`
- `route-7`
- `route-8`

---

## Step 2: Create Pipeline

Go to **Settings → Pipelines** and create a new pipeline called **"Ad Space Sales"**.

### Pipeline Stages:

1. **New Lead** (default)
   - Color: Gray
   - Description: Just scraped, not contacted yet

2. **Contacted** 
   - Color: Blue
   - Description: Initial email sent

3. **Interested**
   - Color: Yellow
   - Description: Replied positively, considering

4. **Space Reserved**
   - Color: Orange
   - Description: Reserved a space, awaiting payment

5. **Paid**
   - Color: Green
   - Description: Payment received

6. **Ad Creative Received**
   - Color: Purple
   - Description: Ad artwork submitted

7. **In Design**
   - Color: Pink
   - Description: Ad being laid out

8. **Mailer Sent**
   - Color: Dark Green
   - Description: Mailer printed and mailed

### Pipeline Automation:

**When contact moves to "Contacted":**
- Add tag: `status-contacted`
- Remove tag: `status-new`

**When contact moves to "Interested":**
- Add tag: `status-interested`
- Send internal notification to Ryan

**When contact moves to "Space Reserved":**
- Add tag: `status-reserved`
- Send payment link via email
- Start 48-hour payment reminder workflow

**When contact moves to "Paid":**
- Add tag: `status-paid`
- Send ad specs email
- Send calendar link for design consultation (optional)

**When contact moves to "Ad Creative Received":**
- Add tag: `status-ad-received`
- Notify design team

**When contact moves to "Mailer Sent":**
- Add tag: `status-mailed`
- Send thank you email
- Send photo of mailed piece

---

## Step 3: Create Workflows

### Workflow 1: New Lead → 3-Step Email Sequence

**Trigger:** Tag added → `status-new`

**Step 1: Initial Email (Immediate)**
- Action: Send Email
- Template: "Quick question about {businessName}"
- Body:
```
Hey {{contact.firstName}},

I'm putting together a community mailer for {{contact.city}} — specifically for the {{contact.zipCode}} area (Route {{contact.routeNumber}}). It's a large 9x12 postcard that goes to every single doorstep in that postal route via USPS.

We're offering local businesses in {{contact.zipCode}} a chance to get their ad in front of thousands of households for a fraction of what normal advertising costs.

The mailer hits {{contact.city}} homes directly — no digital scrolling, no ad blockers, just real people seeing your business in their hands.

We have a few ad spaces left for Route {{contact.routeNumber}} and I wanted to give {{contact.businessName}} first shot at one before we fill up.

Interested in hearing more? Just reply to this email and I'll send over the details.

— Ryan Harrell
Mailhouse Media
(910) XXX-XXXX
```

**Wait 3 days**

**Step 2: Social Proof Email**
- Condition: If no reply
- Action: Send Email
- Template: "{businessName} — here's who else is in"
- Body:
```
Hey {{contact.firstName}},

Just following up on the community mailer I mentioned.

We've already got several local businesses signed up for the {{contact.city}} edition — including restaurants, gyms, barbershops, and real estate agents.

These are businesses that know their customers are right here in town, and they're not leaving their visibility to algorithms.

The mailer goes to 5,000+ homes in Route {{contact.routeNumber}}. That's $0.11 per household — cheaper than a Facebook ad, and 5x the response rate.

Still a few spaces left. Want me to hold one for {{contact.businessName}}?

— Ryan
```

**Wait 5 days**

**Step 3: Urgency Email**
- Condition: If no reply
- Action: Send Email
- Template: "Spaces filling up in Route {{contact.routeNumber}}"
- Body:
```
Hey {{contact.firstName}},

Quick heads up — we're down to just a few ad spaces for Route {{contact.routeNumber}} ({{contact.zipCode}}) and I'm closing reservations this week.

Once it's full, we go straight to print and it's out to every doorstep.

If {{contact.businessName}} wants in, now's the time. After this edition, the next one won't be for a few months.

Here's the link to grab your space: https://mailhousemedia.com

Or just reply to this email and I'll walk you through it.

— Ryan Harrell
Mailhouse Media
```

**After Step 3:**
- If no reply: Add tag `status-not-interested`, move to "Do Not Contact" stage
- If replied positively: Move to "Interested" stage

---

### Workflow 2: SMS Follow-Up (Optional but Recommended)

**Trigger:** Tag added → `status-contacted` AND no email reply after 2 days

**Action:** Send SMS
```
Hey {{contact.firstName}}! This is Ryan from Mailhouse Media. I sent you an email about advertising on our community mailer in {{contact.city}}. Did you get a chance to check it out?
```

**Wait 3 days**

**If no reply:** Send SMS
```
Just wanted to follow up — we still have a few ad spaces left for Route {{contact.routeNumber}}. Want me to send you more info?
```

---

### Workflow 3: Payment Reminder (48-Hour Hold)

**Trigger:** Contact moves to "Space Reserved" stage

**Immediate:** Send payment link email
```
Hey {{contact.firstName}},

Great news — Space #{{contact.adSpaceSlot}} in Route {{contact.routeNumber}} is reserved for {{contact.businessName}}!

Here's your payment link: {{contact.paymentLink}}

You have 48 hours to complete payment before the space opens back up.

Once paid, I'll send you the ad specs and deadlines.

Let me know if you have any questions!

— Ryan
```

**Wait 24 hours**

**If not paid:** Send reminder email
```
Hey {{contact.firstName}},

Just a reminder — your space reservation expires in 24 hours.

Complete payment here: {{contact.paymentLink}}

After that, the space goes back to available.

— Ryan
```

**Wait 24 hours**

**If still not paid:** 
- Move contact back to "Interested" stage
- Remove tag `status-reserved`
- Send email: "Your space reservation expired"

---

### Workflow 4: Ad Creative Collection

**Trigger:** Contact moves to "Paid" stage

**Immediate:** Send email with ad specs
```
Hey {{contact.firstName}},

Thanks for your payment! Your ad space is confirmed:

- Route: {{contact.adSpaceRoute}}
- Space: #{{contact.adSpaceSlot}}
- Package: {{contact.adSpaceType}}

**Ad Specs:**
- Size: {{contact.adSize}} (quarter-page / half-page / full-page)
- Format: PDF, PNG, or JPG
- Resolution: 300 DPI
- Color: CMYK
- Deadline: [DATE]

**Submit your ad:**
Option 1: Reply to this email with your ad attached
Option 2: Upload here: [UPLOAD LINK]
Option 3: We can design it for you (free for Premium/Featured packages)

Let me know if you have any questions!

— Ryan
```

**Wait 7 days**

**If no ad received:** Send reminder
```
Hey {{contact.firstName}},

Just checking in — we haven't received your ad creative yet. The deadline is [DATE].

You can:
1. Reply to this email with your ad attached
2. Upload here: [UPLOAD LINK]
3. Let us know if you'd like us to design it for you

Let me know!

— Ryan
```

---

## Step 4: Create Booking Form

Go to **Sites → Forms** and create a new form called **"Ad Space Reservation"**.

### Form Fields:

1. **Business Name** (required, text)
2. **Your Name** (required, text)
3. **Email** (required, email)
4. **Phone** (required, phone)
5. **City** (required, dropdown: Fayetteville, Jacksonville, Raleigh, etc.)
6. **Route** (required, dropdown: Route 1, Route 2, etc.)
7. **Space Number** (required, dropdown: 1-20)
8. **Package** (required, dropdown: Standard $550, Premium $750, Featured $1000)
9. **Short Description** (optional, textarea)

### Form Settings:

- **Redirect URL:** `https://mailhousemedia.com/thank-you`
- **On Submit:** 
  - Create/update contact
  - Add tag: `status-reserved`
  - Move to "Space Reserved" pipeline stage
  - Send internal notification to Ryan
  - Trigger "Payment Reminder" workflow

### Embed Form:

Copy the form embed code and paste it into your landing page `index.html` (replace the current form).

---

## Step 5: Stripe Integration

Go to **Settings → Payments** and connect your Stripe account.

### Create Products:

1. **EDDM Ad Space - Standard** → $550
2. **EDDM Ad Space - Premium** → $750
3. **EDDM Ad Space - Featured** → $1,000

### Payment Links:

For each product, create a payment link:
- Standard: `https://pay.stripe.com/...`
- Premium: `https://pay.stripe.com/...`
- Featured: `https://pay.stripe.com/...`

### Stripe Webhook (Optional):

Set up a webhook to automatically update contact status when payment is received:
- Event: `checkout.session.completed`
- Action: Move contact to "Paid" stage, add tag `status-paid`

---

## Step 6: Update Landing Page

Update `landing-page/index.html` to use GHL form instead of custom form.

### Replace the form section with:

```html
<!-- GHL Form Embed -->
<div id="ghl-form">
  <!-- Paste your GHL form embed code here -->
</div>
```

### Update form submission to push to GHL:

```javascript
// Instead of sending to n8n webhook, submit to GHL form
// GHL handles everything: contact creation, pipeline, email sequence
```

---

## Step 7: Update n8n Workflows

### Modify batch-city-scraper.json:

After scraping, send contacts to GHL instead of Supabase:

```json
{
  "operation": "executeCode",
  "jsCode": "// After scraping, push to GHL\nconst prospects = $input.all();\nconst ghlWebhookUrl = 'https://YOUR_N8N/webhook/scraper-to-ghl';\n\n// Send batch to GHL sync workflow\nawait fetch(ghlWebhookUrl, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({\n    prospects: prospects.map(p => p.json),\n    city: 'Fayetteville',\n    state: 'NC',\n    route_number: routeInfo.route_number,\n    zip_code: routeInfo.zip_code\n  })\n});\n\nreturn [{ json: { success: true, synced_to_ghl: prospects.length } }];"
}
```

---

## Step 8: Testing

### Test 1: Contact Sync
1. Run batch scraper for Fayetteville
2. Check GHL → Contacts → should see new contacts
3. Verify tags are applied correctly

### Test 2: Email Sequence
1. Manually add tag `status-new` to a test contact
2. Wait for email to arrive
3. Check GHL → Workflow → verify steps are triggering

### Test 3: Booking Form
1. Visit landing page
2. Fill out form
3. Submit
4. Check GHL → contact created, pipeline stage updated

### Test 4: Payment Flow
1. Move test contact to "Space Reserved"
2. Check payment reminder email arrives
3. Complete test payment via Stripe
4. Verify contact moves to "Paid" stage

---

## Step 9: Monitoring

### Daily Checks (GHL Dashboard):

- **Contacts:** New contacts added
- **Pipeline:** Contacts moving through stages
- **Emails:** Open rates, reply rates
- **Payments:** Successful transactions

### Weekly Tasks:

- Review pipeline: stuck contacts, follow up manually
- Check email performance: adjust templates if needed
- Review SMS performance (if using)
- Update ad space availability on landing page

### Monthly Tasks:

- Analyze conversion rates by route
- Identify best-performing email templates
- Plan next month's city launches
- Update contact tags and segments

---

## Benefits of Using GHL

✅ **All-in-one platform** — no juggling multiple tools  
✅ **Visual workflow builder** — easy to modify sequences  
✅ **Built-in CRM** — pipeline, contact management, notes  
✅ **Email + SMS** — multi-channel outreach  
✅ **Form builder** — no coding needed for booking forms  
✅ **Stripe integration** — payments built-in  
✅ **Reporting** — dashboards, analytics  
✅ **Mobile app** — manage on the go  
✅ **Templates** — reusable email/SMS templates  
✅ **Automation** — set it and forget it  

---

## Cost Comparison

**Your Setup (GHL Unlimited):**
- GHL Unlimited: $497/month (already have it)
- n8n: $20/month (self-hosted)
- Supabase: $0 (free tier)
- Google Maps API: $0-$50/month (free $200 credit)
- Domain: $1/month
- **Total: ~$520-$570/month**

**ROI:** Even at conservative levels (2 routes/month = $21K profit), you're making 40x your monthly investment.

**Bonus:** With Unlimited plan, you can:
- Create unlimited sub-accounts (one per city)
- White-label the platform
- Resell as SaaS to other operators
- Add unlimited team members
- No contact limits as you scale

---

## Next Steps

1. **Set up GHL account** (if not already)
2. **Create custom fields** (15 min)
3. **Create tags** (10 min)
4. **Create pipeline** (10 min)
5. **Build workflows** (30 min)
6. **Create booking form** (15 min)
7. **Connect Stripe** (10 min)
8. **Update landing page** (10 min)
9. **Test everything** (30 min)
10. **Go live!**

**Total setup time: ~2-3 hours**

---

## Support

**GHL Support:** support@gohighlevel.com  
**GHL Community:** community.gohighlevel.com  
**GHL Documentation:** help.gohighlevel.com

**Mailhouse Media:**  
hello@mailhousemedia.com  
mailhousemedia.com

---

**Last Updated:** June 27, 2026
