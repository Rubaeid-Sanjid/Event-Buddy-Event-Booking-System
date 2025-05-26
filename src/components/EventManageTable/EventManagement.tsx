import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  registrations: {
    booked: number;
    total: number;
  };
}

interface EventManagement {
  events: Event[];
}

const EventManagement= ({ events }: EventManagement) => {
  return (
    <div className="overflow-x-auto">
        
      <table className="table-auto border-collapse text-left text-sm w-full">
        <thead className="font-semibold bg-white border rounded-lg border-[#E6E6E6]">
          <tr>
            <th className="py-3 px-4">Title</th>
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Registrations</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-indigo-50 border-b border-[#E6E6E6]">
              <td className="py-3 px-4">{event.title}</td>
              <td className="py-3 px-4">{event.date}</td>
              <td className="py-3 px-4">{event.location}</td>
              <td className="py-3 px-4">
                {event.registrations.booked}/{event.registrations.total}
              </td>
              <td className="py-3 lg:px-4 flex gap-3">
                <Link href={`/EventDetails/${event.id}`}>
                <Image src={'/eye.svg'} alt={''} width={20} height={20}></Image>
                </Link>
                <Image src={'/edit.svg'} alt={''} width={20} height={20}></Image>
                <Image src={'/trash.svg'} alt={''} width={20} height={20}></Image>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventManagement;
