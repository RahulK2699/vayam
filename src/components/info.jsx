import React from "react";

const Info = ({ type, option }) => {
  return (
    <div className=" flex justify-between px-3 my-5">
      <p className=" text-white text-opacity-70">{type}</p>
      <p className=" text-white text-sm text-opacity-30">{option}</p>
    </div>
  );
};

export default Info;
