/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="w-full -z-10  items-center relative  flex justify-between">
        <div className="relative z-10 px-3 md:px-5 bg-opacity-5 py-10 md:py-32 bg-slate-400 w-full h-full text-white">
          <span className="text-2xl w-full md:text-4xl drop-shadow-md">
            Welcome to
          </span>{" "}
          <br />
          <span className="text-4xl w-[20ch] text-nowrap md:text-6xl font-bold drop-shadow-md">
            Macro Metals
          </span>
          <br />
          <span className="text-sm md:text-lg flex  w-[40ch]">
            An ISO 9001-2015 Certified Company
          </span>
        </div>
        <div className="w-full h-full">
          <video
            src="/final-video.mp4"
            autoPlay
            muted
            loop
            className="absolute top-0 left-0  w-full h-full object-cover z-0"
          />
        </div>
      </div>
      <div className="w-full bg-slate-300">
        <div className="w-full flex justify-center items-center py-3 text-xl md:text-2xl font-bold">
          Let the numbers speak for us :
        </div>
        <div className="flex justify-evenly pb-2">
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaHandshake className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">100 + </span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              Clients
            </span>
          </div>
          <div className="border-2 border-solid mb-3"></div>
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaUsers className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">50 + </span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              Employees
            </span>
          </div>
          <div className="border-2 border-solid mb-3"></div>
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaGlobe className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">2 +</span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              Locations
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[95%] mt-3 rounded-xl bg-blue-100 p-3 gap-2 md:gap-0">
        <div className="flex w-full items-center md:w-[50%] justify-evenly gap-2 md:border-r-2 border-black border-b-2 md:border-b-0 pb-2">
          <img
            className="w-[40%] h-[60%] md:h-[80%] rounded-xl  transition-all duration-300"
            src="/bolts-screw.png"
            alt="bolts-and-screws"
          />
          <div className="flex flex-col gap-4 md:gap-10 items-center w-[50%]">
            <span className="font-bold  text-xl underline md:text-2xl ">
              Bolts and Screws
            </span>
            <div className="font-mono text-sm md:text-xl">
              Macro Metals has positioned itself to provide customers with
              quality products in a timely and efficient manner.
            </div>
            <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:scale-110 hover:underline-offset-8 cursor-pointer  border-2 p-2 rounded-xl border-orange-600 bg-orange-600 text-white  hover:bg-white ">
              <Link to="/products">Our Products</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full md:w-[50%] justify-evenly gap-2 md:border-l-2 border-black border-b-2 md:border-b-0 pb-2">
          <div className="flex flex-col gap-4 md:gap-10 items-center w-[50%]">
            <span className="font-bold  text-xl underline md:text-2xl ">
              Stud Bolts
            </span>
            <div className="font-mono text-sm md:text-xl">
              For 25 years, Macro Metals has been a leading distributor and
              manufacturer of high-quality stud bolts.
            </div>
            <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:scale-110 hover:underline-offset-8 cursor-pointer  border-2 p-2 rounded-xl border-orange-600 bg-orange-600 text-white  hover:bg-white ">
              <Link to="/products">Our Products</Link>
            </div>
          </div>
          <img
            className="w-[40%] h-[60%] md:h-[80%] rounded-xl transition-all duration-300"
            src="/stud-bolts.png"
            alt="bolts-and-screws"
          />
        </div>
        <div className="flex items-center w-full md:w-[50%] justify-evenly gap-2 md:border-r-2  border-black border-b-2 md:border-b-0 pb-2">
          <img
            className="w-[40%] h-[60%] md:h-[80%] rounded-xl  transition-all duration-300"
            src="/nuts.png"
            alt="nuts"
          />
          <div className="flex flex-col gap-4 md:gap-10 items-center w-[50%]">
            <span className="font-bold  text-xl underline md:text-2xl ">
              Nuts
            </span>
            <div className="font-mono text-sm md:text-xl">
              We specialize in the production of a wide range of Cold & Hot
              Forged Serrated Flange Nuts.
            </div>
            <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:scale-110 hover:underline-offset-8 cursor-pointer  border-2 p-2 rounded-xl border-orange-600 bg-orange-600 text-white  hover:bg-white ">
              <Link to="/products">Our Products</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full md:w-[50%] justify-evenly gap-2 md:border-l-2 border-black border-b-2 md:border-b-0 pb-2">
          <div className="flex flex-col gap-2 md:gap-10 items-center w-[50%]">
            <span className="font-bold  text-xl underline md:text-2xl ">
              Washer
            </span>
            <div className="font-mono text-sm md:text-xl">
              We have a large selection of washers. We stock a full inventory to
              meet your requirement.
            </div>
            <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:scale-110 hover:underline-offset-8 cursor-pointer  border-2 p-2 rounded-xl border-orange-600 bg-orange-600 text-white  hover:bg-white ">
              <Link to="/products">Our Products</Link>
            </div>
          </div>
          <img
            className="w-[40%] h-[60%] md:h-[80%] rounded-xl  transition-all duration-300"
            src="/washers.png"
            alt="washer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
