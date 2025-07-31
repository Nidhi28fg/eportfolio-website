import { TiTick } from "react-icons/ti";
import herosec2 from "../../assets/h1.jpg";
import herosec3 from "../../assets/h2.jpg";
import herosec4 from "../../assets/h3.png";
import ref from "../../assets/ref.jpg";
import ref2 from "../../assets/ref2.jpg";
import ref3 from "../../assets/ref3.jpg";
import ref4 from "../../assets/ref4.jpg";
import ref5 from "../../assets/ref5.jpg";
import ref6 from "../../assets/ref6.jpg";

const Referencepage = () => {
  const heroMeto = [
    {
      id: 1,
      img: ref,
      h1: "Portfolio Building",
      p: "Craft professional, modern documents tailored to each career goal.",
    },
    {
      id: 2,
      img: ref2,
      h1: "Soft Skills + Technical Bootcamps",
      p: "Train students with real-world business communication and tech fluency.",
    },
    {
      id: 3,
      img: ref3,
      h1: "1:1 Career Mentorship",
      p: "Personalized coaching by industry experts for clarity and confidence.",
    },
    {
      id: 4,
      img: ref4,
      h1: "Placement & Internship Drives",
      p: "Connect your students with recruiters via verified drives and events.",
    },
    {
      id: 5,
      img: ref5,
      h1: "College Branding & Outreach",
      p: "Showcase your campus through digital campaigns and national exposure."},    
      {
      id: 6,
      img: ref6,
      h1: "HR & TPO Dashboard Tools",
      p: "Track student growth, attendance, performance, and hiring activity easily.",
    }
      ];

  return (
    <>
      <div className="md:w-full flex flex-col items-center justify-center text-center p-25">
        <div className="flex items-center md:gap-5">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>WHY IT IS FREE?</p>
          </div>
          <div className="w-15 border-b-2 border-b-amber-600"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#ff7e56] ">
          <span className="text-[#e94d65]">Your Growth </span>
          Our Goal
        </h1>
        <div className="flex gap-5 my-8 w-[80%]">
          <div>
            <p>
              Whether you're a college, training center, or student, our system
              simplifies career preparation by integrating skill building,
              digital presence, and employer engagement into a seamless
              experience.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col flex-wrap md:flex-row md:justify-center items-center md:gap-8 my-20 mx-9 md:h-full md:mt-[20px] pb-18
    "
      >
        {heroMeto.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-4 w-auto md:w-[400px] border-2 border-gray-300 rounded-lg h-[400px] shadow-[5px_20px_20px_0px_gray] object-fill"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="">
              <img
                src={item.img}
                alt={`hero-section-${item.id}`}
                className="w-90 md:w-100 h-60 object-cover rounded-lg shadow-lg opacity-0.1 bg-gradient-to-tl "
              />
            
              
            </div>
            <div className="-mt-8 h-full px-4 bg-gradient-to-t from-[#e94d64cb] to-[#0e0b0bb7]  z-20">
              <h1
                className="text-2xl md:text-3xl shadow-2xl font-bold px-4 text-[#f2420d] border-none"
              >
                {item.h1}
              </h1>
              <p className="mt-2 px-4 w-80 md:w-auto text-lg text-white text-justify">
                {item.p}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FFA361] flex flex-col text-white items-center justify-center gap-5 h-[550px] w-full bg-cover bg-center bg-no-repeat object-fill ">
        <div class="font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] text-white text-center align-middle">
          Curious About Career Growth?
        </div>
        <p class="font-roboto font-normal text-lg leading-[27px] tracking-normal text-center align-middle">
          Let our experts guide you through every step of your student success
          strategy. We offer free, personalized insights tailored to your
          institution’s goals.
        </p>
        <div className=" flex gap-2 w-[786.66px] h-[99px]">
          <input
            type="text"
            placeholder="Enter your email address"
            className="w-[644.55px] h-[52px] p-2 border-1 bg-white border-black"
          />
          <button type="button" className="w-[133px] h-[52px] bg-[#E94D65]">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>

      {/* next section */}
      <div className="bg-[#ffffffd0] flex flex-col h-full bg-cover bg-center bg-no-repeat object-fill">
        <div className="md:w-[80%] p-25">
          <div className="flex items-center md:gap-5 md:pt-30">
            <div className="w-15 border-b-2 border-b-amber-600"></div>
            <div className="text-xl">
              <p>WHY IT IS FREE?</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#ff7e56] ">
            <span className="text-[#e94d65]">Built by educators.</span>
            <br />
            Free for every student.
          </h1>
          <div className="flex gap-5 my-8 w-[80%]">
            <div>
              <p>
                EpochFolio isn’t a product — it’s a mission. We believe
                career-building resources should never come with a price tag.
                That’s why everything we offer is completely free for students
                and institutions alike.
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-5 w-full h-[300px] md:w-[1219px] md:h-[523.13px] md:top-[453.19px] md:left-[350px] opacity-100 transform rotate-0 mx-auto mt-4 md:mt-0">
          <div class="relative w-[385.66px] h-[361.13px] left-[10px] opacity-100 transform rotate-0 shadow-[0_2px_20px_0_rgba(0,0,0,0.2)]">
            <div class="bg-[#F3B164] absolute -top-[41px] w-[89.93px] h-[89.93px] left-[44.96px] opacity-100 rounded-[50%] transform rotate-0"></div>
            <div class="relative w-[325.66px] h-[2px] top-[65px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div className="flex relative w-[325.66px] top-[92px] h-[131.13px] left-[30px] opacity-100 transform rotate-">
              <div className="relative text-[#F3B164] font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] align-middle w-[99.2px] h-[60px] left-[46.36px] opacity-100 transform rotate-0">
                <span className="text-[20px] top-0">₹</span>0
              </div>
              <div>
                <div
                  className="relative font-roboto-condensed font-normal text-sm leading-[21px] tracking-normal align-middle uppercase
                    w-[133px] h-[21px] left-[35px] opacity-100 transform rotate-0"
                >
                  0% Fee
                </div>
                <div className="relative font-sarabun font-extrabold text-[25px] leading-[25px] tracking-[-0.75px] align-middle uppercase w-[163px] h-[58px] left-[35px] opacity-100 transform rotate-0">
                  No Payment Ever
                </div>
              </div>
            </div>
            <div class="relative w-[325.66px] top-[84px] h-[2px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div
              class="relative w-full h-auto px-4 my-4 
                    md:w-[325.66px] md:h-[131.13px] md:top-[90px] md:left-[30px] 
                    opacity-100 transform rotate-0"
            >
              <ul>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" /> No
                  subscriptions
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  no hidden charges
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Always free
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Open for all
                </li>
              </ul>
            </div>
          </div>
          {/* 2nd section */}
          <div class="relative bg-[#FF6163] w-[385.66px] h-[361.13px] left-[10px] opacity-100 transform rotate-0 shadow-[0_2px_20px_0_rgba(0,0,0,0.2)]">
            <div class="bg-[#F3B164] absolute -top-[41px] w-[89.93px] h-[89.93px] left-[44.96px] opacity-100 rounded-[50%] transform rotate-0"></div>
            <div class="relative w-[325.66px] h-[2px] top-[65px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div className="flex relative w-[325.66px] top-[92px] h-[131.13px] left-[30px] opacity-100 transform rotate-">
              {/* <div className="relative text-[#F3B164] font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] align-middle w-[99.2px] h-[60px] left-[46.36px] opacity-100 transform rotate-0">
                        <span className="text-[20px] top-0">₹</span>0
                      </div> */}
              <div>
                <div className="relative font-roboto-condensed font-normal text-sm leading-[21px] tracking-normal align-middle uppercase h-[21px] left-[35px] opacity-100 transform rotate-0">
                  Built by Industry Experts
                </div>
                <div className="relative font-sarabun font-extrabold text-[25px] leading-[25px] tracking-[-0.75px] align-middle uppercase w-[163px] h-[58px] left-[35px] opacity-100 transform rotate-0">
                  Expert Crafted
                </div>
              </div>
            </div>
            <div class="relative w-[325.66px] top-[84px] h-[2px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div
              class="relative w-full h-auto px-4 my-4 
                    md:w-[325.66px] md:h-[131.13px] md:top-[100px] md:left-[30px] 
                    opacity-100 transform rotate-0"
            >
              <ul>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" /> No
                  subscriptions
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  no hidden charges
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Always free
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Open for all
                </li>
              </ul>
            </div>
          </div>
          {/* 3rd section */}
          <div class="relative w-[385.66px] h-[361.13px] left-[10px] opacity-100 transform rotate-0 shadow-[0_2px_20px_0_rgba(0,0,0,0.2)]">
            <div class="bg-[#F3B164] absolute -top-[41px] w-[89.93px] h-[89.93px] left-[44.96px] opacity-100 rounded-[50%] transform rotate-0"></div>
            <div class="relative w-[325.66px] h-[2px] top-[65px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div className="flex relative w-[325.66px] top-[92px] h-[131.13px] left-[30px] opacity-100 transform rotate-">
              {/* <div className="relative text-[#F3B164] font-sarabun font-extrabold text-[60px] leading-[60px] tracking-[-1.8px] align-middle w-[99.2px] h-[60px] left-[46.36px] opacity-100 transform rotate-0">
                        <span className="text-[20px] top-0">₹</span>0
                      </div> */}
              <div>
                <div
                  className="relative font-roboto-condensed font-normal text-sm leading-[21px] tracking-normal align-middle uppercase
                     h-[21px] left-[35px] opacity-100 transform rotate-0"
                >
                  ready to scale across universities
                </div>
                <div className="relative font-sarabun font-extrabold text-[25px] leading-[25px] tracking-[-0.75px] align-middle uppercase w-[163px] h-[58px] left-[35px] opacity-100 transform rotate-0">
                  Campus Approved
                </div>
              </div>
            </div>
            <div class="relative w-[325.66px] top-[84px] h-[2px] left-[30px] opacity-10 transform rotate-0 bg-gray-500"></div>
            <div
              class="relative w-full h-auto px-4 my-4 
                    md:w-[325.66px] md:h-[131.13px] md:top-[90px] md:left-[30px] 
                    opacity-100 transform rotate-0"
            >
              <ul>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" /> No
                  subscriptions
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  no hidden charges
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Always free
                </li>
                <li
                  className="relative flex font-roboto font-normal text-base leading-[24px] tracking-normal align-middle uppercase
                     h-[19px] top-[6.39px] left-[24px] opacity-100 transform rotate-0"
                >
                  <TiTick className="text-[#F3B164] text-2xl" />
                  Open for all
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* next section  */}
    </>
  );
};

export default Referencepage;
