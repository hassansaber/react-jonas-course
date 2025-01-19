import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABSE_KEY ?? ""
);

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.warn(
    "Supabase URL or key not set. Supabase client may not work correctly."
  );
}
