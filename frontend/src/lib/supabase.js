import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and Anon Key
const supabaseUrl = 'https://ucgyjawgydzpdevcolqd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZ3lqYXdneWR6cGRldmNvbHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDk5MTQsImV4cCI6MjA2ODA4NTkxNH0.qxHiXHdfthXo0bKxUl-eK-sxcspYgI4n_mMUk-uHfBQ';

export const supabase = createClient(supabaseUrl, supabaseKey);