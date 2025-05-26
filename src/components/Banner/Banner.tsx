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
        className="absolute bottom-0 lg:block hidden"
      ></Image>
      <Image
        src={"/Ellipse-739.png"}
        width={1075}
        height={1075}
        alt={"Ellipse"}
        className="absolute bottom-0 left-[183px] lg:block hidden -z-10"
      ></Image>
      <Image
        src={"/Ellipse-738.png"}
        width={790}
        height={790}
        alt={"Ellipse"}
        className="absolute bottom-0 left-[325px] lg:block hidden"
      ></Image>

      {/* Blue ticket */}
      <div
        className="absolute top-[8%] left-4 sm:left-[5%]
             w-16 sm:w-24 md:w-32 lg:w-[260px]
             aspect-square"
      >
        <Image
          src="/blue-ticket.png"
          alt="blue ticket"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 4rem, (max-width: 768px) 6rem, 260px"
        />
      </div>

      {/* White ticket */}
      <div
        className="absolute top-[8%] right-3 sm:right-[5%]
             w-14 sm:w-20 md:w-28 lg:w-[240px]
             aspect-square"
      >
        <Image
          src="/white-ticket.png"
          alt="white ticket"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 3.5rem, (max-width: 768px) 5rem, 240px"
        />
      </div>

      <div className="flex flex-col gap-10 relative">
        {/* text content */}
        <div className="text-center">
          <h3 className="font-medium lg:text-7xl text-4xl text-[#250A63] mb-4">
            Discover
          </h3>
          <h3 className="font-medium lg:text-7xl text-4xl text-[#250A63] mb-5">
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

          <div className="flex lg:flex-row flex-col gap-4 justify-center relative">
            <Image
              src={"/search-normal.svg"}
              alt="search icon"
              width={24}
              height={24}
              className="absolute lg:left-[27%] left-8 top-4 pointer-events-none"
            ></Image>
            
            <input
              type="text"
              placeholder="Search events"
              className="lg:px-14 lg:m-0 mx-3 pl-14 py-4 bg-[#dcdefe] rounded-lg border-[#BDBBFB] border"
            />
            <button className="lg:m-0 mx-3 px-3 lg:px-9 py-4 text-white rounded-lg bg-gradient-to-t from-[#4157FE] to-[#7B8BFF] hover:from-[#5A78FF] hover:to-[#A4B5FF]">
              Search Events
            </button>
          </div>
        </div>
      </div>

      {/* Left star */}
<div
  className="
    absolute lg:bottom-[13%] bottom-1/3 lg:left-24 left-1 md:left-1/12
    w-24 sm:w-32 md:w-36 lg:w-40 xl:w-[150px]
    aspect-square
  "
>
  <Image
    src="/banner-star.png"
    alt="star"
    fill
    className="object-contain"
    sizes="(max-width: 640px) 6rem, (max-width: 768px) 8rem, (max-width: 1024px) 10rem, 200px"
  />
</div>

{/* Right star */}
<div
  className="
    absolute lg:bottom-[13%] bottom-1/3 lg:right-20 right-1 md:right-[5%]
    w-24 sm:w-32 md:w-36 lg:w-40 xl:w-[150px]
    aspect-square 
  "
>
  <Image
    src="/banner-star.png"
    alt="star"
    fill
    className="object-contain"
    sizes="(max-width: 640px) 6rem, (max-width: 768px) 8rem, (max-width: 1024px) 10rem, 200px"
  />
</div>


    </div>
  );
};

export default Banner;
