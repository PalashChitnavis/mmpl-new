/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Enquiry = () => {
  const [active, setActive] = useState(false);
  const form = useRef();
  function toggle() {
    setActive(!active);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm("service_y24q6g6", "template_brpbllp", form.current, {
        publicKey: "jLCw50KfCUvavTnTu",
      })
      .then(
        () => {
          toast.success("Enquiry submitted, we will contact you soon");
        },
        (error) => {
          toast.error("Internal Sever Error");
        }
      );
  };
  return (
    <div className="z-100 w-full h-full cursor-pointer ">
      <div
        className=" w-full h-full flex justify-center items-center rounded-full border-2 border-white"
        onClick={toggle}
      >
        <img src="/enquiry.png" className="" />
      </div>
      <div
        className={`fixed right-0 top-[10%] w-[80%] md:w-[30%] h-4/5  ${
          active ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-500 transition-all`}
      >
        <div className="w-full flex flex-col h-full bg-slate-300 border-2 border-black rounded-tl-xl rounded-bl-xl ">
          <div className="w-full h-12 ">
            <IoCloseSharp
              onClick={toggle}
              className="text-black cursor-pointer text-[40px] absolute left-0 md:text-[50px]"
            />
            <div className="font-semibold w-full flex justify-center text-3xl underline underline-offset-8">
              Quick Enquiry
            </div>
          </div>
          <form
            action=""
            className="flex w-full flex-col pt-2 gap-3 items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="w-full gap-2 flex flex-col items-center">
              <div className="w-[80%] text-xl ">
                Name <span className="text-red-500">*</span>
                <br />
              </div>
              <input
                className="w-[80%] h-8 rounded-lg indent-3"
                type="text"
                placeholder="Enter your full name"
                required
                name="name"
              />
            </label>
            <label className="w-full gap-2 flex flex-col items-center">
              <div className="w-[80%] text-xl ">
                Email <span className="text-red-500">*</span>
                <br />
              </div>
              <input
                className="w-[80%] h-8 rounded-lg indent-3"
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
            </label>
            <label className="w-full gap-2 flex flex-col items-center">
              <div className="w-[80%] text-xl ">
                Phone Number <span className="text-red-500">*</span>
                <br />
              </div>
              <input
                className="w-[80%] h-8 rounded-lg indent-3"
                type="tel"
                placeholder="Enter your phone"
                required
                name="phone"
              />
            </label>
            <label className="w-full gap-2 flex flex-col items-center">
              <div className="w-[80%] text-xl ">
                Message <span className="text-red-500">*</span>
                <br />
              </div>
              <textarea
                className="w-[80%] h-16 rounded-lg px-3 py-2 resize-none"
                placeholder="Enter your message"
                required
                name="message"
              />
            </label>
            <div className="w-full flex justify-center items-center py-2 ">
              <button
                type="submit"
                value="Send"
                className="py-2 text-xl w-[80%] bg-green-600 rounded-xl text-white hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="w-full py-2 flex flex-col gap-3 justify-center items-center">
            <div className="w-[80%] flex justify-start text-xl font-semibold underline underline-offset-4">
              Contact Information
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <a
                className="flex w-[80%] justify-start items-center gap-2 "
                href="tel:+919850098535"
              >
                <FaPhoneAlt className="text-orange-600" />
                <span className="md:text-xl">+91 9850098535</span>
              </a>
              <a
                className="flex w-[80%] justify-start items-center gap-2 "
                href="mailto:tusharchitnavis@gmail.com"
              >
                <IoMdMail className="text-orange-600" />
                <span className="md:text-xl">tusharchitnavis@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
