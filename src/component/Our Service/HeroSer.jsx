import React from "react";
import service from "../../assets/s1.jpg";
import { LuWaypoints } from "react-icons/lu";
import { LuNewspaper } from "react-icons/lu";
const HeroSer = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-[40%] p-5">
        <div className="flex items-center gap-5">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div>
            <p>Our 5-Step Process to Empower Careers</p>
          </div>
        </div>
        <h1 className="text-5xl font-bold mt-4 text-[#FF7E56]">
          Your <br />
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

        <div className="flex md:flex-col gap-5 mt-8">
          <div className="flex justify-between gap-5">
            <div className="flex items-center text-xl gap-2"><LuWaypoints className="text-4xl"/>Roadmaps</div>
            <div  className="flex items-center text-xl gap-2"><LuNewspaper className="text-4xl"/>Protfolios building</div>
            <div>Placement Strategy</div>
           
          </div>
          <div className="flex justify-between gap-5">
           <div>Mentorship</div>
            <div>Training</div>
            <div>Support</div>
          </div>
        </div>
      </div>
      {/* 2nd section */}
      <div className="w-[55%] h-[100%]">
        <img
          src={service}
          alt=""
          className="w-[1000px] h-[900px] object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSer;
