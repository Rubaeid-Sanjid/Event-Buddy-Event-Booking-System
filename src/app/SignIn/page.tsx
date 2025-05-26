"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";

const users = [
  { name: "User", email: "user@gmail.com", password: "1234", role: "user" },
  { name: "Sanjid", email: "admin@gmail.com", password: "1234", role: "admin" },
];

export default function SignIn() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = users.find((u) => u.email === email);
    const role = user ? (user.role as "user" | "admin") : "user";
    login(role);

    if (role === "admin") {
        router.push("/AdminDashboard");
    } else {
        router.push("/Dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ECEEFF]">
      <div className="flex items-center gap-2 my-4 lg:ml-20 ml-3">
        <Image src={'/ticket-2.png'} alt="logo" width={30} height={30}></Image>
        <h2 className="lg:text-2xl text-lg font-bold text-[#260b64]">Event buddy</h2>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white lg:p-8 p-4 mx-4 lg:mx-0 lg:my-0 my-8 shadow-lg w-full max-w-md relative text-[#242565]"
          style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
        >
          <h1 className="lg:text-3xl text-xl font-semibold mb-2">Sign In</h1>
          <p className="lg:text-lg text-[16px] mb-6 text-[#8570AD]">
            New User?{" "}
            <Link
              href="/SignUp"
              className="underline"
            >
              Create an account
            </Link>
          </p>

          <label className="block mb-4">
            <span className="block mb-1 font-semibold">Email</span>
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9D9D9] rounded-md"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-1 font-semibold">Password</span>
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9D9D9] rounded-md"
              required
            />
          </label>

          <button
            type="submit"
            className="
                    cursor-pointer
                    w-full
                    px-2 py-2
                    text-white rounded-md 
                    bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] 
                    hover:from-indigo-600 hover:to-indigo-500 
                    transition
                  "
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
