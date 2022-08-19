import React from "react";

const Filters = ({ children }) => {
  return (
    <div className=" px-6 text-white py-1 rounded-3xl bg-bggray bg-opacity-60 text-sm">
      {children}
    </div>
  );
};

export default Filters;
