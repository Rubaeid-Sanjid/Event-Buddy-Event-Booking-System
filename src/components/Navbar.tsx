"use client";

import { useAuth } from "@/Context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="w-full px-16 py-3">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/ticket-2.png"}
            alt="logo"
            width={30}
            height={30}
          ></Image>
          <h2 className="text-2xl font-bold text-[#260b64]">Event buddy</h2>
        </div>

        <div className="flex gap-4">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="cursor-pointer size-10 w-24 text-white rounded-lg bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-indigo-600 hover:to-indigo-500 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href={"/SignIn"}>
                <button className="cursor-pointer size-10 w-24 text-white rounded-lg bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-indigo-600 hover:to-indigo-500 transition">
                  Sign in
                </button>
              </Link>
              <Link href={"/SignUp"}>
                <button className="cursor-pointer size-10 w-24 text-white rounded-lg bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-indigo-600 hover:to-indigo-500 transition">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
