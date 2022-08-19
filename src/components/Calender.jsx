import React from "react";

const Calender = ({ data, onClick }) => {
  return (
    <div className=" flex  bg-bggray w-full justify-between rounded-xl ">
      {data.map((e, index) => (
        <div
          onClick={onClick}
          key={e?.id}
          className=" flex p-3 flex-col text-white text-opacity-50 font-semibold w-fit items-center rounded-xl"
        >
          <p className=" text-lg">{e?.day}</p>
          <p className=" text-xs">{e?.weekday}</p>
        </div>
      ))}
    </div>
  );
};

export default Calender;
