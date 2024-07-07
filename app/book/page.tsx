import Link from "next/link";

import { MailIcon } from "lucide-react";

export default function Page() {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
            <MailIcon size={120} />
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              You have made a booking request successfully
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Thank you for making a booking request with Robins Hotels you will
              recieve a mail after reservations have been confirmed.
            </p>
            <a
              href="#"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
