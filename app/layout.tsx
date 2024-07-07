import type { Metadata } from "next";

import "./globals.css";
import Header from "./_ui/header";
import Footer from "./_ui/footer";
import SignOut from "@/lib/components/signout";
import { createClient } from "@/lib/utils/supabase/server";

export const metadata: Metadata = {
  title: "Robins Hotels",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data?.session?.user;

  return (
    <html lang="en">
      <body className={" w-full overflow-x-hidden relative font-manrope"}>
        <Header user={user} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
