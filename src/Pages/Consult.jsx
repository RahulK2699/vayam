import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AppleIcon from "@mui/icons-material/Apple";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import BookSession from "../components/Consult/BookSession";
import profile1 from "../assets/images/profile1.jfif";
import profile2 from "../assets/images/profile2.jfif";

const Consult = () => {
  return (
    <div>
      <Header title={"Consult"} />
      <SearchBar placeholder=" Search" />
      <div className=" flex justify-between bg-bggray bg-opacity-40 rounded-xl my-5">
        <div className=" flex flex-col items-center gap-1 px-3 py-2 rounded-l-xl bg-bggray opacity-80">
          <FitnessCenterIcon className=" text-purple" />
          <p className=" text-white text-xs">Trainers</p>
        </div>
        <div className=" flex flex-col items-center gap-1  px-3 py-2">
          <AppleIcon className="text-white text-opacity-40" />
          <p className=" text-white text-opacity-50 text-xs">Dietians</p>
        </div>
        <div className=" flex flex-col items-center gap-1  px-3 py-2 ">
          <VolunteerActivismOutlinedIcon className=" text-white text-opacity-40" />
          <p className=" text-white text-xs text-opacity-40">Therapists</p>
        </div>
      </div>
      <BookSession
        profile={profile1}
        name={"Manish Saxena"}
        ttype={"General Fitness Trainer"}
        exp={"8 Years of Experience"}
        master_in={"Fitness,Wellness"}
        price={500}
      />

      <BookSession
        profile={profile2}
        name={"Shreya Sharma"}
        ttype={"Personal Trainer"}
        exp={"4 Years of Experience"}
        master_in={"Fitness,Yoga"}
        price={350}
      />
    </div>
  );
};

export default Consult;
