import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrrtalkgliljylgwyfzf.supabase.co";
const supabaseAnonKey = "sb_publishable_QFaFsbolqm3elj8EwrDVOQ_CLEmlKJc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);