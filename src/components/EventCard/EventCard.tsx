"use client";

import Image from "next/image";
import React from "react";
import "./card.css";

interface DateDisplay {
  month: string;
  day: number;
}

interface EventDate {
  iso: string;
  display: DateDisplay;
  dayOfWeek: string;
}

interface Seating {
  spotsLeft: number;
  totalSeats: number;
}

export interface Event {
  id: number;
  imageUrl: string;
  date: EventDate;
  title: string;
  description: string;
  schedule: {
    timeRange: string;
  };
  location: string;
  tags: string[];
  seating: Seating;
}

export interface EventCardProps {
  event: Event;
}

const EventCard = ({event} : EventCardProps ) => {
  return (
    <div className="max-w-sm bg-white flex flex-col text-gray-900 cut-corners">
      <Image
        src={event.imageUrl}
        alt={event.title}
        width={400}
        height={218}
        className="w-full h-48 object-cover"
      />

      <div className="flex items-center">
        <div className="p-2 text-center w-14">
          <span className="text-xs font-bold text-[#3D37F1]">
            {event.date.display.month}
          </span>
          <span className="block text-2xl font-bold">
            {event.date.display.day}
          </span>
        </div>

        <h2 className="lg:text-2xl text-xl font-medium text-[#242565]">{event.title}</h2>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <p className="text-[#6A6A6A] text-[16px]">{event.description}</p>

        <div className="flex lg:flex-row flex-col lg:items-center gap-2 text-[#6A6A6A] text-[16px]">
          <div className="flex items-center gap-1">
            <Image
              src={"/calendar-2.svg"}
              alt={"calendar"}
              width={20}
              height={20}
            ></Image>
            <span>{event.date.dayOfWeek}</span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={"/clock.svg"}
              alt={"clock"}
              width={20}
              height={20}
            ></Image>
            <span>{event.schedule.timeRange}</span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src={"/location.svg"}
              alt={"location"}
              width={20}
              height={20}
            ></Image>
            <span>{event.location}</span>
          </div>
        </div>

        {/* tags */}
        <div className="flex lg:gap-2 gap-1">
          {event.tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-[#DADEFF] text-[#1D4ED8] px-3 py-1 rounded-md text-xs font-semibold"
            >
              {tag}
            </li>
          ))}
        </div>

        <div className="flex justify-between text-[#8570AD] text-sm font-medium border-t pt-3">
          <div className="flex items-center gap-1">
            <Image
              src={"/solar_chair-linear.svg"}
              alt={"chair"}
              width={20}
              height={20}
            ></Image>
            <h3>{event.seating.spotsLeft} Spots Left</h3>
          </div>
          <h3>Total {event.seating.totalSeats} Seats</h3>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
