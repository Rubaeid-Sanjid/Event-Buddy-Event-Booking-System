"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";
import Link from "next/link";

const users = [
  { name: "Rafi", email: "user@gmail.com", password: "1234", role: "user" },
  { name: "Sanjid", email: "admin@gmail.com", password: "1234", role: "admin" },
];

export default function SignUp() {
  const { login } = useAuth();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
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
      <div className="flex items-center gap-2 my-4 ml-20">
        <Image src={'/ticket-2.png'} alt="logo" width={30} height={30}></Image>
        <h2 className="text-2xl font-bold text-[#260b64]">Event buddy</h2>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 shadow-lg w-full max-w-md relative text-[#242565]"
          style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
        >
          <h1 className="text-3xl font-semibold mb-2">Sign Up</h1>
          <p className="text-lg mb-6 text-[#8570AD]">
            Already have an account?{" "}
            <Link
              href="/SignIn"
              className="underline"
            >
              Sign in
            </Link>
          </p>

          <label className="block mb-4">
            <span className="block mb-1 font-semibold">Full Name</span>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9D9D9] rounded-md"
              required
            />
          </label>

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
            className="cursor-pointer w-full text-white rounded-md bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] py-3 hover:from-indigo-600 hover:to-indigo-500 transition"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
