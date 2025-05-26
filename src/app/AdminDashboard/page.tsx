"use client";

import EventManagement from "@/components/EventManageTable/EventManagement";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const sampleEvents = [
    {
      id: 1,
      title: "Tech Conference 2025",
      date: "Sunday, 14 April, 2025",
      location: "San Francisco, CA",
      registrations: { booked: 130, total: 500 },
    },
    {
      id: 2,
      title: "Tech Conference 2025",
      date: "Sunday, 14 April, 2025",
      location: "San Francisco, CA",
      registrations: { booked: 130, total: 500 },
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-[#242565] lg:px-16 px-3 mb-24">
        <div className="my-8">
          <h2 className="md:text-4xl text-3xl font-medium mb-3">
            Admin Dashboard
          </h2>
          <p className="lg:text-xl text-lg text-[#8570AD]">
            Manage events, view registrations, and monitor your platform.
          </p>
        </div>

        <div>
          <div className="flex justify-between">
            <h3 className="font-medium lg:text-2xl text-xl mb-5">Events Management</h3>
            <button 
            className="
                    cursor-pointer 
                    w-32 h-10
                    text-xs sm:text-base 
                    px-2 py-1 sm:px-4 sm:py-2 
                    text-white rounded-md 
                    bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] 
                    hover:from-indigo-600 hover:to-indigo-500 
                    transition
                  "
            >
              Create Event
            </button>
          </div>

          <EventManagement events={sampleEvents} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
