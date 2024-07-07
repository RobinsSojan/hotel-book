import React from "react";

import Image from "next/image";

const Instagram = () => {
  const pictures = [
    "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603487986923-79447fed3e88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className=" w-full bg-black py-10 pb-20 lg:pb-10 gap-y-14">
      <h1 className=" font-semibold mb-20 text-2xl text-center text-white font-author">
        Instagram
      </h1>
      <div className=" w-[80%] mx-auto grid gap-y-3 lg:gap-x-10 grid-cols-3 lg:grid-cols-6">
        {pictures.map((item, index) => (
          <div
            key={index}
            className={` ${index % 2 ? " lg:-mt-12" : " lg:mt-0"} ${
              index == 1 ? " -translate-y-10 lg:translate-y-0 " : ""
            }  ${
              index == 4 ? " translate-y-10 lg:translate-y-0 " : ""
            } w-full h-[7rem] lg:h-[13rem] rounded-sm overflow-hidden relative `}
          >
            <Image
              src={item}
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
