# Mailhouse Media — Setup Guide

## Quick Start (1 Hour Total)

### 1. Supabase (15 min)

1. Go to [supabase.com](https://supabase.com) and create a new project (or use existing)
2. Open **SQL Editor** (left sidebar)
3. Copy entire contents of `supabase/schema.sql`
4. Paste and click **Run**
5. Verify tables created:
   - `cities` → should have 15 cities
   - `routes` → should have 8 routes for Fayetteville
   - `ad_spaces` → should have 160 spaces (8 routes × 20 spaces)
6. Go to **Settings → API** and copy:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **Service Role Key** (keep this secret!)
   - **Anon Key** (for landing page)

### 2. n8n (30 min)

1. Log into your n8n instance (DigitalOcean or self-hosted)

2. **Add Supabase credentials:**
   - Settings → Credentials → Add → Supabase API
   - Host: Your Supabase URL (without https://)
   - Service Key: Your Service Role Key
   - Save

3. **Import workflows:**
   - Workflows → Import from File
   - Import these 4 files:
     - `n8n-workflows/batch-city-scraper.json`
     - `n8n-workflows/route-email-outreach.json`
     - `n8n-workflows/route-space-order-webhook.json`
     - `n8n-workflows/route-lead-scraper.json` (optional, for single routes)

4. **Configure each workflow:**
   - Open each workflow
   - Click each Supabase node → select your credential
   - Click email node → configure SMTP (see step 5)
   - Save

5. **Add SMTP credentials:**
   - Settings → Credentials → Add → SMTP
   - Recommended: [Resend](https://resend.com) (free tier: 3,000 emails/month)
   - Host: `smtp.resend.com`
   - Port: `587`
   - TLS: Yes
   - User: `resend`
   - Password: Your Resend API key
   - From: `hello@mailhousemedia.com`

6. **Set environment variables:**
   - Settings → Environment Variables
   - Add:
     - `GOOGLE_MAPS_API_KEY` = Your Google Maps API key
     - `STRIPE_SECRET_KEY` = Your Stripe secret key (for payment links)

7. **Activate workflows:**
   - Toggle each workflow to **Active**

### 3. Google Maps API (5 min)

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Enable **Places API**:
   - APIs & Services → Library → Search "Places API" → Enable
4. Create API key:
   - APIs & Services → Credentials → Create Credentials → API Key
   - Restrict key to your n8n server IP (optional but recommended)
5. Enable billing:
   - Billing → Link billing account
   - Free $200/month credit covers ~4,000 searches
6. Copy API key and add to n8n environment variables

### 4. Landing Page (10 min)

1. Open `landing-page/index.html` in a text editor

2. Find this section (around line 450):
   ```javascript
   const SUPABASE_URL = 'YOUR_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
   const N8N_WEBHOOK_URL = 'YOUR_N8N_WEBHOOK_URL';
   ```

3. Replace with your actual values:
   ```javascript
   const SUPABASE_URL = 'https://xxxxx.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGc...'; // Your anon key
   const N8N_WEBHOOK_URL = 'https://your-n8n.com';
   ```

4. Deploy options:

   **Option A: Vercel (Recommended)**
   ```bash
   cd ~/Projects/mailhouse-media/landing-page
   npm i -g vercel  # If not installed
   vercel
   ```
   Follow prompts, then set domain to `mailhousemedia.com`

   **Option B: Netlify**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `landing-page` folder
   - Set custom domain

   **Option C: Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages
   - Connect repo or drag & drop
   - Set custom domain

5. Update domain DNS to point to your host

### 5. Stripe (10 min)

1. Go to [stripe.com](https://stripe.com) and log in

2. **Create products:**
   - Products → Add Product
   - Create 3 products:
     - "EDDM Ad Space - Standard" → $550
     - "EDDM Ad Space - Premium" → $750
     - "EDDM Ad Space - Featured" → $1,000

3. **Generate payment links:**
   - For each product → Payment Links → Create Link
   - Copy the payment link URLs

4. **Update n8n webhook:**
   - Open `route-space-order-webhook` workflow
   - Find "Create Payment Link" node
   - Replace `YOUR_STRIPE_LINK` with actual Stripe link
   - (Or implement dynamic Stripe checkout session creation)

5. **Optional: Stripe webhook for auto-confirmation:**
   - Developers → Webhooks → Add endpoint
   - URL: `https://your-n8n.com/webhook/stripe-confirmation`
   - Events: `checkout.session.completed`
   - Create n8n workflow to update `ad_spaces` status to `paid`

---

## First Run

### Step 1: Scrape Fayetteville

```bash
curl -X POST https://YOUR_N8N_INSTANCE/webhook/batch-city-scraper \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Fayetteville",
    "state": "NC",
    "categories": "tattoo shop,barbershop,hair salon,gym,restaurant,bar,real estate,insurance,lawyer,dentist"
  }'
```

**Expected result:**
```json
{
  "success": true,
  "city": "Fayetteville",
  "state": "NC",
  "total_prospects": 287,
  "routes_scraped": 8,
  "breakdown": [
    { "route_number": 1, "zip_code": "28301", "count": 42 },
    { "route_number": 2, "zip_code": "28303", "count": 38 },
    ...
  ]
}
```

### Step 2: Verify in Supabase

1. Go to Supabase → Table Editor
2. Check `prospects` table → should have 287 rows
3. Check `routes` table → each route should have prospects assigned
4. Check `ad_spaces` table → all 160 spaces should be `available`

### Step 3: Test Landing Page

1. Visit `https://mailhousemedia.com`
2. Select "Fayetteville, NC"
3. Click a route (e.g., "Route 1")
4. Click an available space
5. Fill out booking form
6. Submit → should reserve space and show success message

### Step 4: Verify Reservation

1. Go to Supabase → `ad_spaces` table
2. Find the space you reserved
3. Status should be `reserved`
4. `reserved_until` should be 48 hours from now

### Step 5: Activate Daily Outreach

1. Go to n8n → `route-email-outreach` workflow
2. Verify it's set to run daily (Schedule trigger)
3. Manually trigger once to test:
   - Click "Execute Workflow"
   - Check Supabase → `outreach_log` → should see new entries
   - Check email inbox → should receive test emails

---

## Monitoring & Maintenance

### Daily Checks
- **Supabase Dashboard:**
  - `ad_spaces` → check fill rate
  - `outreach_log` → check email delivery
  - `prospects` → check new leads

- **n8n Executions:**
  - Check for failed workflows
  - Review error logs

- **Stripe Dashboard:**
  - Check payments
  - Verify successful transactions

### Weekly Tasks
- Review outreach response rates
- Follow up with interested prospects
- Collect ad creative from paid customers
- Update landing page if needed (new cities, etc.)

### Monthly Tasks
- Run batch scraper for new cities
- Analyze revenue vs. costs
- Plan next month's route launches
- Update email templates if needed

---

## Troubleshooting

### Landing page not loading routes
- Check Supabase URL and Anon Key in `index.html`
- Verify CORS settings in Supabase (Settings → API → CORS)
- Check browser console for errors

### n8n workflows failing
- Check Supabase credentials
- Verify Google Maps API key is valid
- Check n8n execution logs for specific errors

### Emails not sending
- Verify SMTP credentials in n8n
- Check Resend/SendGrid dashboard for delivery status
- Verify "From" email is authenticated (SPF/DKIM)

### Spaces not showing as "SOLD"
- Check webhook is receiving form submissions
- Verify Supabase triggers are working
- Check `ad_spaces` table for status updates

### Google Maps API quota exceeded
- Check usage in Google Cloud Console
- Consider upgrading to paid plan
- Optimize queries to reduce API calls

---

## Scaling to New Cities

### Add New City to Database

```sql
-- Add city
INSERT INTO cities (name, state, state_code, market_rank, status)
VALUES ('Tampa', 'Florida', 'FL', 15, 'active');

-- Add routes (example: 10 routes for Tampa)
INSERT INTO routes (city_id, route_number, zip_code, homes_covered, total_spaces, priority)
SELECT 
    (SELECT id FROM cities WHERE name = 'Tampa' AND state_code = 'FL'),
    generate_series(1, 10),
    unnest(ARRAY['33601', '33602', '33603', '33604', '33605', '33606', '33607', '33608', '33609', '33610']),
    unnest(ARRAY[2800, 3100, 2600, 2900, 2700, 3000, 2500, 2400, 2300, 2200]),
    20,
    generate_series(10, 1, -1);

-- Add ad spaces for Tampa routes
INSERT INTO ad_spaces (route_id, city_id, slot_number, space_type, price, status)
SELECT 
    r.id,
    r.city_id,
    slot.slot_num,
    CASE 
        WHEN slot.slot_num <= 12 THEN 'standard'
        WHEN slot.slot_num <= 16 THEN 'premium'
        ELSE 'featured'
    END,
    CASE 
        WHEN slot.slot_num <= 12 THEN 550.00
        WHEN slot.slot_num <= 16 THEN 750.00
        ELSE 1000.00
    END,
    'available'
FROM routes r
CROSS JOIN generate_series(1, 20) AS slot(slot_num)
WHERE r.city_id = (SELECT id FROM cities WHERE name = 'Tampa' AND state_code = 'FL');
```

### Scrape New City

```bash
curl -X POST https://YOUR_N8N_INSTANCE/webhook/batch-city-scraper \
  -H "Content-Type: application/json" \
  -d '{
    "city": "Tampa",
    "state": "FL",
    "categories": "tattoo shop,barbershop,gym,restaurant,bar,real estate"
  }'
```

### Update Landing Page

Landing page automatically shows new cities from database. No code changes needed.

---

## Revenue Tracking

### Supabase Dashboard View

```sql
CREATE VIEW revenue_dashboard AS
SELECT 
    c.name as city,
    c.state_code,
    COUNT(DISTINCT r.id) as total_routes,
    SUM(r.total_spaces) as total_spaces,
    SUM(r.spaces_sold) as spaces_sold,
    ROUND(SUM(r.spaces_sold)::numeric / NULLIF(SUM(r.total_spaces), 0) * 100, 1) as fill_rate_pct,
    SUM(CASE WHEN a.status = 'paid' THEN a.price ELSE 0 END) as total_revenue,
    SUM(CASE WHEN a.status = 'paid' THEN a.price ELSE 0 END) - (SUM(r.spaces_sold) * 2767.0 / 20.0) as estimated_profit
FROM cities c
LEFT JOIN routes r ON r.city_id = c.id
LEFT JOIN ad_spaces a ON a.route_id = r.id
WHERE c.status = 'active'
GROUP BY c.id, c.name, c.state_code
ORDER BY total_revenue DESC;
```

Query this view anytime to see:
- Revenue by city
- Fill rate percentage
- Estimated profit (revenue - costs)

---

## Support

**Email:** hello@mailhousemedia.com  
**Website:** mailhousemedia.com  
**Location:** Fayetteville, NC

---

## Changelog

### v1.0 (June 2026)
- Initial release
- Route-based inventory system
- Automated lead scraping
- Email outreach automation
- Real-time booking
- Visual "SOLD" stamps

---

**Last Updated:** June 27, 2026
