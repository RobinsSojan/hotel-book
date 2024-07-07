import { createClient } from "@/lib/utils/supabase/server";
import { CheckCircle } from "lucide-react";
import React from "react";
import Link from "next/link";

const Page = async () => {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  const user = session.data?.session?.user;
  return (
    <div className=" w-full min-h-screen pt-[10vh] lg:pt-0 pb-20">
      <div className=" text-black space-y-5 pt-14 lg:pt-[15vh] pb-12 text-center">
        <h1 className=" text-3xl leading-normal lg:text-[2.6rem] lg:max-w-[60%] font-medium mx-auto text-center ">
          Pricing Plans
        </h1>
        <p className=" text-center font-medium ">
          Unique prices that will change your experience
        </p>
      </div>
      <div className=" lg:w-[70%] w-[90%] lg:h-[70vh] grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-x-10 mx-auto">
        <div className=" w-full h-full p-10 rounded-xl bg-gray-100 border-gray-200 border-2 space-y-5 ">
          <h3 className=" text-gray-600 text-xl">1 night</h3>
          <h1 className=" text-4xl">$1,450</h1>

          <br />
          {user ? (
            <Link href={"/book"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-white font-semibold text-lg bg-black">
                Book 1 night
              </button>
            </Link>
          ) : (
            <Link href={"/signin"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-white font-semibold text-lg bg-black">
                Book 1 night
              </button>
            </Link>
          )}

          <div className=" space-y-4">
            <h3 className=" text-gray-600 text-lg">Small package</h3>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Private Session</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Individual photography</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Birthday celebration</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Our free gift for you</p>
            </div>
          </div>
        </div>

        <div className=" w-full h-full p-10 rounded-xl bg-blue-50 border-gray-200 border-2 space-y-5 ">
          <h3 className=" text-gray-600 text-xl">2 night</h3>
          <h1 className=" text-4xl">$3,600</h1>

          <br />
          {user ? (
            <Link href={"/book"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-black font-semibold text-lg bg-transparent border-2 border-black">
                Book 2 night
              </button>
            </Link>
          ) : (
            <Link href={"/signin"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-black font-semibold text-lg bg-transparent border-2 border-black">
                Book 2 night
              </button>
            </Link>
          )}

          <div className=" space-y-4">
            <h3 className=" text-gray-600 text-lg">Medium package</h3>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Private Session</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Individual photography</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Birthday celebration</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>18h of video recording</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Our free gift for you</p>
            </div>
          </div>
        </div>

        <div className=" w-full h-full p-10 rounded-xl bg-black text-white border-gray-200 border-2 space-y-5 ">
          <h3 className=" text-gray-200 text-xl">1 week</h3>
          <h1 className=" text-4xl">$4,800</h1>
          <br />
          {user ? (
            <Link href={"/book"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-black font-semibold text-lg bg-white">
                Book 1 week
              </button>
            </Link>
          ) : (
            <Link href={"/signin"} className=" w-full">
              <button className=" w-full py-5 rounded-full text-black font-semibold text-lg bg-white">
                Book 1 week
              </button>
            </Link>
          )}

          <div className=" space-y-4">
            <h3 className=" text-gray-200 text-lg">Ideal for long stays</h3>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Private Session</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Unlimited drinks</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Birthday celebration</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Free parking ticket</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Private photo session</p>
            </div>
            <div className=" flex items-center space-x-3">
              <CheckCircle />
              <p>Our free gift for you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
