import React from "react";
import herosec2 from "../../assets/h1.jpg";
import herosec3 from "../../assets/h2.jpg";
import herosec4 from "../../assets/h3.png";

const HeroSec2 = () => {
  const heroMeto = [
    {
      id: 1,
      img: herosec2,
      h1: "Our Platform",
      p: "A comprehensive suite of tools designed to streamline the placement process for both colleges and companies.",
    },
    {
      id: 2,
      img: herosec3,
      h1: "Our Approach",
      p: "We leverage data-driven insights and industry best practices to optimize placement strategies and outcomes.",
    },
    {
      id: 3,
      img: herosec4,
      h1: "Our Impact",
      p: "We've helped numerous colleges and companies achieve their placement goals, resulting in successful student placements.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center md:gap-8 my-20 mx-9 md:h-[400px] md:mt-[20px] pb-18
    ">
      {heroMeto.map((item) => (
        <div
          key={item.id}
          className="flex flex-col m-4 w-auto md:w-[400px] border-2 border-gray-300 bg-white rounded-lg h-[400px] shadow-[5px_20px_20px_0px_gray]"
        >
            <div className="">
          <img
            src={item.img}
            alt={`hero-section-${item.id}`}
            className="w-90 md:w-100 h-60 object-cover rounded-lg shadow-lg opacity-0.1 bg-gradient-to-tl "
            
          /></div>

          <div
           className="-mt-8 px-4  bg-[rgba(255,255,255,0.59)] z-20"
          >
            <h1 className="text-2xl font-bold px-4 text-[#f15322] bg-#e9e2e0 border-none
            ">
              {item.h1}
            </h1>
            <p className="mt-2 px-4 w-80 md:w-auto text-justify">{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSec2;
