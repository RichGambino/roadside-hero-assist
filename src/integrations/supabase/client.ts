// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://arzujbspfdlmbaabwpjn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyenVqYnNwZmRsbWJhYWJ3cGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjAyNTIsImV4cCI6MjA1MDc5NjI1Mn0.ci8Bhf23SrjCvSqnv1yIFxGiB18SOH_ZXS8jtVU3-YM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);