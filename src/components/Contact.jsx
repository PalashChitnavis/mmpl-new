/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const Contact = () => {
  const form = useRef();
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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[url('/about-img.jpg')] bg-cover flex justify-center items-center text-6xl text-white underline underline-offset-8 font-semibold bg-center bg-no-repeat  w-full h-60">
        Contact Us
      </div>
      <div className="w-[95vw]  rounded-xl md:py-5 md:px-10 bg-blue-100 m-5 border-2 border-black flex flex-col ">
        <div className="w-[90%] h-[10%] justify-between  m-auto md:m-0 flex flex-col gap-4 text-lg">
          <div className="text-4xl">
            <span className="text-6xl text-blue-800">Call Us</span> <br />{" "}
            <span className="font-bold">or fill the form</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center gap-3 items-center">
          <table className="w-[90%] m-auto md:w-[40%]">
            <tr className="border-b-2 border-gray-400 w-full ">
              <td>
                <IoCallOutline className="bg-orange-600 border-2 border-white text-white text-4xl p-1" />
              </td>
              <td>
                <div className="flex flex-col justify-center items-center">
                  <a
                    href="tel:+919850098535"
                    className="hover:text-orange-600 font-semibold text-xl"
                  >
                    +91 9850098535
                  </a>
                  <a
                    href="tel:+919850098535"
                    className="hover:text-orange-600 font-semibold text-xl"
                  >
                    +91 8422955986
                  </a>
                  <span className="">Don&apos;t hesitate to contact us! </span>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-400 w-full ">
              <td>
                <FaRegClock className="bg-orange-600 border-2 border-white text-white text-4xl p-1" />
              </td>
              <td>
                <div className="flex flex-col justify-center items-center">
                  <span className="text-xl">Working Time</span>
                  <span className="font-semibold text-lg">
                    Mon - Sun : 9 AM - 6 PM
                  </span>
                  <span className="font-semibold text-lg">
                    Closed on Friday
                  </span>
                </div>
              </td>
            </tr>
            <tr className="border-b-2 border-gray-400 w-full ">
              <td className="">
                <IoLocationOutline className="bg-orange-600 border-2 border-white text-white text-4xl p-1" />
              </td>
              <td className="">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold text-xl">
                    Company Location
                  </span>
                  <p className="text-center">
                    {" "}
                    Plot No D-17, Anand Nagar, Additional M.I.D.C, Ambernath,
                    Maharashtra 421506
                  </p>
                </div>
              </td>
            </tr>
          </table>
          <form
            action=""
            className="flex w-[95%] h-[70%] md:w-[50%] gap-3 flex-col  items-center"
            ref={form}
            onSubmit={sendEmail}
          >
            <label className="w-full flex flex-col items-center">
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
            <label className="w-full  flex flex-col items-center">
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
            <label className="w-full  flex flex-col items-center">
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
            <label className="w-full  flex flex-col items-center">
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
            <div className="w-full flex justify-center items-center ">
              <button
                type="submit"
                value="Send"
                className="py-2 text-xl w-[80%] bg-green-600 rounded-xl text-white hover:bg-orange-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="w-full mt-5 mb-5 rounded-xl flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.324117904112!2d73.18945477498022!3d19.181040782045276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7935d1d07884d%3A0x9422637620cf7413!2sMacro%20Metals%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718417795123!5m2!1sen!2sin"
            allowfullscreen=""
            className="w-[85vw] h-[400px] "
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
