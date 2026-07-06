import { NextRequest, NextResponse } from 'next/server'
import { createBrowserClient } from '@/lib/supabase'

/**
 * GET /api/routes
 *
 * Public endpoint for calculator / check-coverage to fetch available routes.
 * Query params:
 *   - state: 'NC'
 *   - zip: '28301'
 *   - city: 'Fayetteville'
 *   - q: full-text search (city or county name)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get('state')
  const zip = searchParams.get('zip')
  const city = searchParams.get('city')
  const textQuery = searchParams.get('q')

  const supabase = createBrowserClient()

  let query = supabase
    .from('routes')
    .select('id, state, zip_code, route_number, route_type, city_name, county_name, total_homes, available_homes, status')
    .eq('status', 'available')
    .order('state', { ascending: true })
    .order('zip_code', { ascending: true })
    .order('route_number', { ascending: true })

  if (state) {
    query = query.eq('state', state.toUpperCase())
  }
  if (zip) {
    query = query.eq('zip_code', zip)
  }
  if (city) {
    query = query.ilike('city_name', `%${city}%`)
  }
  if (textQuery) {
    // Full-text search
    query = query.or(`city_name.ilike.%${textQuery}%,county_name.ilike.%${textQuery}%,zip_code.ilike.%${textQuery}%`)
  }

  const { data, error } = await query.limit(500)

  if (error) {
    console.error('Routes query error:', error)
    return NextResponse.json({ error: 'Failed to fetch routes' }, { status: 500 })
  }

  return NextResponse.json({ routes: data, count: data.length })
}
