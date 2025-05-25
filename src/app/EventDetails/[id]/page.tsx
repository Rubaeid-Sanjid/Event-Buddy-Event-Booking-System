import React from "react";
import events from "../../../../public/event.json";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import SelectSeatSection from "@/components/SelectSeatSection/SelectSeatSection";
interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const eventId = Number(params.id);
  const eventInfo = events.find(({ event }) => event.id === eventId)?.event;

  const months: Record<string, string> = {
    JAN: "January",
    FEB: "February",
    MAR: "March",
    APR: "April",
    MAY: "May",
    JUN: "June",
    JUL: "July",
    AUG: "August",
    SEP: "September",
    OCT: "October",
    NOV: "November",
    DEC: "December",
  };

  const month = months[eventInfo?.date.display.month.toUpperCase() ?? ""] || "";
  const formattedDate = `${eventInfo?.date.dayOfWeek}, ${
    eventInfo?.date.display.day
  } ${month}, ${eventInfo?.date.iso.split("-")[0]}`;

  return (
    <div className="text-[#242565]">
      <Navbar></Navbar>
      <main className="px-16 my-10">
        <Link href={"/"} className="flex items-center gap-1 mb-5">
          <Image
            src={"/arrow-left.svg"}
            alt={""}
            width={27}
            height={27}
          ></Image>

          <h3 className="text-lg font-medium">Back to event</h3>
        </Link>

        <div className="rounded-lg overflow-hidden mb-4">
          <Image
            src={`${eventInfo?.imageUrl}`}
            alt="Event image"
            width={1232}
            height={585}
            className="w-full h-[585px]"
            priority
          />
        </div>

        <div className="flex gap-2">
          {eventInfo?.tags?.map((tag, idx) => (
            <li
              key={idx}
              className="bg-[#DADEFF] text-[#1D4ED8] px-3 py-1 rounded-md text-sm font-semibold"
            >
              {tag}
            </li>
          ))}
        </div>

        <h2 className="lg:text-4xl font-medium text-3xl my-8">
          Tech Conference 2025
        </h2>

        {/* Date, Time, Location info card */}
        <div className="bg-[#FFFFFF] flex justify-between border border-[#BDBBFB59] rounded-xl p-6 mb-6 text-[16px] font-semibold">
          <div className="flex items-center gap-2">
            <Image src="/calendar-2.svg" alt="Date" width={34} height={34} />
            <div>
              <div className="text-[#6A6A6A]">Date</div>
              <div className="font-medium text-[#8570AD]">{formattedDate}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/clock.svg" alt="Time" width={34} height={34} />
            <div>
              <div className="text-[#6A6A6A]">Time</div>
              <div className="font-medium text-[#8570AD]">
                {eventInfo?.schedule?.timeRange}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/location.svg" alt="Location" width={34} height={34} />
            <div>
              <div className="text-[#6A6A6A]">Location</div>
              <div className="font-medium text-[#8570AD]">
                {eventInfo?.location}
              </div>
            </div>
          </div>
        </div>

        {/* Seats */}
        <SelectSeatSection></SelectSeatSection>

        {/* About event */}
        <div className="">
          <h3 className="text-2xl font-medium mb-4">About this event</h3>
          <h4 className="text-[#8570AD]">
            <p className="mb-4">
              Join us for Tech Future Expo 2025, an immersive one-day technology
              event bringing together developers, startups, and industry leaders
              to explore the future of software, AI, blockchain, and cloud
              computing.
            </p>
            <ul className="mb-4">
              This event will feature:
              <li>Keynote talks from industry pioneers </li>
              <li>Live demos of upcoming tech products </li>
              <li>Startup pitching sessions Hands-on coding workshops </li>
              <li>Networking lounge for professionals and students </li>
              <li>
                Whether you're an aspiring developer, a seasoned engineer, or
                just curious about what’s next in tech, this event offers
                something for everyone.{" "}
              </li>
            </ul>
            <p>
              Reserve your seat today and be part of tomorrow’s innovation.
              Limited seats available. Advance booking required.
            </p>
          </h4>
        </div>

        {/* Spot Left */}
        <div className="flex justify-between text-[#8570AD] text-2xl font-medium border-t border-[#F1F0F9] pt-3 mt-24 mb-10">
          <div className="flex items-center gap-1">
            <Image
              src={"/solar_chair-linear.svg"}
              alt={"chair"}
              width={38}
              height={38}
            ></Image>
            <h3>{eventInfo?.seating?.spotsLeft} Spots Left</h3>
            <h3 className="text-[#6A6A6A66]">(2000 registered)</h3>
          </div>
        </div>
      </main>
      
      <Footer></Footer>
    </div>
  );
};

export default page;
