import React from "react";
import BookButton from "../_ui/book_button";
import Image from "next/image";

import Testimonial from "../_ui/testimonial";
import Experience from "../_ui/experience";
import { LocateIcon, Mail, Phone } from "lucide-react";

const Page = () => {
  return (
    <div className=" w-full pt-[15vh] lg:pt-0">
      <main className=" w-full h-fit lg:h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className=" w-full h-fit lg:h-full flex flex-col items-center justify-center">
          <div className=" w-[90%] lg:w-[55%] mx-auto space-y-6 flex flex-col items-center">
            <h1 className=" text-4xl leading-normal lg:text-[3.6rem] text-center">
              Book Your Holiday
            </h1>
            <p className=" text-[#5b6269] text-[1rem] text-center">
              We are here to help you anytime 24/7.
            </p>
            <div className=" flex flex-col items-center space-y-8">
              <div className=" space-y-4">
                <div className=" flex items-center space-x-3">
                  <LocateIcon size={32} />
                  <p className=" text-xl ">Our Location</p>
                </div>
                <p className=" text-[#5b6269] text-[1rem] text-center">
                  Dublin Ireland.
                </p>
              </div>

              <div className=" space-y-4">
                <div className=" flex items-center space-x-3">
                  <Mail size={32} />
                  <p className=" text-xl ">Email</p>
                </div>
                <p className=" text-[#5b6269] text-[1rem] text-center">
                  robinssojan26@gmail.com.
                </p>
              </div>

              <div className=" space-y-4">
                <div className=" flex items-center space-x-3">
                  <Phone size={32} />
                  <p className=" text-xl ">Phone Support</p>
                </div>
                <p className=" text-[#5b6269] text-[1rem] text-center">
                  +353 894784242
                </p>
              </div>
            </div>
          </div>
          <br />
          <form
            action="#"
            className=" p-5 rounded-xl gap-5 grid grid-cols-1 shadow-lg lg:hidden   bg-white  w-[90%]"
          >
            <div className=" space-y-2">
              <label
                htmlFor="firstname"
                className="block  font-semibold text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>

              <input
                type="text"
                id="firstname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter first name.."
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="lastname"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter last name ..."
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Work email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="orgname"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Organisation Name
              </label>
              <input
                type="text"
                id="orgname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter organization name"
                required
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <label
                htmlFor="message"
                className="block font-semibold text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium bg-black text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
          <br />
        </div>
        <div className=" hidden lg:block w-full h-full relative">
          <Image
            src={
              "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            alt=""
            className=" object-cover object-center -z-10"
          />
          <form
            action="#"
            className=" p-10 rounded-xl gap-5 grid grid-cols-2 bg-white z-50 w-[70%] translate-y-[20vh] translate-x-[5vh]"
          >
            <div className=" space-y-2">
              <label
                htmlFor="firstname"
                className="block  font-semibold text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>

              <input
                type="text"
                id="firstname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter first name.."
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="lastname"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter last name ..."
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Work email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className=" space-y-2">
              <label
                htmlFor="orgname"
                className="block font-semibold text-gray-900 dark:text-gray-300"
              >
                Organisation Name
              </label>
              <input
                type="text"
                id="orgname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter organization name"
                required
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <label
                htmlFor="message"
                className="block font-semibold text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium bg-black text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </main>

      <Testimonial />

      <Experience />
    </div>
  );
};

export default Page;
