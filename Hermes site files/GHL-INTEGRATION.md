# Mailhouse Media — GHL Integration Summary

## What Changed

We moved from n8n handling email/SMS to **GoHighLevel (GHL)** handling all contact management, outreach, and booking.

---

## New Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    LEAD GENERATION (n8n)                     │
│                                                              │
│  1. Batch City Scraper                                      │
│     - Google Maps API → businesses by zip code               │
│     - Filters by route/zip                                   │
│     - Pushes to Supabase (backup) + GHL (primary)            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              CONTACT MANAGEMENT (GHL)                        │
│                                                              │
│  2. Contact Sync (n8n → GHL)                                │
│     - Creates contacts in GHL                                │
│     - Applies tags: city, route, zip, category, status       │
│     - Sets custom fields                                     │
│                                                              │
│  3. Automated Outreach (GHL Workflows)                      │
│     - 3-step email sequence (Day 0, 3, 8)                    │
│     - SMS follow-up (optional)                               │
│     - Pipeline tracking                                      │
│     - Auto-tagging based on responses                        │
│                                                              │
│  4. Booking & Payments (GHL)                                │
│     - Form builder for space reservation                     │
│     - Stripe integration                                     │
│     - Payment reminders (48-hour hold)                       │
│     - Ad creative collection                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  INVENTORY (Supabase)                        │
│                                                              │
│  5. Real-Time Inventory                                     │
│     - Cities, routes, ad_spaces tables                       │
│     - Auto-updates when spaces are sold                      │
│     - Landing page reads from Supabase                       │
│     - Shows "SOLD" stamps on taken spaces                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## What n8n Does Now

| Workflow | Purpose |
|----------|---------|
| `batch-city-scraper.json` | Scrapes Google Maps for businesses by zip code |
| `scraper-to-ghl-sync.json` | Pushes scraped contacts to GHL with tags |
| `route-space-order-webhook.json` | Handles landing page bookings → updates Supabase |

**That's it.** n8n handles scraping + data sync. GHL handles everything else.

---

## What GHL Does Now

| Function | How |
|----------|-----|
| **Contact Management** | All scraped businesses → GHL contacts |
| **Email Sequences** | 3-step drip (intro → social proof → urgency) |
| **SMS Follow-Up** | Optional SMS sequence for higher open rates |
| **Pipeline Tracking** | New → Contacted → Interested → Reserved → Paid → Mailed |
| **Booking Forms** | Space reservation form on landing page |
| **Payments** | Stripe integration, payment links, reminders |
| **Ad Collection** | Email templates for collecting ad creative |
| **Reporting** | Dashboards, open rates, conversion tracking |
| **Automation** | Auto-tagging, stage transitions, notifications |

---

## Setup Checklist

### Phase 1: GHL Setup (2-3 hours)

- [ ] **Create custom fields** (15 min)
  - businessName, category, googleRating, reviewCount
  - routeNumber, zipCode
  - adSpaceRoute, adSpaceSlot, adSpaceStatus, adSpaceType, adSpacePrice
  - adHeadline, adDescription, adFileUrl, mailerEdition

- [ ] **Create tags** (10 min)
  - City tags: city-fayetteville, city-jacksonville, etc.
  - Status tags: status-new, status-contacted, status-interested, etc.
  - Source tags: source-google-maps, source-website
  - Route tags: route-1, route-2, etc.

- [ ] **Create pipeline** (10 min)
  - "Ad Space Sales" pipeline
  - 8 stages: New Lead → Contacted → Interested → Reserved → Paid → Ad Received → In Design → Mailed

- [ ] **Build workflows** (30 min)
  - Workflow 1: New Lead → 3-step email sequence
  - Workflow 2: SMS follow-up (optional)
  - Workflow 3: Payment reminder (48-hour hold)
  - Workflow 4: Ad creative collection

- [ ] **Create booking form** (15 min)
  - Form fields: business name, contact info, city, route, space, package
  - Redirect to thank-you page
  - Auto-create contact + add tags + move pipeline

- [ ] **Connect Stripe** (10 min)
  - Create 3 products: Standard ($550), Premium ($750), Featured ($1,000)
  - Generate payment links
  - Set up webhook for auto-confirmation

- [ ] **Test everything** (30 min)
  - Test contact sync
  - Test email sequence
  - Test booking form
  - Test payment flow

### Phase 2: n8n Setup (1 hour)

- [ ] **Import workflows**
  - `batch-city-scraper.json`
  - `scraper-to-ghl-sync.json`
  - `route-space-order-webhook.json`

- [ ] **Add credentials**
  - Google Maps API key
  - GHL API credentials
  - Supabase credentials

- [ ] **Update batch scraper**
  - After scraping, push to GHL sync webhook
  - Also save to Supabase (backup)

- [ ] **Test scraping**
  - Run batch scraper for Fayetteville
  - Verify contacts appear in GHL
  - Verify tags applied correctly

### Phase 3: Landing Page (30 min)

- [ ] **Update form**
  - Replace custom form with GHL form embed
  - Or keep custom form → submit to GHL API

- [ ] **Update JavaScript**
  - Form submission → GHL API or form handler
  - Real-time inventory still reads from Supabase

- [ ] **Deploy**
  - Push to Vercel/Netlify
  - Point domain: mailhousemedia.com

### Phase 4: First Run (30 min)

- [ ] **Scrape Fayetteville**
  ```bash
  curl -X POST https://YOUR_N8N/webhook/batch-city-scraper \
    -H "Content-Type: application/json" \
    -d '{"city": "Fayetteville", "state": "NC"}'
  ```

- [ ] **Verify in GHL**
  - Check contacts created
  - Check tags applied
  - Check pipeline stage

- [ ] **Test booking**
  - Visit landing page
  - Reserve a space
  - Verify GHL contact updated

- [ ] **Activate workflows**
  - Turn on email sequence workflow
  - Turn on payment reminder workflow
  - Monitor first batch of emails

---

## Automation Flow (End-to-End)

### 1. Lead Generation
```
n8n batch scraper
  ↓
Google Maps API (businesses by zip)
  ↓
Filter by route/zip
  ↓
Push to GHL (with tags)
  ↓
Also save to Supabase (backup)
```

### 2. Outreach
```
GHL detects new contact (tag: status-new)
  ↓
Send email #1 (immediate)
  ↓
Wait 3 days
  ↓
Send email #2 (if no reply)
  ↓
Wait 5 days
  ↓
Send email #3 (if no reply)
  ↓
If no reply → tag as not-interested
If reply → move to "Interested" stage
```

### 3. Booking
```
Prospect visits landing page
  ↓
Selects city → route → space
  ↓
Fills out GHL form
  ↓
GHL creates/updates contact
  ↓
Adds tag: status-reserved
  ↓
Moves to "Space Reserved" pipeline stage
  ↓
Triggers payment reminder workflow
```

### 4. Payment
```
GHL sends payment link (immediate)
  ↓
Wait 24 hours
  ↓
Send reminder (if not paid)
  ↓
Wait 24 hours
  ↓
If paid → move to "Paid" stage
If not paid → release space, move back to "Interested"
```

### 5. Fulfillment
```
GHL sends ad specs email (when paid)
  ↓
Wait 7 days
  ↓
Send reminder (if no ad received)
  ↓
Collect ad creative
  ↓
Move to "Ad Received" stage
  ↓
Design/layout postcard
  ↓
Move to "In Design" stage
  ↓
Send to printer
  ↓
Mail via USPS EDDM
  ↓
Move to "Mailer Sent" stage
  ↓
Send thank you + photo
```

---

## Data Flow

### n8n → GHL
- Scraped contacts (business name, email, phone, address, category, rating)
- Tags (city, route, zip, category, source)
- Custom fields (routeNumber, zipCode, googleRating, reviewCount)

### GHL → Supabase (via webhook)
- When space is reserved → update ad_spaces table
- When payment received → update status to "paid"
- When ad received → update ad_file_url

### Supabase → Landing Page
- Real-time inventory (cities, routes, spaces)
- "SOLD" stamps on taken spaces
- Progress bars (% sold per route)

---

## Benefits of GHL Integration

✅ **Simpler n8n** — only handles scraping + data sync  
✅ **Better outreach** — GHL has superior email/SMS automation  
✅ **Visual pipeline** — see where every prospect is in the sales process  
✅ **Built-in CRM** — notes, tasks, calendar, all in one place  
✅ **Multi-channel** — email + SMS + phone calls  
✅ **Form builder** — no coding for booking forms  
✅ **Stripe built-in** — payments without custom integration  
✅ **Reporting** — dashboards, open rates, conversion tracking  
✅ **Mobile app** — manage everything from your phone  
✅ **Scalable** — GHL handles thousands of contacts easily  

---

## Cost Breakdown

### Monthly Costs

| Tool | Cost | Purpose |
|------|------|---------|
| GHL Unlimited | $497/mo | CRM, email, SMS, forms, payments, sub-accounts, SaaS mode |
| n8n (self-hosted) | $20/mo | Automation, scraping |
| Supabase | $0 (free tier) | Database, inventory |
| Google Maps API | $0-$50/mo | Lead scraping (free $200 credit) |
| Domain | $1/mo | mailhousemedia.com |
| **Total** | **~$520-$570/mo** | |

### Revenue Potential

| Scenario | Routes/Month | Revenue | Profit |
|----------|--------------|---------|--------|
| Conservative | 2 | $27,200 | $21,500 |
| Moderate | 5 | $68,000 | $54,000 |
| Aggressive | 10 | $136,000 | $108,000 |

**ROI:** Even at conservative levels, you're making 40x your monthly investment.

### Unlimited Plan Advantages

With your GHL Unlimited plan, you get:

✅ **Unlimited contacts** — no limits as you scale across all cities  
✅ **Unlimited users** — hire team members, give them access  
✅ **SaaS mode** — white-label and resell to operators ($497/mo per city)  
✅ **White desktop** — custom branding  
✅ **API access** — full automation capabilities  
✅ **All features** — no restrictions  
✅ **Single account** — unified view of all leads across all cities  

**SaaS Opportunity:** License the platform to operators in other cities for $497/month each. 50 cities = $298K/year passive income.

---

## Files Updated

```
~/Projects/mailhouse-media/
├── README.md                          ← Updated architecture
├── SETUP.md                           ← Supabase + n8n setup
├── GHL-SETUP.md                       ← NEW: GHL setup guide
├── GHL-INTEGRATION.md                 ← NEW: This file
├── supabase/schema.sql                ← Database schema
├── n8n-workflows/
│   ├── batch-city-scraper.json        ← Scrapes Google Maps
│   ├── scraper-to-ghl-sync.json       ← NEW: Pushes to GHL
│   ├── route-space-order-webhook.json ← Handles bookings
│   └── [old workflows can be deleted]
├── landing-page/index.html            ← Update form to use GHL
└── templates/email-sequences.md       ← Email copy (now in GHL)
```

---

## Next Steps

1. **Read GHL-SETUP.md** — follow the step-by-step guide
2. **Set up GHL** — custom fields, tags, pipeline, workflows
3. **Update n8n** — import scraper-to-ghl-sync workflow
4. **Test** — scrape → GHL → booking → payment
5. **Launch** — start selling ad spaces!

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
