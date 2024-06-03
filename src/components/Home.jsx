/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Counter = ({ icon: Icon, target, label }) => {
  const [count, setCount] = useState(target);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let incrementTime = end / 1000;

      const timer = setInterval(() => {
        start = start + 1;
        setCount((prev) => {
          if (prev >= end) {
            clearInterval(timer);
            return end;
          }
          return start;
        });
      }, incrementTime);
    }
  }, [inView, target]);

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center gap-1 md:gap-5">
        <Icon className="size-8 md:size-20" />
        <span className="text-lg md:text-4xl">{count} + </span>
      </div>
      <span className="w-full flex justify-center items-center font-bold text-xl">
        {label}
      </span>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="w-full px-5 bg-rose-200">
        <span className="text-xl md:text-4xl">Welcome to</span> <br />
        <span className="text-3xl md:text-6xl font-bold">Macro Metals</span>
        <br />
        <span className="text-xs md:text-lg flex w-40 md:w-64">
          Thank you for visiting Macro Metals . Our company was established in
          the year 1998 by qualified technocrats and has been active in
          manufacture & supply of various grade & type of fasteners.
        </span>
      </div>
      <div className="w-full bg-slate-300">
        <div className="w-full flex justify-center items-center py-3 text-xl md:text-2xl font-bold">
          Let the numbers speak for us :
        </div>
        <div className="flex justify-evenly pb-2">
          <Counter icon={FaHandshake} target={200} label="Clients" />
          <div className="border-2 border-solid mb-3"></div>
          <Counter icon={FaUsers} target={50} label="Employees" />
          <div className="border-2 border-solid mb-3"></div>
          <Counter icon={FaGlobe} target={500} label="SKUs" />
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
              Our Products
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
              Our Products
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
              Our Products
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
              Our Products
            </div>
          </div>
          <img
            className="w-[40%] h-[60%] md:h-[80%] rounded-xl  transition-all duration-300"
            src="/washers.png"
            alt="washer"
          />
        </div>
      </div>
      <div>Company</div>
    </div>
  );
};

export default Home;
