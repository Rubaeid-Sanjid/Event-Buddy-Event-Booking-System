'use client';

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-[#242565] px-16">
        <div className="my-8">
        <h2 className="md:text-4xl text-3xl font-medium mb-3">Admin Dashboard</h2>
        <p className="text-xl text-[#8570AD]">
          Manage events, view registrations, and monitor your platform.
        </p>
      </div>

      <div>
        <h3 className="font-medium text-2xl mb-5">Events Management</h3>
        
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
