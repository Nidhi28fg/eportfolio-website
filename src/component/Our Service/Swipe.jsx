import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import SwipeContent from "./SwipeContent";
import { LuWaypoints } from "react-icons/lu";
import "../../App.css";
import { LuNewspaper } from "react-icons/lu";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { GiLevelThreeAdvanced } from "react-icons/gi";

const Swipe = () => {
  return (
    <div className="m-40">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwipeContent
            image={
              <LuWaypoints className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Discover & Diagnose"
            text="We assess students' strengths, career goals, and academic profiles to personalize the journey."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipeContent
            image={
              <LuNewspaper className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Train for the Real World"
            text="Hands-on sessions, mentorship, and interactive learning make students job-ready."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipeContent
            image={
              <FaArrowsDownToPeople className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Build the Foundation"
            text="Resume, LinkedIn, and portfolio - all aligned with today's hiring standards."
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwipeContent
            image={
              <MdOutlineReduceCapacity className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Connect & Collaborate"
            text="We build connections with colleges, HRs, and industry partners for direct pathways."
          />
        </SwiperSlide>
         <SwiperSlide>
          <SwipeContent
            image={
              <MdFactory className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Discover & Diagnose"
            text="We assess students' strengths, career goals, and academic profiles to personalize the journey."
          />
        </SwiperSlide>
         <SwiperSlide>
          <SwipeContent
            image={
              <LuWaypoints className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Discover & Diagnose"
            text="We assess students' strengths, career goals, and academic profiles to personalize the journey."
          />
        </SwiperSlide> <SwiperSlide>
          <SwipeContent
            image={
              <LuWaypoints className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Discover & Diagnose"
            text="We assess students' strengths, career goals, and academic profiles to personalize the journey."
          />
        </SwiperSlide> <SwiperSlide>
          <SwipeContent
            image={
              <LuWaypoints className="w-[60px] text-[#f69273] h-full object-cover" />
            }
            heading="Discover & Diagnose"
            text="We assess students' strengths, career goals, and academic profiles to personalize the journey."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipe;
