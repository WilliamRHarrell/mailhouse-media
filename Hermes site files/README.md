# Mailhouse Media — Automated EDDM Ad Space Platform

## Overview

Mailhouse Media is a fully automated platform for selling advertising space on USPS Every Door Direct Mail (EDDM) postcards. The system handles everything from lead generation to space reservation, with real-time inventory tracking and visual "SOLD" indicators.

**Business Model:**
- Sell ad spaces on 9x12 postcards mailed to every home in targeted postal routes
- 20 spaces per route × $550-$1,000 per space = $11,000-$20,000 revenue per route
- Print + postage cost: ~$2,800 per 5,000 mailers
- **Profit margin: ~75% ($8,200+ per route)**

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│  Landing Page (mailhousemedia.com)                          │
│  - City selector → Route selector → Space grid              │
│  - Real-time inventory from Supabase                        │
│  - Visual "SOLD" stamps on purchased spaces                 │
│  - Booking form → n8n webhook                               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND (n8n)                           │
│                                                              │
│  1. BATCH CITY SCRAPER                                      │
│     - Scrapes all routes for a city                          │
│     - Google Maps API → businesses by zip code               │
│     - Saves to Supabase with route assignment                │
│                                                              │
│  2. ROUTE EMAIL OUTREACH (Daily)                            │
│     - Picks top 5 routes with available spaces               │
│     - Sends personalized emails to 10 prospects per route    │
│     - Route-specific messaging (zip code, route number)      │
│                                                              │
│  3. ROUTE SPACE ORDER WEBHOOK                               │
│     - Receives booking form submissions                      │
│     - Reserves specific space in specific route              │
│     - Generates Stripe payment link                          │
│     - 48-hour hold until payment                             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    DATABASE (Supabase)                       │
│                                                              │
│  cities          → Top US markets (15 seeded)               │
│  routes          → Postal routes per city (zip codes)       │
│  ad_spaces       → 20 spaces per route (inventory)          │
│  prospects       → Scraped businesses (by route)            │
│  outreach_log    → Email tracking                           │
│  payments        → Stripe payment records                   │
│                                                              │
│  Auto-triggers:                                             │
│  - ad_spaces update → route spaces_sold/available           │
│  - routes update → city total_routes/total_spaces           │
│  - space reserved → 48-hour expiry                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## File Structure

```
~/Projects/mailhouse-media/
├── README.md                           ← You are here
├── SETUP.md                            ← Step-by-step deployment guide
├── supabase/
│   └── schema.sql                      ← Database schema + seed data
├── n8n-workflows/
│   ├── batch-city-scraper.json         ← Scrape all routes for a city
│   ├── route-lead-scraper.json         ← Scrape single route
│   ├── route-email-outreach.json       ← Daily automated outreach
│   └── route-space-order-webhook.json  ← Handle booking form
├── landing-page/
│   └── index.html                      ← Interactive inventory UI
└── templates/
    └── email-sequences.md              ← Email copy templates
```

---

## Key Features

### 1. Visual Inventory System
- **City selector**: Shows top US markets with route counts
- **Route selector**: Displays each route with progress bar (% sold)
- **Space grid**: 20 spaces per route with "SOLD" stamps
- **Real-time updates**: Inventory syncs from Supabase

### 2. Route-Based Operations
- Each city has multiple postal routes (zip codes)
- Each route has 20 ad spaces (12 standard, 4 premium, 4 featured)
- Businesses are scraped and assigned to specific routes
- Outreach is route-specific ("Route 1, ZIP 28301")

### 3. Automated Lead Generation
- **Batch scraper**: One API call scrapes all routes for a city
- **Google Maps API**: Finds businesses by zip code
- **Auto-assignment**: Businesses linked to routes in database
- **Deduplication**: Prevents duplicate entries

### 4. Smart Outreach
- **Daily automation**: Picks top 5 routes needing outreach
- **Route-specific emails**: Mentions zip code, route number, spaces left
- **10 prospects per route**: Controlled daily volume
- **3-step sequence**: Intro → Social proof → Urgency

### 5. Real-Time Booking
- **Space selection**: Click specific space in grid
- **Instant reservation**: 48-hour hold
- **Payment link**: Stripe integration
- **Auto-update**: Space shows "SOLD" immediately

---

## Database Schema

### cities
```sql
- id, name, state, state_code
- market_rank (1 = largest)
- total_routes, total_spaces
- status: planning, active, sold_out, paused
```

### routes
```sql
- id, city_id, route_number, zip_code
- homes_covered, total_spaces (20)
- spaces_sold, spaces_available
- ad_price_standard/premium/featured
- status: available, filling, sold_out, mailed
- priority (higher = shown first)
```

### ad_spaces
```sql
- id, route_id, city_id
- slot_number (1-20)
- space_type: standard, premium, featured
- price: $550 / $750 / $1,000
- status: available, reserved, confirmed, paid, sold
- business_name, contact info
- reserved_until (48-hour hold)
- sold_at
```

### prospects
```sql
- id, city_id, route_id
- business_name, contact info
- address, zip, category
- google_rating, review_count
- status: new, contacted, replied, interested, sold
- outreach_count, last_outreach_at
```

---

## Automation Flow

### Phase 1: Setup (One-Time)
1. Deploy Supabase schema (creates cities, routes, spaces)
2. Import n8n workflows
3. Configure API keys (Google Maps, Stripe, SMTP)
4. Deploy landing page

### Phase 2: Lead Generation (Per City)
```bash
# Scrape all routes for Fayetteville
curl -X POST https://YOUR_N8N/webhook/batch-city-scraper \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Fayetteville",
    "state": "NC",
    "categories": "tattoo shop,barbershop,gym,restaurant,bar"
  }'
```

**Result**: 200-400 businesses scraped and assigned to 8 routes

### Phase 3: Automated Outreach (Daily)
- n8n runs daily at scheduled time
- Picks top 5 routes with available spaces
- Sends 10 emails per route (50 total/day)
- Emails are route-specific
- Logs everything in `outreach_log`

### Phase 4: Booking (Real-Time)
1. Prospect visits landing page
2. Selects city → route → space
3. Fills out booking form
4. Webhook reserves space (48-hour hold)
5. Stripe payment link sent via email
6. Space shows "SOLD" on landing page

### Phase 5: Fulfillment (Manual/Semi-Automated)
- Collect ad creative from paid customers
- Design/layout postcard (Canva or similar)
- Send to printer (High Response Marketing)
- USPS EDDM mailing
- Track delivery

---

## Revenue Model

### Per Route (20 spaces)
| Package | Spaces | Price | Revenue |
|---------|--------|-------|---------|
| Standard | 12 | $550 | $6,600 |
| Premium | 4 | $750 | $3,000 |
| Featured | 4 | $1,000 | $4,000 |
| **Total** | **20** | | **$13,600** |

### Costs Per Route (5,000 mailers)
| Item | Cost |
|------|------|
| Print (9x12, 5,000) | $967 |
| Postage ($0.32 × 5,000) | $1,600 |
| Design/misc | $200 |
| **Total** | **$2,767** |

### Profit Per Route
- Revenue: $13,600
- Cost: $2,767
- **Profit: $10,833 (80% margin)**

### Monthly Projections
| Scenario | Routes/Month | Revenue | Profit |
|----------|--------------|---------|--------|
| Conservative | 2 | $27,200 | $21,666 |
| Moderate | 5 | $68,000 | $54,165 |
| Aggressive | 10 | $136,000 | $108,330 |

---

## Setup Checklist

### 1. Supabase (15 min)
- [ ] Create new Supabase project
- [ ] Run `supabase/schema.sql` in SQL editor
- [ ] Copy Project URL + Service Role Key
- [ ] Verify cities, routes, ad_spaces seeded

### 2. n8n (30 min)
- [ ] Import all 4 workflows
- [ ] Add Supabase credentials to each workflow
- [ ] Add SMTP credentials (Resend/SendGrid)
- [ ] Set environment variables:
  - `GOOGLE_MAPS_API_KEY`
  - `STRIPE_SECRET_KEY`
- [ ] Activate workflows

### 3. Landing Page (10 min)
- [ ] Update `index.html` with:
  - Supabase URL + Anon Key
  - n8n webhook URL
- [ ] Deploy to Vercel/Netlify/Cloudflare
- [ ] Point domain: mailhousemedia.com

### 4. Stripe (10 min)
- [ ] Create products: Standard ($550), Premium ($750), Featured ($1,000)
- [ ] Generate payment links
- [ ] Update n8n webhook with Stripe links
- [ ] (Optional) Set up Stripe webhook for auto-confirmation

### 5. Google Maps API (5 min)
- [ ] Enable Places API in Google Cloud Console
- [ ] Create API key (restrict to n8n server IP)
- [ ] Enable billing ($200/month free credit)
- [ ] Add to n8n environment variables

### 6. First Run
- [ ] Run batch scraper for Fayetteville
- [ ] Verify prospects in Supabase
- [ ] Check landing page shows routes/spaces
- [ ] Test booking flow (reserve a space)
- [ ] Activate daily outreach workflow

---

## Scaling Strategy

### Phase 1: Proof of Concept (Month 1)
- **Market**: Fayetteville, NC (8 routes)
- **Goal**: Sell out 2-3 routes
- **Revenue**: $20K-$30K
- **Focus**: Validate model, refine outreach

### Phase 2: Regional Expansion (Month 2-3)
- **Markets**: Add Jacksonville, Raleigh, Charlotte (30 routes total)
- **Goal**: Sell out 10 routes
- **Revenue**: $100K+
- **Focus**: Scale outreach, hire design help

### Phase 3: National Rollout (Month 4-6)
- **Markets**: 15 cities, 150+ routes
- **Goal**: 50% fill rate
- **Revenue**: $500K+
- **Focus**: Automation, team building

### Phase 4: Franchise/ Licensing (Month 7+)
- **Model**: License platform to local operators
- **Revenue**: Licensing fees + revenue share
- **Scale**: 100+ cities

---

## What's Automated vs Manual

### Fully Automated
- ✅ Lead scraping (Google Maps → Supabase)
- ✅ Route assignment
- ✅ Email outreach (3-step sequence)
- ✅ Space reservation (webhook → database)
- ✅ Inventory tracking (real-time)
- ✅ "SOLD" stamp display
- ✅ Payment link generation

### Semi-Automated (Needs Human)
- ⚠️ Payment confirmation (Stripe webhook setup)
- ⚠️ Ad creative collection (email/file upload)
- ⚠️ Design/layout (Canva or hire designer)
- ⚠️ Printer order submission (API or manual)
- ⚠️ USPS mailing (printer handles)

### Manual (For Now)
- ❌ Customer support (email replies)
- ❌ Ad design revisions
- ❌ Quality check before print
- ❌ Post-delivery follow-up

---

## Tech Stack

| Component | Tool | Why |
|-----------|------|-----|
| Database | Supabase | PostgreSQL, real-time, free tier |
| Automation | n8n | Self-hosted, visual workflows |
| Landing Page | HTML/JS | Simple, fast, no framework |
| Lead Scraping | Google Maps API | Accurate, zip code filtering |
| Email | Resend/SendGrid | Reliable, good deliverability |
| Payments | Stripe | Industry standard, payment links |
| Hosting | Vercel/Netlify | Free, fast, easy deploy |
| Design | Canva | Easy template system |
| Printer | High Response Marketing | Bulk EDDM pricing |

---

## Support & Next Steps

### Immediate Actions
1. Deploy Supabase schema
2. Import n8n workflows
3. Deploy landing page
4. Run first batch scrape (Fayetteville)
5. Test booking flow

### Future Enhancements
- [ ] Stripe webhook for auto-payment confirmation
- [ ] Ad creative upload form (file attachment)
- [ ] Automated PDF assembly (combine ads into print layout)
- [ ] Printer API integration (auto-submit order)
- [ ] Dashboard for monitoring (revenue, fill rate, outreach)
- [ ] SMS outreach (Twilio integration)
- [ ] Facebook Messenger automation
- [ ] Multi-language support
- [ ] Franchise operator portal

---

## Contact

**Mailhouse Media**  
Local Business Marketing  
Fayetteville, NC  
hello@mailhousemedia.com  
mailhousemedia.com

---

## License

Proprietary — Mailhouse Media  
Built for Ryan Harrell  
June 2026
