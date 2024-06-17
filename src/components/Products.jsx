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
      <div className="bg-[url('/products.jpg')] bg-cover flex justify-center items-center text-6xl  underline underline-offset-8 font-semibold bg-center bg-no-repeat  w-full h-32 text-white ">
        <span className="w-full h-full bg-black flex justify-center items-center bg-opacity-30">
          Our Products
        </span>
      </div>
      <div className="w-[95vw] rounded-xl py-5  md:px-10 h-full bg-blue-100 m-5 border-2 border-black flex ">
        <div className="w-[90%] justify-between  m-auto flex flex-col gap-4 text-lg">
          <div className="md:text-xl text-sm bg-gray-400 text-black font-semibold border-l-orange-600 border-l-8 pl-2">
            Macro Metals emerged as a system partner for Fasteners for varied
            industries based on our unique competence as a manufacturer and a
            trader.
          </div>
          <div className="flex flex-wrap gap-7  justify-center items-center">
            <div className="hover:scale-110 w-[45%] md:w-1/5 h-32 md:h-52 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <a
                href="#section"
                className="flex justify-center items-center flex-col gap-3"
                onClick={() => {
                  setProduct({
                    id: 1,
                    type: "Screw And Bolts",
                    image: "/hex-bolt-screw.jpg",
                    name: "Hex Bolts And Screw",
                    grade:
                      "4.6, 5.6,8.8, 10.9, Stainless Steel A2-70 (SS304), A4-70 (SS316)",
                    sizeRange: "M4-M64",
                    finishing:
                      "PHOSPHATED BLACK, ZINC PLATED, HOT DIP GALVANIZED",
                    desc: "We manufacture Hex Bolts and Full Thread Screws as per ISO Grades 4.6, 5.6, 6.8, 8.8, 10.9 & 12.9. Our Manufacturing Capacity for Headed Products is from M8 X 50 to M100 X 1200 & for Non Headed Products from M8 to M100 & Length up to 3 Meters. Bolts can be provided in various surface finishes like Zinc Trivalent Plating, Hot Dip Galvanized, PTFE and Zinc Flake coatings",
                    materials: "MILD STEEL, ALLOY STEEL, STAINLESS STEEL",
                  });
                }}
              >
                <img src="/standard-screw-bolts.jpg" alt="" />
                <span className="md:text-xl text-sm font-semibold">
                  Screws And Bolts
                </span>
              </a>
            </div>

            <div className="hover:scale-110 w-[45%] md:w-1/5 h-32 md:h-52 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <a
                href="#section"
                onClick={() => {
                  changeProduct({
                    id: 11,
                    image: "/st.jpg",
                    name: "Studs and Threaded Rods",
                    type: "Stud And Threaded Bars",
                    grade:
                      "Mild Steel 4.6, HT 8.8, HT 10.9, Stainless Steel B8, ASTM A193 B7",
                    sizeRange: "M6 - M64",
                    finishing:
                      "PHOSPHATED BLACK, ZINC PLATED, HOT DIP GALVANIZED, GEOMET, PTFE COATING",
                    desc: "We manufacture Fully Threaded Stud with Nut and Washer Assemblies Conforming to ASTM A 193/ASTM A 194 Standard and various other standards. Studs can be manufactured as per customer specifications. All studs can be supplied in various surface finishes Phosphated, Xylan PTFE, Hot Dip Galvanized and Zinc Plated. ",
                    materials: "MILD STEEL, ALLOY STEEL, STAINLESS STEEL",
                  });
                }}
                className="flex justify-center items-center flex-col gap-3"
              >
                <img src="/stud-threaded-bars.jpg" alt="" />
                <span className="md:text-xl text-sm  text-center  font-semibold">
                  Stud & Thread Bar
                </span>
              </a>
            </div>
            <div className="hover:scale-110 w-[45%] md:w-1/5 h-32 md:h-52 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <a
                href="#section"
                onClick={() => {
                  changeProduct({
                    id: 13,
                    image: "/hn.jpg",
                    name: "Hex Nuts",
                    type: "Nuts",
                    grade: "ISO Grade 4, 8, 10, Stainless Steel",
                    sizeRange: "M4-M64",
                    finishing:
                      "PHOSPHATED BLACK, ZINC PLATED, HOT DIP GALVANIZED",
                    desc: "Nuts as per  grades 4, 8, 10, Stainless Steel A2-70, A4-70",
                    materials: "MILD STEEL, ALLOY STEEL, STAINLESS STEEL",
                  });
                }}
                className="flex justify-center items-center flex-col gap-3"
              >
                <img src="/nuts.jpg" alt="" />
                <span className="md:text-xl text-sm text-center font-semibold">
                  Nuts
                </span>
              </a>
            </div>
            <div className="hover:scale-110 w-[45%] md:w-1/5 h-32 md:h-52 transition-all duration-300 flex justify-center items-center flex-col gap-3 border-b-2 border-b-black cursor-pointer hover:text-orange-600 hover:border-b-orange-600 hover:border-2 hover:border-orange-600 hover:rounded-xl p-2">
              <a
                href="#section"
                onClick={() => {
                  changeProduct({
                    id: 16,
                    image: "/pfw.jpg",
                    name: "Plain Flat Washers",
                    type: "Washers",
                    grade: "Mild Steel, Stainless Steel",
                    sizeRange: "M3-M100",
                    finishing:
                      "PHOSPHATED BLACK, ZINC PLATED, HOT DIP GALVANIZED",
                    desc: "Plain washers as per standard and customer specifications",
                    materials: "MILD STEEL, ALLOY STEEL, STAINLESS STEEL",
                  });
                }}
                className="flex justify-center items-center flex-col gap-3"
              >
                <img src="/plain-spring-washer.jpg" alt="" />
                <span className="md:text-xl text-center text-sm font-semibold">
                  Washers
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[95%] md:w-full  flex flex-col md:flex-row justify-center gap-5 py-3"
        id="section"
      >
        <div className="md:w-[20%]  border-black">
          <AccordionMaker product={product} changeProduct={changeProduct} />
        </div>
        <div className="md:w-[70%] ">
          <ProductDescription product={product} />
        </div>
      </div>
    </div>
  );
};

export default Products;
