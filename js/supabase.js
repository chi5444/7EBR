const SUPABASE_URL = 'https://gcpoafwtgywockuzccrp.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcG9hZnd0Z3l3b2NrdXpjY3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MDg2OTgsImV4cCI6MjA5NTk4NDY5OH0.PH4L1QeARNBnV9dSPvgV7XjXVEHSX9iOL4SwuVgh8B8';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);