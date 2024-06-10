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
      <div className="w-1/3 h-full flex justify-start items-center pl-2">
        <Link className="h-[90%]" to="/">
          {" "}
          <img className="h-full" src="/logo-placeholder.png" alt="" />
        </Link>
      </div>
      <div className="w-11/12 h-full justify-evenly items-center text-xl text-white hidden md:flex ">
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
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1WR8724r2lJHg3iW6cHR3DNwWk3fPdkZq/view?usp=sharing"
          >
            Company Presentation
          </a>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <a
            href="https://drive.google.com/file/d/1TFZeVjlVDzOTm45xzelcTTAMlsx4p4sn/view?usp=sharing"
            target="_blank"
          >
            Quality Policy
          </a>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <a
            href="https://drive.google.com/file/d/1A1bFB29CCdM1yoGmEF-hVa4ihX7putJu/view?usp=sharing"
            target="_blank"
          >
            Vision and Mission
          </a>
        </div>
        <div className="hover:text-orange-600 hover:underline transition-all duration-300 hover:pb-3 hover:underline-offset-8 cursor-pointer">
          <a
            href="https://drive.google.com/file/d/12d_Pcdj5RdVQDPz1YUQLxFVo_nn_aJIK/view?usp=sharing"
            target="_blank"
          >
            ISO Certificate
          </a>
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

        <div className="w-full h-12">
          <img src="/logo-placeholder.png" alt="" />
        </div>

        <div className="p-5 flex flex-col justify-center items-center w-full gap-5 h-full text-xl z-50">
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
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1WR8724r2lJHg3iW6cHR3DNwWk3fPdkZq/view?usp=sharing"
            >
              Company Presentation
            </a>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            <a
              href="https://drive.google.com/file/d/1TFZeVjlVDzOTm45xzelcTTAMlsx4p4sn/view?usp=sharing"
              target="_blank"
            >
              Quality Policy
            </a>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 transition-all duration-500 hover:pb-3 border-b-2 cursor-pointer"
          >
            <a
              href="https://drive.google.com/file/d/1A1bFB29CCdM1yoGmEF-hVa4ihX7putJu/view?usp=sharing"
              target="_blank"
            >
              Vision and Mission
            </a>
          </div>
          <div
            onClick={toggleClick}
            className="hover:text-orange-600 border-b-2 transition-all duration-500 hover:pb-3  cursor-pointer"
          >
            <a
              href="https://drive.google.com/file/d/12d_Pcdj5RdVQDPz1YUQLxFVo_nn_aJIK/view?usp=sharing"
              target="_blank"
            >
              ISO Certificate
            </a>
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
