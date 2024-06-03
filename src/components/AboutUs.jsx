import React from "react";
import Marquee from "react-fast-marquee";
const AboutUs = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[url('/public/about-banner.jpg')] bg-cover flex justify-center items-center text-6xl text-white underline underline-offset-8 font-semibold bg-center bg-no-repeat  w-full h-60">
        About Us
      </div>
      <div className="w-[95vw] rounded-xl md:py-5 md:px-10 h-full bg-blue-100 m-5 border-2 border-black flex flex-col md:flex-row">
        <div className="w-[90%] justify-between  m-auto md:m-0 md:w-1/2 flex flex-col gap-4 text-lg">
          <div className="text-4xl underline underline-offset-8 font-semibold">
            About Us
          </div>
          <div className="text-lg">
            Macro Metals was established in the year 1998 by qualified
            technocrats and has been active in manufacture & supply of various
            grade & type of fasteners to
          </div>
          <div className="text-lg pl-5">
            <ul className="list-disc">
              <li>Auto Industry</li>
              <li>Electronics & Electrical Industry</li>
              <li>White goods</li>
              <li>Construction & General Hardware Industry</li>
            </ul>
          </div>
          <div className="text-lg">
            Our extensive range of quality products are available at very
            competitive levels of pricing.
          </div>
          <div>
            To compliment this , we have assembled a motivated team of qualified
            people with product knowledge.
          </div>
          <div>
            Furthermore every person involved in our operation is directly
            responsible for achieving customer satisfaction through the timely
            supply of quality products at competitive pricing in accordance with
            customer requirement and specifications with the use of an effective
            management system in compliance with{" "}
            <span className="font-bold">TUV NORD ISO 9001- 2015.</span>
          </div>
          <div>
            We wish to grow with the continuous trust and support of our
            customers.
          </div>
          <div className="w-full flex justify-end  text-2xl">
            - Tushar Chitnavis
          </div>
        </div>
        <div className="w-[95%] flex justify-center items-center m-auto p-3 md:w-1/2">
          <img src="/public/about-img.jpg" alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
