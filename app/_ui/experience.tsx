import React from "react";


import Image from "next/image";

const Experience = () => {
  return (
    <div className=" w-full py-16 lg:py-32">
      <div className=" text-black space-y-5 mb-32 text-center">
        <p className=" text-center font-medium ">EXPERIENCE</p>
        <h1 className=" w-[90%] text-4xl leading-normal lg:text-[2.6rem] lg:max-w-[60%] font-medium mx-auto text-center ">
          Our solutions, your success
        </h1>
      </div>

      <div className=" mt-2 lg:mt-20 w-[90%] grid-cols-1 lg:w-[70%] mx-auto lg:h-[70vh] grid lg:grid-cols-4 gap-10">
        <div className=" w-full h-[50vh]  lg:h-full bg-gray-100 lg:row-span-2 lg:col-span-2 rounded-xl relative overflow-hidden">
          <Image
            src={
              "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            fill
            className=" object-center object-cover"
          />
        </div>
        <div className=" h-fit lg:h-full w-full bg-gray-100 rounded-xl p-10">
          <div className=" flex flex-col items-center text-center justify-center w-full space-y-4 mx-auto">
            <h4 className=" text-lg uppercase text-griy font-medium">
              closer to downtown
            </h4>
            <h1 className=" font-medium text-5xl  mx-auto leading-normal">
              47%
            </h1>
            <p className=" text-griy text-base mx-auto">
              Our property is located in downtown and 100m away from the beach.
            </p>
          </div>
        </div>
        <div className=" h-fit lg:h-full w-full bg-gray-100 rounded-xl p-10">
          <div className=" flex flex-col items-center text-center justify-center w-full space-y-4 mx-auto">
            <h4 className=" text-lg uppercase text-griy font-medium">
              more fun
            </h4>
            <h1 className=" font-medium text-5xl  mx-auto leading-normal">
              3x
            </h1>
            <p className=" text-griy text-base mx-auto">
              Because of the great position, {"you'll"} have more fun and visit
              more. Enjoy all benefits today!
            </p>
          </div>
        </div>
        <div className=" w-full h-fit lg:h-full bg-gray-100 lg:col-span-2 rounded-xl p-10">
          <div className=" flex flex-col items-center text-center justify-center w-full space-y-4 mx-auto">
            <h4 className=" text-lg uppercase text-griy font-medium">
              per night
            </h4>
            <h1 className=" font-medium text-5xl  mx-auto leading-normal">
              $110
            </h1>
            <p className=" text-griy text-base mx-auto">
              We always try to make our property the most affordable due to
              quality/price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
