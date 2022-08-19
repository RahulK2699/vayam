import React from "react";
import event1 from "../../assets/images/event1.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import friend1 from "../../assets/images/friend1.jfif";

const Event = () => {
  return (
    <div className=" flex gap-2 flex-col rounded-3xl w-full">
      <img
        className=" rounded-t-3xl w-[100%] h-40 object-cover"
        src={event1}
        alt="event"
      />
      <div className=" px-3 ">
        <h1 className=" text-white text-xl font-medium text-opacity-80 tracking-wide my-2">
          Yoga for beginners
        </h1>
        <div className=" flex gap-1 items-center text-[11px] mb-3">
          <div className=" relative bottom-[1px]">
            <CalendarTodayIcon
              className="text-white text-opacity-40 "
              fontSize="11px"
            />
          </div>
          <p className=" text-white text-opacity-40">SEP 7</p>
          <div className=" w-1 h-1 rounded-[2px] bg-white bg-opacity-40"></div>
          <p className=" text-white text-opacity-40">10 AM</p>
          <div className=" w-1 h-1 rounded-[2px] bg-white bg-opacity-40"></div>
          <p className=" text-white text-opacity-40">2 hrs</p>
        </div>
        <div className=" flex gap-2 items-center">
          <img
            className=" w-3 h-3 object-cover rounded-[6px] "
            src={friend1}
            alt="khsuhi"
          />
          <p className=" text-[8px] text-white text-opacity-40">
            Khushi and other 76 are attending
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
