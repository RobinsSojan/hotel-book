"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BookButton = () => {
  const route = useRouter();

  return (
    <button
      onClick={() => route.push("/pricing")}
      className=" bg-black rounded-full py-3 px-6 text-white font-semibold "
    >
      Book Now
    </button>
  );
};

export default BookButton;
