import React from "react";

import BookButton from "@/app/_ui/book_button";
import Image from "next/image";

const Homepage = () => {
  return (
    <main className=" w-full h-[80vh] lg:h-screen lg:grid lg:grid-cols-2">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" lg-[90%] lg:w-[55%] mx-auto space-y-6 flex flex-col items-center">
          <h1 className=" text-[2.8rem] font-medium leading-normal lg:text-[3.6rem] text-center">
            Perfect stay for your perfect vacation
          </h1>
          <p className=" text-[#5b6269] text-[1rem] text-center">
            Experience the comfort at the next level and have fun staying at our
            property. Luxury, minimalist approach and downtown location.
          </p>
          <BookButton />
        </div>
      </div>
      <div className=" hidden lg:block w-full h-full relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          alt=""
          className=" object-cover object-center"
        />
      </div>
    </main>
  );
};

export default Homepage;
