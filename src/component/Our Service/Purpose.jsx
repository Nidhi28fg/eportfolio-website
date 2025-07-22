import React from "react";
import service from "../../assets/purpose.jpg";
import Button from "../Home/Button";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { ImCompass2 } from "react-icons/im";
import { GrTrophy } from "react-icons/gr";

const Purpose = () => {
  return (
    <div className="flex-col md:flex-row flex w-full justify-between md:pl-10 md:pt-30">
      <div className="md:w-[55%] md:h-[100%] w-auto h-auto">
        <img
          src={service}
          alt=""
          className="w-auto h-auto md:w-[1000px] md:h-[1000px] object-cover"
        />
      </div>
      <div className="md:w-[40%] p-5">
        <div className="flex items-center md:gap-5 md:pt-30">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>DSVDFYESUFEWIHGIO</p>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#e94d65]">
          <span className="text-[#ff7e56]">Purpose. Passion. </span>
          <br />
          Progress.
        </h1>
        <div className="flex gap-5 my-8 w-2/3">
          <div>
            <p>
              At EpochFolio, Our purpose is simple: deliver career-ready
              training, digital profiles, and guided mentorship-at no cost. We
              collaborate with colleges and institutions to prepare students for
              the real world.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Button
            text="Get a Custom Strategy"
            color="bg-[#e94d65] text-white hover:transparent hover:bg-white hover:text-[#e94d65] transition duration-300F"
          />
        </div>

        <div className="w-full border-b-2 border-b-gray-300 my-15"></div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <RiMoneyDollarBoxLine className="w-[60px] text-[#e94d65] h-full object-cover" />
            <h1 className="text-5xl font-bold text-[#f69273]">500+</h1>
            <p className="text-center">
              Students empowered
              <br /> across India
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <ImCompass2 className="w-[60px] text-[#e94d65] h-full object-cover" />
            <h1 className="text-5xl font-bold text-[#f69273]">170+</h1>
            <p className="text-center">
              Institutions and 
              <br /> partners onboarded
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <GrTrophy className="w-[60px] text-[#e94d65] h-full object-cover" />
            <h1 className="text-5xl font-bold text-[#f69273]">30+</h1>
            <p className="text-center">
              Career development events 
              <br /> & workshops conducted
            </p>
          </div>


        </div>
      </div>
      {/* 2nd section */}
    </div>
  );
};

export default Purpose;
