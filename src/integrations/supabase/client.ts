// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://khwmwgmtrlvfcxobqxpp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtod213Z210cmx2ZmN4b2JxeHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2OTM0MjYsImV4cCI6MjA0OTI2OTQyNn0.rT-AgSqR2CQMbM-RHF3URclzapNNnes6hNMdASEnfLw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);