import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Server client — use in API routes and server components.
// Has full access. NEVER expose to the browser.
export function createServerClient() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set')
  }
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// Client client — for browser components that need to read (e.g. check-coverage)
// Uses anon key + RLS. Can only read routes table.
export function createBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set')
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Type helpers — export when we generate types from schema
// `npx supabase gen types typescript --project-id XXX > lib/types.ts`
export type Database = {
  public: {
    Tables: {
      customers: { Row: { id: string; email: string; name: string; company?: string } }
      routes: { Row: { id: string; state: string; zip_code: string; route_number: string; total_homes: number; available_homes: number } }
      orders: { Row: { id: string; status: string; total_cents: number } }
    }
  }
}
