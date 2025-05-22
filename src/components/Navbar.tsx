import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between ml-8">
        <div className="flex justify-center items-center gap-2">
          <Image src={'/ticket-2.png'} alt="logo" width={30} height={30}></Image>
          <h2 className="text-2xl font-bold text-[#260b64]">Event buddy</h2>
        </div>

        <div className="flex gap-4">
          <button className="size-10 w-24 text-white rounded-lg bg-gradient-to-t from-[#4855f9] to-[#8a98ff]">
            Sign in
          </button>
          <button className="size-10 w-24 text-white rounded-lg bg-gradient-to-t from-[#4157fe] to-[#8a98ff]">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
