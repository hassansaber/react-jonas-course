
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gwknczlfqdjxxtvhataw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3a25jemxmcWRqeHh0dmhhdGF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczNzczMjMsImV4cCI6MjAzMjk1MzMyM30.pWQ7KvsP0IhsqBTz1l2zmvlvIUiCv7S9ESDU4Oiqf3I"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase