import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()

    // Initialize Supabase client (using anon key is fine if RLS allows INSERT)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase
        .from('spanish_leads')
        .insert([
            {
                name: body.name,
                email: body.email,
                whatsapp: body.whatsapp,
                arrival_date: body.arrival_date,
                english_level: body.english_level,
                priority_topic: body.priority_topic,
                source: 'landing_page'
            }
        ])

    if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
}
