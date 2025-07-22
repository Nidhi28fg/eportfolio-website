import React from "react";
import logo from "../../assets/epochfolio.png";
import { IoMdCall, IoMdPlay } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { GoHorizontalRule } from "react-icons/go";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import map from "../../assets/map.png";
import { GrUploadOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <div className="px-20 md:flex md:justify-evenly gap-10 md:items-center">
        {/* first */}
        <div className="flex flex-col gap-5 px-10 lg:px-0 text-sm md:text-[14px] lg:text-lg max-w-[60vh]">
          <div className="flex items-center md:gap-5 ">
            <div className="w-8 border-b-2 border-b-amber-600"></div>
            <div>
              <p className="lg:text-sm">AVANTAGE</p>
            </div>
          </div>
          <h2 className="mb-3 text-[#FF494B]">Headquarters</h2>
          <p className="max-w-80">
            Organically grow holistic world view of dispute innovaion via
            empowerment.
          </p>
          {/* with icons */}
          <div className="flex flex-col gap-3 my-10">
            <div className="flex gap-4 items-center">
              <IoMdCall />
              <span className="text-[#000]">90167 31145</span>
            </div>
            <div className="flex gap-4 items-center">
              <IoMail />
              <span className="text-[#000]">contact@epochfolio.com</span>
            </div>
            <div className="flex gap-4 items-center">
              <TbWorld />
              <span className="text-[#000]">www.epochfolio.com</span>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col gap-5">
         <img src={map} alt="map" width={500} height={500} className="object-cover"/>
        </div>

        {/* second */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-[#FF494B]" />
            <span>Maharashtra</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-[#FF494B]" />
            <span>Delhi</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-[#FF494B]" />
            <span>Haryana</span>
          </div>
        </div>

        {/* fourth */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 border-b-2 border-b-amber-600"></div>
            <span>GET IN TOUCH</span>
          </div>
          <span className="text-[#FF494B] font-semibold">Advantage Social Links</span>
          <p className="max-w-[20vw] text-xs lg:text-[16px]">
            Taking Seamless key performance indicators offline to maximize the
            long tail
          </p>
          <div className="flex gap-2 text-black ">
            <img src={facebook} alt="" width={45} height={8} />
            <img src={twitter} alt="" width={45} height={8}/>
            <img src={linkedin} alt="" width={45} height={8}/>
            <img src={instagram} alt="" width={45} height={8} />
          </div>
        </div>
      </div>
      {/* final border */}
      <div className="w-full mt-5 md:mt-10 text-[8px] md:text-sm lg:text-md lg:p-10 lg:px-20  bg-[#e94d65] flex items-center gap-120 text-white">
        <span>Copyright by <span className="font-semibold">Epochfolio</span>. All rights reserved</span>
        <div className="flex gap-4 items-center">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">SERVICES</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">BLOG</a>
          <a href="#">SHOP</a>
          <GrUploadOption className="text-5xl text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
