import React from 'react';
import EventCard from '../EventCard/EventCard';

const UpcomingEventSection = () => {
    return (
        <div className='bg-[#fafaff]'>
            <EventCard
  event={{
    id: 5,
    imageUrl: "/conference-audience.jpg",
    date: {
      iso: "2025-04-14",
      display: {
        month: "APR",
        day: 14,
      },
      dayOfWeek: "Sunday",
    },
    title: "Tech Conference 2025",
    description: "We’ll get you directly seated and inside for you to enjoy the conference.",
    schedule: {
      timeRange: "3–5 PM",
    },
    location: "San Francisco, CA",
    tags: ["Tech", "Conference", "AI"],
    seating: {
      spotsLeft: 20,
      totalSeats: 100,
    },
  }}
/>
            <EventCard
  event={{
    id: 5,
    imageUrl: "/conference-audience.jpg",
    date: {
      iso: "2025-04-14",
      display: {
        month: "APR",
        day: 14,
      },
      dayOfWeek: "Sunday",
    },
    title: "Tech Conference 2025",
    description: "We’ll get you directly seated and inside for you to enjoy the conference.",
    schedule: {
      timeRange: "3–5 PM",
    },
    location: "San Francisco, CA",
    tags: ["Tech", "Conference", "AI"],
    seating: {
      spotsLeft: 20,
      totalSeats: 100,
    },
  }}
/>
        </div>
    );
};

export default UpcomingEventSection;