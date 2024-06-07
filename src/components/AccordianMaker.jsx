/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

import { data } from "../data";

export default function AccordionMaker({ product, changeProduct }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    console.log(active);
  }, [active]);
  function toggle() {
    setActive(!active);
  }

  return (
    <div className="border-2 border-black w-full">
      <div
        className="flex justify-center items-center text-lg bg-orange-500 text-white p-2 w-full"
        onClick={toggle}
      >
        <div className="w-full flex justify-center items-center">
          All Fasterners
        </div>
        <div className="flex text-white h-full md:hidden justify-end items-center">
          <IoMenu
            size={30}
            className={`${
              active ? "opacity-0" : "opacity-100"
            } absolute transition-all ease-in-out duration-300`}
          />
          <IoCloseSharp
            size={30}
            className={`${
              active ? "opacity-100" : "opacity-0"
            } absolute transition-all ease-in-out duration-300`}
          />
        </div>
      </div>
      <div
        className={`${
          active
            ? "h-[200px] md:h-full md:overflow-auto overflow-y-scroll"
            : "h-[0px] md:h-full md:overflow-auto overflow-y-scroll"
        }`}
      >
        <div>
          <div className="flex justify-center items-center p-2 font-semibold md:text-xl border-b-2 border-black bg-orange-100">
            Screws And Bolts
          </div>
          {data.map((item) => {
            if (item.type === "Screw And Bolts") {
              return (
                <div
                  className={`${
                    product.id === item.id
                      ? "bg-orange-500 text-white"
                      : "bg-sky-100"
                  } p-1 flex gap-2 justify-center items-center border-b-2 cursor-pointer hover:bg-orange-500 hover:text-white border-black `}
                  onClick={() => changeProduct(item)}
                >
                  <a href="#main">
                    {product.id === item.id ? <span>◉</span> : <></>}
                    {item.name}
                  </a>
                </div>
              );
            }
          })}
        </div>
        <div>
          <div className="flex justify-center items-center p-2 font-semibold md:text-xl border-b-2 border-black bg-orange-100">
            Stud And Threaded Bars
          </div>
          {data.map((item) => {
            if (item.type === "Stud And Threaded Bars") {
              return (
                <div
                  className={`${
                    product.id === item.id
                      ? "bg-orange-500 text-white"
                      : "bg-sky-100"
                  } p-1 flex gap-2 justify-center items-center border-b-2 cursor-pointer hover:bg-orange-500 hover:text-white border-black `}
                  onClick={() => changeProduct(item)}
                >
                  <a href="#main">
                    {product.id === item.id ? <span>◉</span> : <></>}
                    {item.name}
                  </a>
                </div>
              );
            }
          })}
        </div>
        <div>
          <div className="flex justify-center items-center p-2 font-semibold md:text-xl border-b-2 border-black bg-orange-100">
            Nuts
          </div>
          {data.map((item) => {
            if (item.type === "Nuts") {
              return (
                <div
                  className={`${
                    product.id === item.id
                      ? "bg-orange-500 text-white"
                      : "bg-sky-100"
                  } p-1 flex gap-2 justify-center items-center border-b-2 cursor-pointer hover:bg-orange-500 hover:text-white border-black `}
                  onClick={() => changeProduct(item)}
                >
                  <a href="#main">
                    {product.id === item.id ? <span>◉</span> : <></>}
                    {item.name}
                  </a>
                </div>
              );
            }
          })}
        </div>
        <div>
          <div className="flex justify-center items-center p-2 font-semibold md:text-xl border-b-2 border-black bg-orange-100">
            Washers
          </div>
          {data.map((item) => {
            if (item.type === "Washers") {
              return (
                <div
                  className={`${
                    product.id === item.id
                      ? "bg-orange-500 text-white"
                      : "bg-sky-100"
                  } p-1 flex gap-2 justify-center items-center border-b-2 cursor-pointer hover:bg-orange-500 hover:text-white border-black `}
                  onClick={() => changeProduct(item)}
                >
                  <a href="#main">
                    {product.id === item.id ? <span>◉</span> : <></>}
                    {item.name}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
