import React from "react";
import EventCard, { EventCardProps } from "../EventCard/EventCard";
import events from "../../../public/event.json";
import Link from "next/link";

interface StatusProp {
  eventStatus: string;
}

const EventSection = ({ eventStatus }: StatusProp) => {
  const currentDate = new Date();
  const recentDate = currentDate.toISOString().split("T")[0];

  const upcomingEvents = events.filter(
    (event) => event.event.date.iso >= recentDate
  );
  const previousEvents = events.filter(
    (event) => event.event.date.iso < recentDate
  );

  let eventsToDisplay: EventCardProps[] = [];

  if (eventStatus === "Upcoming") {
    eventsToDisplay = upcomingEvents;
  }

  if (eventStatus === "Previous") {
    eventsToDisplay = previousEvents;
  }

  const pageNumbers: number[] = [2, 3, 4];

  return (
    <div className="bg-[#fafaff] lg:px-12 px-6 my-14">
      <h2 className="lg:text-4xl text-2xl font-medium text-[#242565] mb-8">
        <span>{eventStatus}</span> Events
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {eventsToDisplay.map(({ event }, idx) => (
          <Link key={idx} href={`/EventDetails/${event.id}`}>
            <EventCard event={event}></EventCard>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
          <button className={"px-3 py-1 rounded-lg bg-[#4157FE] text-white border border-[#EBEBEB]"}>
            1
          </button>
        {pageNumbers.map((page, idx) => (
          <button key={idx} className={"px-3 py-1 rounded-lg border border-[#EBEBEB]"}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
