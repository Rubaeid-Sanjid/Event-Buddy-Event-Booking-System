import React from "react";
import EventCard from "../EventCard/EventCard";
import events from "../../../public/event.json";
import Link from "next/link";

const UpcomingEventSection = () => {
  return (
    <div className="bg-[#fafaff] lg:px-12 px-6 my-14">
      <h2 className="text-4xl font-medium text-[#242565] mb-8">
        Upcoming Events
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {events.map(({ event }, idx) => (
          <Link key={idx} href={`/EventDetails/${event.id}`}>
          
          <EventCard event={event}></EventCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventSection;
