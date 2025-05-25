"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import RegisterEventCard from "@/components/RegisterEventCard/RegisterEventCard";
import { useAuth } from "@/Context/AuthContext";
import React from "react";

const page = () => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-[#242565] px-16 mb-24">
        <div className="my-8">
          <h2 className="md:text-4xl text-3xl font-medium mb-3">Dashboard</h2>
          <p className="text-xl text-[#8570AD]">
            Welcome back,{user?.name}! Here you can manage your event registrations.
          </p>
        </div>

        <div className="">
          <h3 className="font-medium text-2xl mb-5">My Registered Events</h3>
          <RegisterEventCard
            event={{
              date: {
                display: { month: "APR", day: 14 },
                dayOfWeek: "Sunday",
                timeRange: "3–5 PM",
                location: "San Francisco, CA",
              },
              title: "Tech Conference 2025",
              onCancel: () => alert("Cancelled!"),
            }}
          />
          <button className="block mx-auto text-[15px] font-semibold cursor-pointer px-4 py-2 text-white rounded-md bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-indigo-600 hover:to-indigo-500 transition">
            Browse more events
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
