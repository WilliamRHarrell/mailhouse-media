-- ============================================================================
-- Mailhouse Media — Database Schema
-- Order flow: customers → orders → payments → fulfillment → deliveries
-- ============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- CUSTOMERS — anyone who orders from us
-- ============================================================================
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  business_address TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  -- Tax / accounting
  stripe_customer_id TEXT UNIQUE,
  -- Metadata
  notes TEXT,
  source TEXT, -- 'website', 'referral', 'outreach', 'ai_targeting'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_stripe ON customers(stripe_customer_id);

-- ============================================================================
-- USPS CARRIER ROUTES — pre-loaded for calculator/check-coverage
-- Format: route_number is USPS form e.g. 'R-28301-C001' (R=Rural, C=City)
-- ============================================================================
CREATE TABLE IF NOT EXISTS routes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  route_number TEXT NOT NULL,        -- USPS carrier route code
  route_type TEXT,                   -- 'city' (C), 'rural' (R), 'highway' (H), 'PO box' (B)
  city_name TEXT,
  county_name TEXT,
  -- Inventory
  total_homes INTEGER NOT NULL DEFAULT 0,
  available_homes INTEGER NOT NULL DEFAULT 0, -- capacity - active order volume
  -- Status
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'paused', 'saturated')),
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(state, zip_code, route_number)
);

CREATE INDEX idx_routes_state_zip ON routes(state, zip_code);
CREATE INDEX idx_routes_status ON routes(status);
-- Full-text search on city/county for quick customer-facing search
CREATE INDEX idx_routes_city_gin ON routes USING GIN(to_tsvector('english', coalesce(city_name,'') || ' ' || coalesce(county_name,'')));

-- ============================================================================
-- ORDERS — a single purchase by a customer (1 order = 1 checkout)
-- Can contain multiple line items (e.g. EDDM route + AI targeting)
-- ============================================================================
CREATE TYPE order_status AS ENUM (
  'draft',              -- calculator created it but hasn't paid
  'pending_payment',    -- Stripe session created, awaiting payment
  'paid',               -- Stripe webhook confirmed payment
  'designing',          -- our design team working on postcard
  'design_approved',    -- customer approved final design
  'printing',           -- with printer
  'bundling',           -- with lettershop
  'in_transit',         -- USPS inducted
  'delivered',          -- landed in mailboxes
  'cancelled',
  'refunded'
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE RESTRICT,
  -- Order type
  order_type TEXT NOT NULL CHECK (order_type IN (
    'eddm_standard',      -- standard EDDM 9x12
    'eddm_targeted',      -- targeted demographic EDDM 9x12
    'eddm_ai_targeted',   -- AI-event-driven EDDM 9x12
    'targeted_list_only', -- data only, no mail (rare)
    'print_broker'        -- we just markup a 4over order
  )),
  -- Status
  status order_status DEFAULT 'draft'::order_status,
  -- Financials
  subtotal_cents INTEGER NOT NULL,     -- sum of line items in cents
  stripe_fee_cents INTEGER DEFAULT 0,
  total_cents INTEGER NOT NULL,        -- what customer paid
  our_cost_cents INTEGER,              -- estimate, filled in after order
  gross_profit_cents INTEGER,
  margin_pct NUMERIC(5,2),
  -- Stripe
  stripe_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  invoice_url TEXT,
  -- Timing
  mail_date DATE,                      -- when we expect to drop at USPS
  delivery_date DATE,                  -- when USPS estimates delivery
  -- Options
  include_design BOOLEAN DEFAULT true,
  first_order BOOLEAN DEFAULT true,
  design_fee_cents INTEGER DEFAULT 0,
  -- Event targeting (for AI-targeted orders)
  ai_event_type TEXT,                  -- 'hail', 'flood', 'new_movers', etc
  ai_event_zip_codes TEXT[],
  ai_filters JSONB,                    -- { "min_home_value": 400000, "min_home_age_years": 15, ... }
  -- Notes
  customer_notes TEXT,
  internal_notes TEXT,
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  paid_at TIMESTAMPTZ,
  mailed_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ
);

CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created ON orders(created_at DESC);
CREATE INDEX idx_orders_stripe_session ON orders(stripe_session_id);

-- ============================================================================
-- ORDER ROUTES — which carrier routes are on this order (many-to-many)
-- One order can cover multiple routes; one route can appear across orders.
-- ============================================================================
CREATE TABLE IF NOT EXISTS order_routes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  route_id UUID NOT NULL REFERENCES routes(id) ON DELETE RESTRICT,
  homes_count INTEGER NOT NULL,
  price_per_home_cents INTEGER NOT NULL,
  subtotal_cents INTEGER NOT NULL,
  UNIQUE(order_id, route_id)
);

CREATE INDEX idx_order_routes_order ON order_routes(order_id);
CREATE INDEX idx_order_routes_route ON order_routes(route_id);

-- ============================================================================
-- ORDER LINE ITEMS — for services, fees, add-ons
-- Examples: "AI targeting fee $99", "Custom design $150", "Rush delivery"
-- ============================================================================
CREATE TABLE IF NOT EXISTS order_line_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  -- Line item
  label TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  unit_price_cents INTEGER NOT NULL,
  total_cents INTEGER NOT NULL,
  -- Optional reference
  route_id UUID REFERENCES routes(id),
  -- Category for reporting
  category TEXT CHECK (category IN ('route', 'design', 'data', 'event', 'rush', 'other')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_line_items_order ON order_line_items(order_id);

-- ============================================================================
-- PAYMENTS — one row per Stripe event, audit trail
-- ============================================================================
CREATE TYPE payment_event_type AS ENUM (
  'checkout_session_created',
  'payment_intent_succeeded',
  'payment_intent_failed',
  'refund_created',
  'refund_succeeded',
  'dispute_created',
  'dispute_won'
);

CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  event_type payment_event_type NOT NULL,
  stripe_event_id TEXT UNIQUE,
  amount_cents INTEGER,
  currency TEXT DEFAULT 'usd',
  metadata JSONB,                    -- full Stripe event payload (sanitized)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_payments_order ON payments(order_id);
CREATE INDEX idx_payments_stripe_event ON payments(stripe_event_id);

-- ============================================================================
-- DESIGN ASSETS — stored postcard designs, file URLs, approval state
-- ============================================================================
CREATE TABLE IF NOT EXISTS design_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  version INTEGER NOT NULL DEFAULT 1,
  file_url TEXT,                       -- Cloudflare R2 URL
  thumbnail_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'approved', 'rejected', 'printing')),
  customer_comment TEXT,
  designer_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  approved_at TIMESTAMPTZ
);

CREATE INDEX idx_design_assets_order ON design_assets(order_id);

-- ============================================================================
-- DELIVERIES — one row per USPS drop (could be many per order if mailings are split)
-- ============================================================================
CREATE TABLE IF NOT EXISTS deliveries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  route_id UUID REFERENCES routes(id),
  carrier TEXT DEFAULT 'usps',
  tracking_number TEXT,
  piece_count INTEGER,
  -- Milestones
  print_completed_at TIMESTAMPTZ,
  bundled_at TIMESTAMPTZ,
  inducted_at TIMESTAMPTZ,           -- USPS BMEU drop timestamp
  estimated_delivery DATE,
  actual_delivery DATE,
  -- Lettershop / printer
  printer TEXT,                        -- 'GotPrint', '4over'
  lettershop TEXT,                     -- 'CRST', 'MailPro'
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'inducted', 'in_transit', 'delivered', 'failed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_deliveries_order ON deliveries(order_id);
CREATE INDEX idx_deliveries_tracking ON deliveries(tracking_number);

-- ============================================================================
-- AUDIT LOG — full history of any order state changes
-- ============================================================================
CREATE TABLE IF NOT EXISTS order_audit_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  actor TEXT,                          -- 'system', 'ryan', 'customer', 'stripe', 'ghl'
  action TEXT NOT NULL,                -- 'status_changed', 'note_added', 'design_uploaded', etc
  from_value TEXT,
  to_value TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_order ON order_audit_log(order_id);
CREATE INDEX idx_audit_created ON order_audit_log(created_at DESC);

-- ============================================================================
-- UPDATED_AT TRIGGER — auto-update on any row edit
-- ============================================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER tr_routes_updated_at BEFORE UPDATE ON routes FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER tr_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- ROW LEVEL SECURITY — anonymous service role for now, tighten later
-- Note: the Next.js API uses the service role key which bypasses RLS,
-- but we enable it anyway as a defensive habit.
-- ============================================================================
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_line_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE design_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_audit_log ENABLE ROW LEVEL SECURITY;

-- Public read on routes (for calculator)
CREATE POLICY routes_read_public ON routes FOR SELECT USING (true);
-- Everything else restricted to service role for now
CREATE POLICY customers_service_only ON customers FOR ALL USING (false);
CREATE POLICY orders_service_only ON orders FOR ALL USING (false);
CREATE POLICY order_routes_service_only ON order_routes FOR ALL USING (false);
CREATE POLICY order_line_items_service_only ON order_line_items FOR ALL USING (false);
CREATE POLICY payments_service_only ON payments FOR ALL USING (false);
CREATE POLICY design_assets_service_only ON design_assets FOR ALL USING (false);
CREATE POLICY deliveries_service_only ON deliveries FOR ALL USING (false);
CREATE POLICY order_audit_service_only ON order_audit_log FOR ALL USING (false);

-- ============================================================================
-- SEED DATA — sample routes for Fayetteville, NC
-- Replace with real USPS EDDM route data when ready
-- ============================================================================
INSERT INTO routes (state, zip_code, route_number, route_type, city_name, county_name, total_homes, available_homes) VALUES
  ('NC', '28301', 'C001', 'city', 'Fayetteville', 'Cumberland', 640, 640),
  ('NC', '28301', 'C002', 'city', 'Fayetteville', 'Cumberland', 580, 580),
  ('NC', '28301', 'C003', 'city', 'Fayetteville', 'Cumberland', 720, 720),
  ('NC', '28303', 'C001', 'city', 'Fayetteville', 'Cumberland', 690, 690),
  ('NC', '28303', 'C002', 'city', 'Fayetteville', 'Cumberland', 540, 540),
  ('NC', '28304', 'C001', 'city', 'Fayetteville', 'Cumberland', 810, 810),
  ('NC', '28304', 'C002', 'city', 'Fayetteville', 'Cumberland', 740, 740),
  ('NC', '28306', 'R001', 'rural', 'Fayetteville', 'Cumberland', 420, 420),
  ('NC', '28311', 'C001', 'city', 'Hope Mills', 'Cumberland', 590, 590),
  ('NC', '28311', 'C002', 'city', 'Hope Mills', 'Cumberland', 670, 670),
  ('NC', '28312', 'R001', 'rural', 'Eastover', 'Cumberland', 310, 310),
  ('NC', '28314', 'C001', 'city', 'Fayetteville', 'Cumberland', 820, 820)
ON CONFLICT (state, zip_code, route_number) DO UPDATE SET
  total_homes = EXCLUDED.total_homes,
  available_homes = EXCLUDED.available_homes,
  updated_at = NOW();

-- ============================================================================
-- VIEWS — common queries
-- ============================================================================

-- Active orders by customer (for "my orders" page eventually)
CREATE OR REPLACE VIEW v_customer_orders AS
SELECT
  c.id AS customer_id,
  c.email,
  c.name AS customer_name,
  o.id AS order_id,
  o.order_type,
  o.status,
  o.total_cents / 100.0 AS total,
  o.created_at,
  o.mail_date,
  o.delivery_date,
  COALESCE(array_length(ARRAY_AGG(DISTINCT r.route_number) FILTER (WHERE r.route_number IS NOT NULL), 1), 0) AS route_count,
  COALESCE(SUM(oi.homes_count), 0) AS total_homes
FROM customers c
JOIN orders o ON o.customer_id = c.id
LEFT JOIN order_routes oi ON oi.order_id = o.id
LEFT JOIN routes r ON r.id = oi.route_id
GROUP BY c.id, c.email, c.name, o.id, o.order_type, o.status, o.total_cents, o.created_at, o.mail_date, o.delivery_date;

-- Dashboard metrics (for internal admin)
CREATE OR REPLACE VIEW v_order_metrics AS
SELECT
  DATE_TRUNC('month', created_at) AS month,
  COUNT(*) AS order_count,
  SUM(total_cents) / 100.0 AS gross_revenue,
  SUM(gross_profit_cents) / 100.0 AS gross_profit,
  AVG(margin_pct) AS avg_margin_pct,
  COUNT(*) FILTER (WHERE status IN ('delivered','in_transit')) AS completed_count
FROM orders
WHERE status != 'draft'::order_status
GROUP BY 1
ORDER BY 1 DESC;
