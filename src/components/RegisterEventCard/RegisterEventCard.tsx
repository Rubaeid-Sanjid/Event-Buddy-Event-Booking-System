'use client';

import React from "react";
import Image from "next/image";

interface RegisteredEventProps {
  event: {
    date: {
      display: { month: string; day: number };
      dayOfWeek: string;
      timeRange: string;
      location: string;
    };
    title: string;
    onCancel: () => void;
  };
}

const RegisterEventCard = ({ event } : RegisteredEventProps) => {
  return (
    <div className="flex items-center justify-between border border-[#BDBBFB59] rounded-md p-4">
      <div className="flex items-center gap-6">

        <div className="text-center">
          <span className="block text-2xl font-bold text-[#3D37F1]">{event.date.display.month}</span>
          <span className="block text-5xl font-bold text-black">
            {event.date.display.day}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">{event.title}</h3>

          <div className="flex items-center gap-4 text-[#6A6A6A] text-[16px]">
            <div className="flex items-center gap-1">
              <Image src="/calendar-2.svg" alt="calendar" width={18} height={18} />
              <span>{event.date.dayOfWeek}</span>
            </div>

            <div className="flex items-center gap-1">
              <Image src="/clock.svg" alt="clock" width={18} height={18} />
              <span>{event.date.timeRange}</span>
            </div>

            <div className="flex items-center gap-1">
              <Image src="/location.svg" alt="location" width={18} height={18} />
              <span>{event.date.location}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={event.onCancel}
        className="bg-gradient-to-t from-[#FE4141] to-[#FF847B] hover:from-red-500 hover:to-red-400 transition text-white rounded-md px-4 py-2 text-sm"
      >
        Cancel registration
      </button>
    </div>
  );
};

export default RegisterEventCard;
