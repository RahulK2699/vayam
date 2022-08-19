import React from "react";
import Header from "../components/Header";
import Filters from "../components/Discover/Filters";
import Info from "../components/info";
import Frame from "../components/Discover/Frame";
import discover1 from "../assets/images/discover1.jpg";
import discover2 from "../assets/images/discover2.avif";
import discover3 from "../assets/images/discover3.jpg";
import discover4 from "../assets/images/discover4.jpg";
import SearchBar from "../components/SearchBar";

const Discover = () => {
  return (
    <div>
      <Header title={"Discover"} />

      <SearchBar placeholder="Articles,Exercises,Diets" />

      <div className=" flex justify-center gap-3 mt-7">
        <Filters>Fiber</Filters>
        <Filters>Planks</Filters>
        <Filters>HIIT</Filters>
        <Filters>Strength</Filters>
      </div>
      <div className=" flex justify-center gap-3 mt-3 my-7">
        <Filters>Plyometrics</Filters>
        <Filters>Electrolytes</Filters>
        <Filters>Protein</Filters>
      </div>
      <Info type={"Exercises"} option={"View More"} />
      <div className="flex gap-3 w-full">
        <Frame
          title={"5 Exercises for Back pain Relief"}
          img_link={discover2}
        />
        <Frame title={"11 Tips for Exercising Outdoors"} img_link={discover4} />
      </div>
      <div className="flex gap-3 w-full mt-3 mb-10">
        <Frame title={"A 10-Minute Lower Body Workout"} img_link={discover3} />
        <Frame title={"4 Healthy Vegetarian Receipes"} img_link={discover1} />
      </div>
      <Info type={"Articles"} option={"View More"} />
    </div>
  );
};

export default Discover;
