import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className=" w-full h-fit bg-gray-100 py-20 lg:py-32">
      <div className=" text-black space-y-10 mb-20 lg:mb-32 text-center">
        <p className=" text-center font-medium ">TESTIMONIALS</p>
        <h1 className=" text-4xl w-[80%] leading-normal lg:text-[2.6rem] lg:max-w-[60%] font-medium mx-auto text-center ">
          Real stories and happy clients
        </h1>
      </div>
      <div className=" w-[90%] lg:w-[70%] mx-auto grid lg:grid-cols-3 gap-10">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className={` ${
              index % 2 ? " lg:mt-10" : ""
            } rounded-2xl bg-white p-8 shadow-lg shadow-gray-300/50 mx-auto text-center lg:py-16 lg:px-6 `}
          >
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-base font-medium text-gray-900 dark:text-white">
                  Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
