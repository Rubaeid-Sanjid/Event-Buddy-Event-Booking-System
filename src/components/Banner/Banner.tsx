"use client";

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url(/banner-cover.png)] h-[550px] w-full bg-cover relative -z-20 flex justify-center items-center">
      <Image
        src={"/Ellipse-740.png"}
        width={1421}
        height={1421}
        alt={"Ellipse"}
        className="absolute bottom-0"
      ></Image>
      <Image
        src={"/Ellipse-739.png"}
        width={1075}
        height={1075}
        alt={"Ellipse"}
        className="absolute bottom-0 left-[183px] -z-10"
      ></Image>
      <Image
        src={"/Ellipse-738.png"}
        width={790}
        height={790}
        alt={"Ellipse"}
        className="absolute bottom-0 left-[325px]"
      ></Image>

      {/* blue ticket */}
      <Image
        src={"/blue-ticket.png"}
        width={260}
        height={260}
        alt={"ticket"}
        className="absolute top-1/6 left-[5%]"
      ></Image>

      {/* white ticket */}
      <Image
        src={"/white-ticket.png"}
        width={240}
        height={240}
        alt={"ticket"}
        className="absolute top-[20%] right-[5%]"
      ></Image>

      <div className="flex flex-col gap-10 relative">
        {/* text content */}
        <div className="text-center">
          <h3 className="font-medium text-7xl text-[#250A63] mb-4">Discover</h3>
          <h3 className="font-medium text-7xl text-[#250A63] mb-5">
            <span className="text-[#4157FE]">Amazing</span> Events
          </h3>
          <p className="text-[#250A63] font-normal text-[20px] w-4/5 m-auto">
            Find and book events that match your interests. From tech
            conferences to music festivals, we've got you covered.
          </p>
        </div>

        {/* search field */}
        <div className="text-center">
          <h3 className="text-[20px] font-semibold text-[#250A63] mb-4">
            Find your Next event
          </h3>
          <div className="flex gap-4 justify-center relative">
            <Image
              src={"/search-normal.svg"}
              alt="search icon"
              width={24}
              height={24}
              className="absolute left-[27%] top-4"
            ></Image>
            <input
              type="text"
              placeholder="Search events"
              className="px-14  py-4 bg-[#dcdefe] rounded-lg border-[#BDBBFB] border"
            />
            <button className="px-9 py-4 text-white rounded-lg bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-[#5A78FF] hover:to-[#A4B5FF]">
              Search Events
            </button>
          </div>
        </div>
      </div>

      <Image
        src={"/banner-star.png"}
        alt={"star"}
        width={150}
        height={150}
        className="absolute left-1/12 bottom-[13%]"
      ></Image>
      <Image
        src={"/banner-star.png"}
        alt={"star"}
        width={150}
        height={150}
        className="absolute right-[5%] bottom-[13%]"
      ></Image>
    </div>
  );
};

export default Banner;