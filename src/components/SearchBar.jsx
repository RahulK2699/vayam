import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({ placeholder = "", className }) => {
  return (
    <div className=" relative">
      <div className="">
        <input
          type="text"
          className={` outline-none w-full bg-bggray bg-opacity-60 p-2 pl-12 rounded-xl text-white text-opacity-50 placeholder:text-white placeholder:text-opacity-50 ${className}`}
          placeholder={placeholder}
        />
      </div>
      <SearchOutlinedIcon className=" text-white absolute top-2 left-4" />
    </div>
  );
};

export default SearchBar;
