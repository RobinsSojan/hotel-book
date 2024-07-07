"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, UserIcon } from "lucide-react";
import BookButton from "../_ui/book_button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "@supabase/supabase-js";
import SignOut from "@/lib/components/signout";

const Header = ({ user }: { user: User | undefined }) => {
  const [modal, setModal] = useState(false);

  return (
    <header className=" w-full py-4 shadow-lg fixed top-0 z-50 bg-white ">
      <div className=" relative w-full px-6 lg:px-0 lg:w-[80%] mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className=" font-author font-medium text-3xl lg:text-[54px]"
        >
          Robins Hotels
        </Link>
        <nav className=" hidden lg:block">
          <ul className=" flex items-center space-x-4 text-lg font-semibold">
            <Link href={"/property"}>Property</Link>
            <Link href={"/reviews"}>Reviews</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </nav>
        <div className=" lg:flex items-center space-x-5 hidden">
          {user ? (
            <SignOut />
          ) : (
            <Popover className="relative z-50">
              <PopoverButton className=" border-none">
                <div className=" w-14 h-14 rounded-[50%] bg-gray-200 flex items-center justify-center">
                  <UserIcon />
                </div>
              </PopoverButton>
              <PopoverPanel
                anchor="bottom"
                className="flex flex-col font-medium space-y-3 bg-white border-2 shadow-lg rounded-xl p-5 z-[9999]"
              >
                <Link href="/signup">Sign Up</Link>
                <Link href="/signin">Sign In</Link>
              </PopoverPanel>
            </Popover>
          )}
          <BookButton />
        </div>
        <div className=" lg:hidden">
          <button
            onClick={() => setModal(!modal)}
            className=" w-14 h-14 bg-black flex items-center justify-center text-white font-semibold rounded-[50%]"
          >
            <Menu />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {modal && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
              className="  lg:hidden absolute left-0 w-full top-[4rem] p-10 rounded-br-xl rounded-bl-xl shadow-lg z-[9999] bg-white"
            >
              <nav className=" lg:block">
                <ul className=" flex flex-col  space-y-4 text-lg font-semibold">
                  <Link href={"/property"}>Property</Link>
                  <Link href={"/reviews"}>Reviews</Link>
                  <Link href={"/pricing"}>Pricing</Link>
                  <Link href={"/contact"}>Contact</Link>
                  <Link href={"/signin"}>SignIn</Link>
                  <Link href={"/signup"}>SignUp</Link>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
