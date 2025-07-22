import React from "react";
import service from "../../assets/s1.jpg";
import { LuWaypoints } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import Button from "../Home/Button";

const HeroSer = () => {
  return (
    <div className="flex-col md:flex-row flex w-full justify-between md:pl-10">
      <div className="md:w-[40%] p-5">
        <div className="flex items-center md:gap-5 md:pt-30">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>Our 5-Step Process to Empower Careers</p>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#e94d65]">
          <span className="text-[#ff7e56]">Your</span> <br />
          Career Roadmap
        </h1>
        <div className="flex gap-5 mt-8">
          <div>
            <p>
              At EpochFolio, we believe every student deserves a clear, guided
              path to a meaningful career. Our process is designed to take
              learners from self-discovery to real-world success—ensuring no one
              is left behind.
            </p>
          </div>
          <div>
            <p>
              Through expert tools, personal guidance, we transform students
              into career-ready professionals. From building standout portfolios
              to connecting with recruiters, we empower learners every step of
              the way.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center text-gray-700 gap-5 mt-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-center md:text-lg gap-2">
              <LuWaypoints className="text-3xl" />
              Roadmaps
            </div>
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <MdOutlineReduceCapacity className="text-3xl" />
              Mentorship
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center md:text-lg gap-2 ">
              <LuNewspaper className="text-3xl" />
              Protfolios
              <br /> building
            </div>
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <MdFactory className="text-3xl" />
              Training
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center md:text-lg gap-2">
              <FaArrowsDownToPeople className="text-3xl" /> Placement <br />
              Strategy
            </div>
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <GiLevelThreeAdvanced className="text-3xl" /> Support
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-5 mt-8">
          <div className="flex justify-between gap-5">
            <div className="flex items-center md:text-lg gap-2">
              <LuWaypoints className="text-3xl" />
              Roadmaps
            </div>
            <div className="flex items-center md:text-lg gap-2 ">
              <LuNewspaper className="text-3xl" />
              Protfolios
              <br /> building
            </div>
            <div className="flex items-center md:text-lg gap-2">
              <FaArrowsDownToPeople className="text-3xl" /> Placement <br />
              Strategy
            </div>
          </div>
          <div className="flex justify-between md:gap-5 ">
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <MdOutlineReduceCapacity className="text-3xl" />
              Mentorship
            </div>
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <MdFactory className="text-3xl" />
              Training
            </div>
            <div className="flex items-center md:text-lg gap-2">
              {" "}
              <GiLevelThreeAdvanced className="text-3xl" /> Support
            </div>
          </div>
        </div> */}

        <div className="w-full border-b-2 border-b-gray-300 my-20"></div>
        <div className="flex gap-2">
          <Button
            text="Get Free Proposal"
            color="bg-[#e94d65] text-white hover:transparent hover:bg-white hover:text-[#e94d65] transition duration-300F"
          />
          <Button
            text="Book A Demo"
            color="text-white bg-[#ff7e56] hover:bg-white hover:text-[#ff7e56] transition duration-300"
          />
        </div>
      </div>
      {/* 2nd section */}
      <div className="md:w-[55%] md:h-[100%] w-auto h-auto">
        <img
          src={service}
          alt=""
          className="w-auto h-auto md:w-[1000px] md:h-[900px] object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSer;
