-- Mailhouse Media Ad Space Business - Supabase Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- CITIES: Top US markets
-- ============================================
CREATE TABLE cities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    state TEXT NOT NULL,
    state_code CHAR(2) NOT NULL,
    market_rank INTEGER,  -- 1 = largest market
    total_routes INTEGER DEFAULT 0,
    total_spaces INTEGER DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'planning',  -- planning, active, sold_out, paused
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(name, state_code)
);

-- ============================================
-- ROUTES: USPS postal routes within each city
-- ============================================
CREATE TABLE routes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
    route_number INTEGER NOT NULL,
    zip_code TEXT NOT NULL,
    route_type TEXT DEFAULT 'carrier',  -- carrier, rural, po_box
    homes_covered INTEGER NOT NULL DEFAULT 0,
    businesses_covered INTEGER DEFAULT 0,
    total_spaces INTEGER NOT NULL DEFAULT 20,
    spaces_sold INTEGER NOT NULL DEFAULT 0,
    spaces_available INTEGER NOT NULL DEFAULT 20,
    ad_price_standard DECIMAL(10,2) NOT NULL DEFAULT 550.00,
    ad_price_premium DECIMAL(10,2) NOT NULL DEFAULT 750.00,
    ad_price_featured DECIMAL(10,2) NOT NULL DEFAULT 1000.00,
    mail_date DATE,
    status TEXT NOT NULL DEFAULT 'available',  -- available, filling, sold_out, mailed
    priority INTEGER DEFAULT 0,  -- higher = shown first
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(city_id, route_number)
);

-- ============================================
-- AD SPACES: Individual slots on each route's mailer
-- ============================================
CREATE TABLE ad_spaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    route_id UUID NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
    city_id UUID NOT NULL REFERENCES cities(id) ON DELETE CASCADE,
    slot_number INTEGER NOT NULL,
    space_type TEXT NOT NULL DEFAULT 'standard',  -- standard, premium, featured
    price DECIMAL(10,2) NOT NULL DEFAULT 550.00,
    status TEXT NOT NULL DEFAULT 'available',  -- available, reserved, confirmed, paid, ad_received, in_design, complete, sold
    prospect_id UUID,
    business_name TEXT,
    contact_name TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    ad_headline TEXT,
    ad_description TEXT,
    ad_file_url TEXT,
    stripe_payment_id TEXT,
    reserved_until TIMESTAMPTZ,
    confirmed_at TIMESTAMPTZ,
    sold_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(route_id, slot_number)
);

-- ============================================
-- PROSPECTS: Local businesses scraped from Google Maps
-- ============================================
CREATE TABLE prospects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    city_id UUID REFERENCES cities(id),
    route_id UUID REFERENCES routes(id),  -- assigned to specific route
    business_name TEXT NOT NULL,
    contact_name TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    category TEXT,  -- restaurant, gym, barbershop, bar, etc.
    google_rating DECIMAL(2,1),
    review_count INTEGER,
    website TEXT,
    google_place_id TEXT,
    lat DECIMAL(10, 7),
    lng DECIMAL(10, 7),
    source TEXT DEFAULT 'google_maps',
    status TEXT NOT NULL DEFAULT 'new',  -- new, contacted, replied, interested, not_interested, sold, do_not_contact
    outreach_count INTEGER DEFAULT 0,
    last_outreach_at TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- OUTREACH LOG: Track every email/message sent
-- ============================================
CREATE TABLE outreach_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    prospect_id UUID NOT NULL REFERENCES prospects(id) ON DELETE CASCADE,
    route_id UUID REFERENCES routes(id),
    channel TEXT NOT NULL DEFAULT 'email',  -- email, messenger, sms
    sequence_step INTEGER NOT NULL DEFAULT 1,
    subject TEXT,
    body TEXT,
    status TEXT NOT NULL DEFAULT 'sent',  -- sent, delivered, opened, clicked, replied, bounced
    sent_at TIMESTAMPTZ DEFAULT NOW(),
    opened_at TIMESTAMPTZ,
    clicked_at TIMESTAMPTZ,
    replied_at TIMESTAMPTZ,
    metadata JSONB
);

-- ============================================
-- PAYMENTS: Track ad space payments
-- ============================================
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ad_space_id UUID NOT NULL REFERENCES ad_spaces(id),
    prospect_id UUID REFERENCES prospects(id),
    amount DECIMAL(10,2) NOT NULL,
    stripe_session_id TEXT,
    stripe_payment_id TEXT,
    status TEXT NOT NULL DEFAULT 'pending',  -- pending, completed, refunded, failed
    paid_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES for performance
-- ============================================
CREATE INDEX idx_cities_status ON cities(status);
CREATE INDEX idx_routes_city ON routes(city_id);
CREATE INDEX idx_routes_status ON routes(status);
CREATE INDEX idx_routes_zip ON routes(zip_code);
CREATE INDEX idx_ad_spaces_route ON ad_spaces(route_id);
CREATE INDEX idx_ad_spaces_city ON ad_spaces(city_id);
CREATE INDEX idx_ad_spaces_status ON ad_spaces(status);
CREATE INDEX idx_prospects_city ON prospects(city_id);
CREATE INDEX idx_prospects_route ON prospects(route_id);
CREATE INDEX idx_prospects_status ON prospects(status);
CREATE INDEX idx_prospects_zip ON prospects(zip);
CREATE INDEX idx_outreach_prospect ON outreach_log(prospect_id);
CREATE INDEX idx_outreach_status ON outreach_log(status);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ad_spaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE prospects ENABLE ROW LEVEL SECURITY;
ALTER TABLE outreach_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Public read access for cities, routes, ad_spaces (landing page needs this)
CREATE POLICY "Public read cities" ON cities FOR SELECT USING (true);
CREATE POLICY "Public read routes" ON routes FOR SELECT USING (true);
CREATE POLICY "Public read ad_spaces" ON ad_spaces FOR SELECT USING (true);

-- Service role full access (n8n uses service role key)
CREATE POLICY "Service role full access cities" ON cities FOR ALL USING (true);
CREATE POLICY "Service role full access routes" ON routes FOR ALL USING (true);
CREATE POLICY "Service role full access ad_spaces" ON ad_spaces FOR ALL USING (true);
CREATE POLICY "Service role full access prospects" ON prospects FOR ALL USING (true);
CREATE POLICY "Service role full access outreach_log" ON outreach_log FOR ALL USING (true);
CREATE POLICY "Service role full access payments" ON payments FOR ALL USING (true);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Auto-update route spaces_sold/spaces_available when ad_spaces change
CREATE OR REPLACE FUNCTION update_route_spaces()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE routes
    SET 
        spaces_sold = (
            SELECT COUNT(*) FROM ad_spaces 
            WHERE route_id = NEW.route_id 
            AND status IN ('confirmed', 'paid', 'ad_received', 'in_design', 'complete', 'sold')
        ),
        spaces_available = total_spaces - (
            SELECT COUNT(*) FROM ad_spaces 
            WHERE route_id = NEW.route_id 
            AND status IN ('confirmed', 'paid', 'ad_received', 'in_design', 'complete', 'sold')
        ),
        status = CASE 
            WHEN (SELECT COUNT(*) FROM ad_spaces WHERE route_id = NEW.route_id AND status IN ('confirmed', 'paid', 'ad_received', 'in_design', 'complete', 'sold')) >= total_spaces 
            THEN 'sold_out'
            WHEN (SELECT COUNT(*) FROM ad_spaces WHERE route_id = NEW.route_id AND status IN ('confirmed', 'paid', 'ad_received', 'in_design', 'complete', 'sold')) > 0 
            THEN 'filling'
            ELSE 'available'
        END,
        updated_at = NOW()
    WHERE id = NEW.route_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_route_spaces
AFTER INSERT OR UPDATE ON ad_spaces
FOR EACH ROW EXECUTE FUNCTION update_route_spaces();

-- Auto-update city totals when routes change
CREATE OR REPLACE FUNCTION update_city_totals()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE cities
    SET 
        total_routes = (SELECT COUNT(*) FROM routes WHERE city_id = NEW.city_id),
        total_spaces = (SELECT COALESCE(SUM(total_spaces), 0) FROM routes WHERE city_id = NEW.city_id),
        updated_at = NOW()
    WHERE id = NEW.city_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_city_totals
AFTER INSERT OR UPDATE ON routes
FOR EACH ROW EXECUTE FUNCTION update_city_totals();

-- Auto-set reserved_until when space is reserved
CREATE OR REPLACE FUNCTION set_reservation_expiry()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.status = 'reserved' AND NEW.reserved_until IS NULL THEN
        NEW.reserved_until = NOW() + INTERVAL '48 hours';
    END IF;
    IF NEW.status IN ('confirmed', 'paid', 'sold') AND NEW.sold_at IS NULL THEN
        NEW.sold_at = NOW();
    END IF;
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_reservation
BEFORE INSERT OR UPDATE ON ad_spaces
FOR EACH ROW EXECUTE FUNCTION set_reservation_expiry();

-- ============================================
-- SEED DATA: Top US Cities
-- ============================================
INSERT INTO cities (name, state, state_code, market_rank, status) VALUES
    ('Fayetteville', 'North Carolina', 'NC', 50, 'active'),
    ('Jacksonville', 'North Carolina', 'NC', 100, 'planning'),
    ('Raleigh', 'North Carolina', 'NC', 30, 'planning'),
    ('Charlotte', 'North Carolina', 'NC', 20, 'planning'),
    ('Tampa', 'Florida', 'FL', 15, 'planning'),
    ('Orlando', 'Florida', 'FL', 25, 'planning'),
    ('San Antonio', 'Texas', 'TX', 10, 'planning'),
    ('Austin', 'Texas', 'TX', 22, 'planning'),
    ('Columbus', 'Ohio', 'OH', 35, 'planning'),
    ('Indianapolis', 'Indiana', 'IN', 33, 'planning'),
    ('Nashville', 'Tennessee', 'TN', 38, 'planning'),
    ('Kansas City', 'Missouri', 'MO', 40, 'planning'),
    ('Cincinnati', 'Ohio', 'OH', 42, 'planning'),
    ('Pittsburgh', 'Pennsylvania', 'PA', 45, 'planning'),
    ('Sacramento', 'California', 'CA', 28, 'planning');

-- ============================================
-- SEED DATA: Fayetteville Routes (8 routes)
-- ============================================
INSERT INTO routes (city_id, route_number, zip_code, homes_covered, total_spaces, priority)
SELECT 
    (SELECT id FROM cities WHERE name = 'Fayetteville' AND state_code = 'NC'),
    generate_series(1, 8),
    unnest(ARRAY['28301', '28303', '28304', '28305', '28306', '28311', '28312', '28314']),
    unnest(ARRAY[2800, 3200, 2600, 2900, 2700, 3100, 2500, 2400]),
    20,
    unnest(ARRAY[8, 7, 6, 5, 4, 3, 2, 1]);

-- ============================================
-- SEED DATA: Ad Spaces for Fayetteville Routes
-- ============================================
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
WHERE r.city_id = (SELECT id FROM cities WHERE name = 'Fayetteville' AND state_code = 'NC');

-- ============================================
-- VIEW: Dashboard for monitoring
-- ============================================
CREATE OR REPLACE VIEW dashboard_overview AS
SELECT 
    c.name as city,
    c.state_code,
    c.status as city_status,
    COUNT(DISTINCT r.id) as total_routes,
    SUM(r.total_spaces) as total_spaces,
    SUM(r.spaces_sold) as spaces_sold,
    SUM(r.spaces_available) as spaces_available,
    ROUND(SUM(r.spaces_sold)::numeric / NULLIF(SUM(r.total_spaces), 0) * 100, 1) as fill_rate_pct,
    SUM(CASE WHEN a.status IN ('paid', 'sold') THEN a.price ELSE 0 END) as total_revenue
FROM cities c
LEFT JOIN routes r ON r.city_id = c.id
LEFT JOIN ad_spaces a ON a.route_id = r.id
GROUP BY c.id, c.name, c.state_code, c.status
ORDER BY c.market_rank;
