import React from "react";
import hero from "../../assets/herosec.png";
import Button from "./Button";

const Herosec = () => {
  return (
    <div
      className="h-[650px] bg-cover bg-center bg-no-repeat object-fill"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="flex flex-col justify-center h-[650px] bg-cover bg-center bg-no-repeat mx-9">
        <div>
          <h1 className="md:text-5xl text-3xl font-[900] text-white">
            Transforming Placements.
            <br />
            <span className="text-[#ff7e56]">Empowering Futures</span>
          </h1>
          <p className="text-white mt-4 w-auto md:w-[700px] md:text-xl text-ls">India's most ambitious HR partner for colleges & companies offering guaranteed placements, real-time hiring solutions, and deep industry collaborations</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 gap-10">
        {/* Button section */} 
        <div><Button text="Request a Demo" color="bg-[#ff7e56] text-white hover:transparent hover:bg-white hover:text-[#ff7e56] transition duration-300"/></div>
        <div><Button text="Join as Company Partner" color="transparent text-white hover:bg-[#e66a45]  transition duration-300"/></div></div>
      </div>
    </div>
  );
};

export default Herosec;
