import React, { useState, useEffect } from "react";
import { data } from "../data";
import AccordionMaker from "./AccordianMaker";
import ProductDescription from "./ProductDescription";
const Products = () => {
  const [product, setProduct] = useState({
    id: 1,
    type: "Screw And Bolts",
    image: "/hex-bolt-screw.jpg",
    name: "Hex Bolts And Screw",
    grade: "4.6, 5.6,8.8, 10.9, Stainless Steel A2-70 (SS304), A4-70 (SS316)",
    sizeRange: "M4-M64",
    finishing: "PHOSPHATED BLACK, ZINC PLATED, HOT DIP GALVANIZED",
    desc: "We manufacture Hex Bolts and Full Thread Screws as per ISO Grades 4.6, 5.6, 6.8, 8.8, 10.9 & 12.9. Our Manufacturing Capacity for Headed Products is from M8 X 50 to M100 X 1200 & for Non Headed Products from M8 to M100 & Length up to 3 Meters. Bolts can be provided in various surface finishes like Zinc Trivalent Plating, Hot Dip Galvanized, PTFE and Zinc Flake coatings",
    materials: "MILD STEEL, ALLOY STEEL, STAINLESS STEEL",
  });
  const changeProduct = (item) => {
    setProduct(item);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="bg-[url('/products.jpg')] bg-cover flex justify-center items-center text-6xl text-white underline underline-offset-8 font-semibold bg-center bg-no-repeat  w-full h-60">
        Our Products
      </div>
      <div className="w-[95vw] rounded-xl py-5  md:px-10 h-full bg-blue-100 m-5 border-2 border-black flex ">
        <div className="w-[90%] justify-between  m-auto flex flex-col gap-4 text-lg">
          <div className="text-xl bg-gray-400 text-black font-semibold border-l-orange-600 border-l-8 pl-2">
            Macro Metals emerged as a system partner for Fasteners for varied
            industries based on our unique competence as a manufacturer and a
            trader.
          </div>
          <div className="flex flex-wrap gap-7 justify-center items-center">
            <div className="hover:scale-110  transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <img src="/standard-screw-bolts.jpg" alt="" />
              <span className="text-xl font-semibold">Screws And Bolts</span>
            </div>

            <div className="hover:scale-110 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <img src="/stud-threaded-bars.jpg" alt="" />
              <span className="text-xl font-semibold">
                Stud And Threaded Bars
              </span>
            </div>
            <div className="hover:scale-110 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <img src="/nuts.jpg" alt="" />
              <span className="text-xl font-semibold">Nuts</span>
            </div>
            <div className="hover:scale-110 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <img src="/plain-spring-washer.jpg" alt="" />
              <span className="text-xl font-semibold">Washers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] flex flex-col md:flex-row-reverse justify-center items-center md:justify-between">
        <div className="md:w-[70%]  border-black">
          <ProductDescription product={product} />
        </div>
        <div className="md:w-[30%]  border-black">
          <AccordionMaker changeProduct={changeProduct} />
        </div>
      </div>
    </div>
  );
};

export default Products;
