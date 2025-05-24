import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-16 py-8 bg-[#ECEEFF]">
      <div className="flex justify-between border-b border-[#2C257521] pb-5">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/ticket-2.png"}
            alt="logo"
            width={30}
            height={30}
          ></Image>
          <h2 className="text-2xl font-bold text-[#260b64]">Event buddy</h2>
        </div>

        <ul className="flex gap-4 font-medium text-sm">
            <li className="cursor-pointer text-[#2C2575]">
              <Link href={"/SignIn"}>Home</Link>
            </li>

            <li className="cursor-pointer text-[#2C2575]">
              <Link href={"/SignIn"}>Sign In</Link>
            </li>

            <li className="cursor-pointer text-[#2C2575]">
              <Link href={"/SignIn"}>Sign Up</Link>
            </li>
            
            <li className="cursor-pointer text-[#2C2575]">
              <Link href={"/SignIn"}>Privacy Policy</Link>
            </li>
        </ul>
        
      </div>
      <p className="text-sm font-medium text-center text-[#6A6A6A] mt-5">© 2025 Event buddy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
