import React from "react";
import Friend from "../components/Spaces/Friend";
import friend1 from "../assets/images/friend1.jfif";
import friend2 from "../assets/images/friend2.jfif";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Event from "../components/Spaces/Event";

const Spaces = () => {
  return (
    <div>
      <Header title={"Spaces"} />

      <div className=" mb-7">
        {" "}
        <SearchBar placeholder="Search" />
      </div>
      <h1 className=" text-white text-opacity-60 text-xl font-semibold mb-3">
        Exercise with friends
      </h1>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <Friend
          profile={friend2}
          name={"Abhishek"}
          time={"30m"}
          streak={12}
          coins={165}
        />
        <Friend
          profile={friend2}
          name={"Lakshya"}
          time={"2hrs"}
          streak={34}
          coins={1765}
        />
        <Friend
          profile={friend1}
          name={"Khushi"}
          time={"8hrs"}
          streak={15}
          coins={80}
        />
        <Friend
          profile={friend1}
          name={"Saloni"}
          time={"2hrs"}
          streak={0}
          coins={2}
        />
        <Friend
          profile={friend2}
          name={"Kartik"}
          time={"1d"}
          streak={7}
          coins={245}
        />
        <Friend
          className={" text-white  items-center justify-center font-medium"}
        >
          <span className=" text-3xl mr-3 font-medium">+</span> Add Friend
        </Friend>
      </div>
      <h1 className=" text-white text-opacity-60 text-lg font-semibold mb-3">
        Ex Events Today
      </h1>
      <Event />
    </div>
  );
};

export default Spaces;
