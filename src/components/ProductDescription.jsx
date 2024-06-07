/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center gap-3">
      <div className="border-2 border-black w-full h-full md:w-[50%] flex justify-center items-center aspect-square">
        <img src={product.image} alt="" className="max-w-[300px] " />
      </div>
      <table
        id="main"
        className="border-2 text-center border-black w-full md:w-[50%] h-[526px]"
      >
        <tr>
          <td className="border-2 font-semibold  border-black text-center bg-green-100">
            Type
          </td>
          <td className="border-2 border-black  bg-red-100">{product.type}</td>
        </tr>
        <tr>
          <td className="border-2 border-black font-semibold text-center bg-green-100">
            Name
          </td>
          <td className="border-2 border-black bg-red-100">{product.name}</td>
        </tr>
        <tr>
          <td className="border-2 border-black font-semibold text-center bg-green-100">
            Grade
          </td>
          <td className="border-2 border-black bg-red-100">{product.grade}</td>
        </tr>
        <tr>
          <td className="border-2 border-black font-semibold text-center bg-green-100">
            Sizes
          </td>
          <td className="border-2 border-black bg-red-100">
            {product.sizeRange}
          </td>
        </tr>
        <tr>
          <td className="border-2 border-black font-semibold text-center bg-green-100">
            Description
          </td>
          <td className="border-2 border-black bg-red-100 max-w-[45ch]">
            {product.desc}
          </td>
        </tr>
        <tr>
          <td className="border-2 border-black font-semibold text-center bg-green-100">
            Materials
          </td>
          <td className="border-2 border-black bg-red-100">
            {product.materials}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProductDescription;
