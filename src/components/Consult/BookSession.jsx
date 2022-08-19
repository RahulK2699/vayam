import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BookSession = ({ profile, name, ttype, exp, master_in, price }) => {
  return (
    <div className=" rounded-xl ">
      <div className=" flex gap-2 bg-bggray bg-opacity-40 rounded-t-xl relative">
        <img
          className=" w-24 h-24 object-cover rounded-tl-xl"
          src={profile}
          alt="profile"
        />
        <div className=" flex flex-col justify-center gap-2">
          <h1 className=" text-white text-lg text-opacity-80">{name}</h1>
          <div className="text-white text-[8px] text-opacity-40 ">
            <p>{ttype}</p>
            <p>{exp}</p>
          </div>
        </div>
        <div
          className={`absolute -top-[10px] right-10 px-3 py-[2px] bg-purple rounded-md font-extrabold text-bgblack text-[10px] ${
            name === "Manish Saxena"
              ? "flex justify-center items-center"
              : "hidden"
          }`}
        >
          Recommended for you
        </div>
      </div>
      <div className=" bg-bggray bg-opacity-60 mb-2 rounded-b-xl">
        <div className=" flex justify-between px-8 pt-3">
          <div className=" flex gap-1 items-center ">
            <StarBorderIcon className=" text-white" fontSize="small" />
            <p className=" text-white text-opacity-70 text-xs">{master_in}</p>
          </div>
          <p className=" text-white ">
            {" "}
            <strong>Rs.{price}</strong>/Session
          </p>
        </div>
        <div className=" p-4">
          <button className="  w-full text-white font-semibold bg-bggray bg-opacity-90 rounded-xl py-2">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
