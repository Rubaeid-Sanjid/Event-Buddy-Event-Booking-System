"use client";
import Image from "next/image";
import React, { useState } from "react";

const SelectSeatSection = () => {
  const [selectedSeats, setSelectedSeats] = useState(1);

  const seats: number[] = [1, 2, 3, 4];
  return (
    <div className="bg-white rounded-lg p-6 mb-10 border border-[#BDBBFB59] w-3/4 mx-auto">
      <h3 className="lg:text-2xl text-xl font-semibold mb-5">Select Number of Seats</h3>

      <div className="flex lg:flex-row flex-col justify-center gap-4 mb-6">
        {seats.map((seat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedSeats(seat)}
            className={`flex flex-col items-center justify-center cursor-pointer rounded-md border border-[#E6E6E6] px-6 py-4 lg:w-[204px]
                  ${
                    selectedSeats === seat
                      ? "border-[#8570AD] shadow-md"
                      : "border-[#E6E6E6]"
                  }
                  `}
          >
            <Image src="/ticket.svg" alt="Ticket" width={24} height={24} />
            <span className="text-xl font-semibold mt-2">{seat}</span>
            <span className="text-[15px] text-[#8570AD] font-semibold">
              Seats
            </span>
          </button>
        ))}
      </div>

      <button className="block mx-auto text-[15px] font-semibold cursor-pointer px-4 py-2 text-white rounded-md bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-indigo-600 hover:to-indigo-500 transition">
        Book 1 Seat
      </button>
    </div>
  );
};

export default SelectSeatSection;
