"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SignUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-full bg-black text-white text-lg font-medium py-5"
    >
      {pending ? "Signing up..." : "Submit"}
    </button>
  );
};

export default SignUpButton;
