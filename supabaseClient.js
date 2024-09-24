import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kldncroehkmqulnvciog.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZG5jcm9laGttcXVsbnZjaW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxODUzNDEsImV4cCI6MjA0Mjc2MTM0MX0.X1Y0eEvjVhuv9plEG6DoSNf9jWm1yNc7Kgr0JCCeYCU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
