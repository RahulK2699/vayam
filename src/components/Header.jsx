import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Header = ({ title }) => {
  return (
    <div className="w-full flex justify-between max-w-3xl bg-bgblack items-center mb-10">
      <p className=" text-white font-semibold">{title}</p>
      <div className=" flex gap-3 items-center">
        <NotificationsIcon className=" text-white border-none " />
        <div className=" flex text-white rounded-lg bg-bggray gap-3 p-2">
          {" "}
          <div className=" w-5 h-5 rounded-[10px] border-[7px] border-white"></div>
          <p className=" text-sm">245</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
