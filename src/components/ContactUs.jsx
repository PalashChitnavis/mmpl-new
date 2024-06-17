import React from "react";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-evenly items-center bg-slate-300 text-sm font-semibold">
      <div className="flex justify-center items-center gap-2">
        <FaPhoneAlt />
        <a
          className=" hover:text-orange-600"
          href="tel:+918805603500"
          target="_blank"
        >
          +91 8805603500
        </a>
        <span>/</span>
        <a
          className=" hover:text-orange-600"
          href="tel:+918805613500"
          target="_blank"
        >
          +91 8805613500
        </a>
      </div>
      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="mailto:info@macrometals.com"
        target="_blank"
      >
        <IoMdMail />
        <span>info@macrometals.com</span>
      </a>

      <a
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        href="#"
      >
        <FaClock />
        <span>Mon - Sun : 9:00 AM - 6:00 PM / Closed on Friday</span>
      </a>
      <Link
        className="flex justify-center items-center gap-2 hover:text-orange-600"
        to={"/contact-us"}
      >
        <FaLocationDot />
        <span>Ambernath, Maharashtra, 421506</span>
      </Link>
    </div>
  );
};

export default ContactUs;
