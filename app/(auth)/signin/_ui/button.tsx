"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const LogInButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-full bg-black text-white text-lg font-medium py-5"
    >
      {pending ? "Logging In..." : "Submit"}
    </button>
  );
};

export default LogInButton;
