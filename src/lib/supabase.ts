import { createClient } from '@supabase/supabase-js'

/// <reference types="vite/client" />

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
  id: string
  full_name: string | null
  avatar_url: string | null
  level: string
  points: number
  streak: number
  last_active: string | null
}