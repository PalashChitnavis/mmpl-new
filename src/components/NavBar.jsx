import React, { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
const NavBar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  function toggleClick() {
    setSideMenu(!sideMenu);
  }

  return (
    <div className="w-full h-full bg-blue-950 flex sticky top-0 z-50">
      <div className="w-1/3 h-full flex justify-start items-center pl-2">
        <img className="h-[90%]" src="/public/logo-placeholder.png" alt="" />
      </div>
      <div className="w-3/4 h-full justify-evenly items-center text-xl text-white hidden md:flex ">
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          Home
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          About Us
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          Our Products
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          Company Presentation
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          Brochure
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          ISO Certification
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          Contact Us
        </div>
      </div>
      <div className="flex w-3/4 pr-3 text-white h-full justify-end items-center md:hidden">
        <IoCloseSharp
          size={42}
          onClick={toggleClick}
          className={`${
            sideMenu ? "opacity-100" : "opacity-0"
          } transition-all duration-500 ease-in-out absolute`}
        />
        <IoMenu
          size={42}
          onClick={toggleClick}
          className={`${
            sideMenu ? "opacity-0" : "opacity-100"
          } transition-all duration-500 ease-in-out absolute`}
        />
      </div>
      <div
        className={`top-[30vh] rounded-xl right-0 w-64 bg-blue-950 border-white border-2  text-white fixed  ease-in-out duration-300 z-40 ${
          sideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col justify-center items-center w-full gap-5 h-full text-xl">
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3  cursor-pointer border-b-2"
          >
            Home
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3 border-b-2  cursor-pointer"
          >
            About Us
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2  cursor-pointer"
          >
            Our Products
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            Company Presentation
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            Brochure
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 border-b-2 transition-all duration-500 hover:pb-3  cursor-pointer"
          >
            ISO Certification
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 border-b-2 transition-all duration-500 hover:pb-3  cursor-pointer"
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
