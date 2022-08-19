import React from "react";
import product from "../assets/images/product1.jpg";

const Product = ({ exercise, tperiod }) => {
  return (
    <div className=" flex justify-start bg-bggray rounded-2xl mb-3">
      <div className=" relative">
        <img
          className=" w-20 h-20 rounded-l-2xl object-cover img-shadow"
          src={product}
          alt="product"
        />
        <p className=" absolute text-xs text-white bottom-1 left-5 opacity-90 font-semibold">
          10 mins
        </p>
      </div>
      <div className=" flex flex-col justify-between p-2 px-3">
        <h1 className=" text-purple text-lg">{exercise}</h1>
        <p className=" text-xs text-white text-opacity-30">{tperiod}</p>
      </div>
    </div>
  );
};

export default Product;
