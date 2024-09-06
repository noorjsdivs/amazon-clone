import { auth, signOut } from "@/auth";
import Image from "next/image";
import React from "react";

const SignOutButton = async () => {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="text-xs text-gray-100 flex gap-2 items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
    >
      <Image
        src={session?.user?.image!}
        alt="userImage"
        width={200}
        height={200}
        className="w-10 rounded-full"
      />
      <div>
        <p>Hello, {session?.user?.name}</p>
        <button
          type="submit"
          className="text-white font-bold flex items-center"
        >
          Log out
        </button>
      </div>
    </form>
  );
};

export default SignOutButton;
