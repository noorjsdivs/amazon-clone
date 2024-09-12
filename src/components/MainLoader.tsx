import Image from "next/image";
import React from "react";
import { logo } from "../assets";

const MainLoader = () => {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center">
      <div className="w-52 p-4 rounded-lg bg-amazonBlue flex items-center justify-center relative">
        <Image
          src={logo}
          alt="Logo"
          className="w-48 h-auto object-contain"
          priority
        />
        <p className="text-sm text-center font-semibold tracking-wide text-white absolute left-1/2 bottom-1 -translate-x-[50%]">
          Loading...
        </p>
      </div>
      <span className="w-14 h-14 inline-flex border-8 border-amazonBlue rounded-full relative">
        <span className="w-14 h-14 border-8 border-r-amazonOrangeDark border-b-amazonBlue border-t-amazonBlue border-l-amazonBlue rounded-full absolute -top-2 -left-2 animate-spin" />
      </span>
    </div>
  );
};

export default MainLoader;
