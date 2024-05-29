import React from "react";
import { FaHandshake, FaUsers, FaGlobe } from "react-icons/fa";
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <div className="w-full px-5">
        Welcome to <br />
        <span className="text-xl font-bold">Macro Metals</span>
      </div>
      <div className="w-full bg-slate-300">
        <div className="w-full flex justify-center items-center py-3 text-xl md:text-2xl font-bold">
          Let the numbers speak for us :
        </div>
        <div className="flex justify-evenly pb-2">
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaHandshake className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">1000 + </span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              Clients
            </span>
          </div>
          <div className="border-2 border-solid mb-3"></div>
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaUsers className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">1000 + </span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              Employees
            </span>
          </div>
          <div className="border-2 border-solid mb-3"></div>
          <div>
            <div className="flex justify-center items-center gap-1 md:gap-5">
              <FaGlobe className="size-8 md:size-20" />
              <span className="text-lg md:text-4xl">1000 + </span>
            </div>
            <span className="w-full flex justify-center items-center font-bold text-xl">
              SKUs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
