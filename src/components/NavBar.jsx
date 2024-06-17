import React, { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  function toggleClick() {
    setSideMenu(!sideMenu);
  }

  return (
    <div className="w-full h-full bg-blue-950 flex sticky top-0 z-50">
      <div className="w-1/2 md:w-1/6 h-full flex justify-start items-center pl-3">
        <Link className="h-[90%] bg-white rounded-full" to="/">
          {" "}
          <img className="h-full" src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="w-full justify-evenly items-center text-xl text-white hidden md:flex ">
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/">Home</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/products">Our Products</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/presentation">Company Presentation</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/quality">Quality Policy</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/vision">Vision and Mission</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/iso">ISO Certificate</Link>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <Link to="/contact-us">Contact Us</Link>
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
        className={`top-0  left-0 w-64 h-[100vh] bg-blue-950  text-white fixed  ease-in-out duration-300 z-40 ${
          sideMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full h-12 flex justify-end items-center">
          {" "}
          <IoCloseSharp
            onClick={toggleClick}
            className={`size-16 pt-2 ${
              sideMenu ? "opacity-100" : "opacity-0"
            } transition-all duration-500 ease-in-out absolute`}
          />
        </div>

        <div className="w-full  flex justify-start items-center ">
          <Link
            className="h-[90%] w-full flex justify-center items-center rounded-full"
            to="/"
          >
            {" "}
            <img
              className="h-full bg-white rounded-full"
              src="/logo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex flex-col justify-start py-7 gap-5 items-center w-full  h-full text-xl z-50">
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3  cursor-pointer border-b-2"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3 border-b-2  cursor-pointer"
          >
            <Link to="/about-us">About Us</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2  cursor-pointer"
          >
            <Link to="/products">Our Products</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600  transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            <Link to="/presentation">Company Presentation</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            <Link to="/quality">Quality Policy</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            <Link to="/vision">Vision and Mission</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 border-b-2 transition-all duration-500 hover:pb-3  cursor-pointer"
          >
            <Link to="/iso">ISO Certificate</Link>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 border-b-2 transition-all duration-500 hover:pb-3  cursor-pointer"
          >
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div
          className={`fixed top-0 w-[100vh] left-64 h-[100vh] opacity-50 bg-gray-700  ${
            sideMenu ? "block" : "hidden"
          }`}
          onClick={toggleClick}
          onScroll={toggleClick}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
