import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "./action";

export default function SignOut() {
  return (
    <form>
      <button
        formAction={logout}
        className="text-white/30 hover:text-white transition duration-100 ease-in-out"
      >
        Logout
      </button>
    </form>
  );
}
