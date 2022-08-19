import React from "react";
import Calender from "../components/Calender";
import Fitnessgoal from "../components/Fitnessgoal";
import Header from "../components/Header";
import Info from "../components/info";
import Product from "../components/Product";

const HomePage = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className=" w-full h-screen overflow-visible max-w-3xl">
      <div className=" flex">
        <p className=" text-white text-opacity-50 pl-7 mt-[6px] ">Hi,&nbsp;</p>
        <Header title={"Rahul"} />
      </div>
      <Calender
        data={[
          { day: "29", weekday: "SUN", id: 1 },
          { day: "30", weekday: "MON", id: 2 },
          { day: "01", weekday: "TUE", id: 3 },
          { day: "02", weekday: "WED", id: 4 },
          { day: "03", weekday: "THU", id: 5 },
          { day: "04", weekday: "FRI", id: 6 },
          { day: "05", weekday: "SAT", id: 7 },
        ]}
        onClick={(e) => handleClick()}
      />
      <Info type={"Today"} option={"View All"} />

      <Product exercise={"Strength Training"} tperiod={"7 days challenge"} />
      <Product
        exercise={"High Intensity Cardio"}
        tperiod={"30 days challenge"}
      />
      <Product exercise={"plyometric"} tperiod={"30 days challenge"} />

      <Info type={"Goals"} option={"View All"} />

      <div className=" flex w-full gap-5 overflow-x-scroll ">
        <div>
          {" "}
          <Fitnessgoal />
        </div>
        <div>
          {" "}
          <Fitnessgoal />
        </div>
        <div>
          {" "}
          <Fitnessgoal />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
