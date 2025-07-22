import React from "react";
import hero from "../../assets/c2.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiBodyScanFill } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiCrystalGrowth } from "react-icons/gi";
const Build = () => {
  return (
    <div
      className="h-[1050px] mt-10 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat object-fill"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="md:w-1/3">
        <div className="flex items-center md:gap-5 md:-pt-40">
          <div className="w-15 border-b-4 border-b-[#f3b164]"></div>
          <div className="text-xl text-white">
            <p className="uppercase">our why: purpose that Drives Impact</p>
          </div>
          <div className="w-15 border-b-4 border-b-[#f3b164]"></div>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-white mt-5 mb-2">
        Why We Built EpochFolio
      </h1>
      <h1>
        <span className="text-[#f3b164] text-5xl font-bold">
          To Bridge Dreams and Careers
        </span>
      </h1>
      <p className="text-white font-semibold w-[740px] text-center my-10">
        We didn’t just build another platform—we built a mission. EpochFolio is
        the result of countless hours spent understanding what students truly
        need to succeed.
      </p>
      <div className="flex mt-10">
        <div className="text-center flex flex-col items-center text-white">
            <HiOutlineLightBulb className="text-6xl text-[#f3b164]"/>
          <p className="uppercase">Step 1</p>
          <h1 className="font-bold text-2xl">Discover Potential</h1>
           <div className="w-15 border-b-3 border-b-[#f3b164] mt-2 mb-5"></div>
          <p className="w-80">Identify student strengths with expert-designed assessment tools</p>
        </div>
        <div className="text-center flex flex-col items-center text-white">
            <RiBodyScanFill className="text-6xl text-[#f3b164]"/>
          <p className="uppercase">Step 2</p>
          <h1 className="font-bold text-2xl">Build Portfolio</h1>
           <div className="w-15 border-b-3 border-b-[#f3b164] mt-2 mb-5"></div>
          <p className="w-80">Guide them in crafting resumes, personal brands, and project showcases</p>
        </div>
        <div className="text-center flex flex-col items-center text-white">
            <FaPeopleRoof className="text-6xl text-[#f3b164]"/>
          <p className="uppercase">Step 3</p>
          <h1 className="font-bold text-2xl">Gain Exposure</h1>
           <div className="w-15 border-b-3 border-b-[#f3b164] mt-2 mb-5"></div>
          <p className="w-80">Connect them with real recruiters, internships, and industry simulations</p>
        </div>
        <div className="text-center flex flex-col items-center text-white">
            <GiCrystalGrowth className="text-6xl text-[#f3b164]"/>
          <p className="uppercase">Step 4</p>
          <h1 className="font-bold text-2xl">Track Success</h1>
           <div className="w-15 border-b-3 border-b-[#f3b164] mt-2 mb-5"></div>
          <p className="w-80">Continuously monitor growth and optimize career-readiness programs</p>
        </div>
      </div>
    </div>
  );
};

export default Build;
