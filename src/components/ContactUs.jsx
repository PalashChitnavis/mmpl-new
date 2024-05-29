import React from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center bg-slate-300 text-sm font-semibold">
      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="tel:+919850098535"
      >
        <FaPhoneAlt />
        <span>+91 9850098535</span>
      </a>
      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="mailto:tusharchitnavis@gmail.com"
      >
        <IoMdMail />
        <span>tusharchitnavis@gmail.com</span>
      </a>

      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="#"
      >
        <FaClock />
        <span>Mon - Sun : 9:00 AM - 6:00 PM / Closed on Friday</span>
      </a>
      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="#"
      >
        <FaLocationDot />
        <span>Ambernath, Mumbai, MH</span>
      </a>
    </div>
  );
};

export default ContactUs;
