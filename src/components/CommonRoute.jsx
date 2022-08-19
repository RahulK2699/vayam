import React from "react";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";

const CommonRoute = ({ children }) => {
  return (
    <div className=" max-w-3xl h-screen bg-bgblack relative z-0">
      <div className="bg-bgblack px-5">
        <div className="text-white max-h-[96vh] overflow-y-scroll pt-6">
          {children}
        </div>
      </div>
      <div className="flex w-full py-1 px-5 justify-between absolute bg-bgblack  bottom-0  z-10 ">
        <Link
          to="/"
          className=" flex flex-col items-center text-white cursor-pointer"
        >
          <HomeOutlinedIcon className=" text-white text-opacity-50" />
          <p className=" text-xs text-white text-opacity-50">Home</p>
        </Link>
        <Link
          to="/discover"
          className=" flex flex-col items-center text-white cursor-pointer"
        >
          <SearchOutlinedIcon className=" text-white text-opacity-50" />
          <p className=" text-xs text-white text-opacity-50">Home</p>
        </Link>
        <Link
          to="/spaces"
          className=" flex flex-col items-center text-white cursor-pointer"
        >
          <SupervisorAccountIcon className=" text-white text-opacity-50" />
          <p className=" text-xs text-white text-opacity-50">Home</p>
        </Link>
        <Link
          to="/consult"
          className=" flex flex-col items-center text-white cursor-pointer"
        >
          <ForumOutlinedIcon className=" text-white text-opacity-50" />
          <p className=" text-xs text-white text-opacity-50">Home</p>
        </Link>

        <Link
          to="/routine"
          className=" flex flex-col items-center text-white cursor-pointer"
        >
          <FitnessCenterOutlinedIcon className=" text-white text-opacity-50" />
          <p className=" text-xs text-white text-opacity-50">Home</p>
        </Link>
      </div>
    </div>
  );
};

export default CommonRoute;
