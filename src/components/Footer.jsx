import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center flex-wrap items-center h-12 bg-blue-950 text-white md:gap-2">
      <div>
        Copyright © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
        Macro Metals Pvt Ltd
      </div>{" "}
      <div> Design and Developed by Palash Chitnavis</div>
    </div>
  );
};

export default Footer;
