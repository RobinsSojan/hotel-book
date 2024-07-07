"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/utils/supabase/server";

export const logout = async () => {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/signin");
};
