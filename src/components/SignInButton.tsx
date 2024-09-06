import { signIn } from "@/auth";
import React from "react";
import { BiCaretDown } from "react-icons/bi";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
      className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
    >
      <p>Hello, sign in</p>
      <button type="submit" className="text-white font-bold flex items-center">
        Account & Lists{" "}
        <span>
          <BiCaretDown />
        </span>
      </button>
    </form>
  );
};

export default SignInButton;
