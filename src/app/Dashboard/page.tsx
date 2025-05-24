'use client';

import Navbar from "@/components/Navbar";
import RegisterEventCard from "@/components/RegisterEventCard/RegisterEventCard";
import React from "react";

const page = () => {
  return (
    <div className="text-[#242565]">
      <Navbar></Navbar>
      <div className="my-8">
        <h2 className="md:text-4xl text-3xl  font-medium mb-4">Dashboard</h2>
        <p className="text-xl text-[#8570AD]">
          Welcome back, Alif! Here you can manage your event registrations.
        </p>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default page;
