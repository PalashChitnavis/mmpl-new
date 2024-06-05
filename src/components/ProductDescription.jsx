/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div>
      <div className="w-[90%] h-[50%] flex justify-center items-center border-2 border-black md:w-[400px]">
        <img src={product.image} alt="" />
      </div>
      <table></table>
    </div>
  );
};

export default ProductDescription;
