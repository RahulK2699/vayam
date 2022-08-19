import React from "react";
const Friend = ({
  profile = "",
  name,
  time,
  streak = "",
  coins = "",
  children,
  className,
}) => {
  return (
    <div
      className={` flex gap-2 bg-bggray bg-opacity-50 pl-3 pr-5 rounded-2xl py-2 w-full cursor-pointer ${className}`}
    >
      <div className={`${profile === "" ? "hidden" : ""}`}>
        <img
          className="w-10 h-10 object-cover rounded-[20px]"
          src={profile}
          alt="friend"
        />
      </div>
      <div
        className={`flex flex-col text-xs ${
          streak === "" || coins === "" ? "hidden" : ""
        } `}
      >
        <p className=" text-white text-lg">
          {name}{" "}
          <span className=" text-white text-opacity-20 text-[10px]">
            {time}
          </span>
        </p>
        <div className=" flex gap-1 items-center text-white text-opacity-40">
          <p>
            <strong>{streak}</strong> streak
          </p>
          <div className=" w-1 h-1 rounded-[2px] bg-white bg-opacity-40"></div>
          <p>
            <strong>{coins}</strong> coins
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Friend;
