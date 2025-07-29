import hero from "../../assets/WhoWeAre.jpg";
import { TiTick } from "react-icons/ti";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h13.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import h6 from "../../assets/h6.png";
import h7 from "../../assets/h7.png";
import h8 from "../../assets/h8.png";
import h9 from "../../assets/h9.png";
import { BsFileEarmarkPost } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { TbPlugConnected } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";

export default function HomeFeature() {
  // 1. Company features data
  const companyFeatures = [
    {
      img: h1,
      title: "Intern to Hire Program",
      subtitle: "Real ROI with 2‑month trial phase",
    },
    {
      img: h2,
      title: "Fast & Reliable Matches",
      subtitle: "AI‑based profiles + human screening",
    },
    {
      img: h3,
      title: "Pan‑India Talent Pool",
      subtitle: "From Tier 1, 2, and 3 colleges",
    },
    {
      img: h4,
      title: "Easy Onboarding Support",
      subtitle: "Our team coordinates everything",
    },
  ];

  // 2. College features data
  const collegeFeatures = [
    {
      icon: <BsFileEarmarkPost className="text-5xl text-white" />,
      title: "Curriculum Integration",
      subtitle:
        "Centralized platform for managing all placement activities, from applications to interviews.",
    },
    {
      icon: <LuShoppingBag className="text-5xl text-white" />,
      title: "Guaranteed Placements",
      subtitle: "Backed by MoUs and tracked results",
    },
    {
      icon: <TbPlugConnected className="text-5xl text-white" />,
      title: "Industry Connect",
      subtitle: "50+ live sessions, 12 hiring events/year, expert webinars",
    },
    {
      icon: <GoTrophy className="text-5xl text-white" />,
      title: "Visibility & Branding",
      subtitle: "National recognitions, TPO Awards, and joint showcases",
    },
    {
      icon: <TbPlugConnected className="text-5xl text-white" />,
      title: "Dedicated Success Manager",
      subtitle: "Because your students' future matters",
    },
  ];

  // 3. Impact items
  const impactItems = [
    "22 Colleges Onboarded",
    "1000+ Students Trained",
    "500+ Internships Facilitated",
    "30+ Corporate Partners in Pipeline",
    "15+ Skill Training Modules Launched",
    "Hosted TPO Excellence Awards 2025 with 100+ dignitaries",
  ];

  return (
    <div className="mx-auto px-12 py-12 space-y-24 font-sans text-gray-800">
      <section>
        <h2 className="text-5xl font-bold mb-2">
          For <span className="text-[#FF484A]">Companies</span>
        </h2>
        <p className="text-gray-600 text-2xl mb-8">
          Connecting businesses with top talent from leading colleges
        </p>

        <div className=" flex flex-col items-center justify-center ">
          {companyFeatures.map(({ img, title, subtitle }, idx) => (
            <div
              key={idx}
              className="flex justify-around items-center w-full px-20 "
            >
              {idx % 2 === 0 ? (
                <div className="flex justify-between items-center w-full px-20">
                  <div className="w-[50%]">
                    <img
                      src={img}
                      alt={title}
                      className="w-100 h-80 object-fill rounded-xl "
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center w-[40%] h-[200px] border-r-4 border-black bg-gradient-to-r from-[#faf4f3] to-[#ffdbd6] text-white">
                    <span className="relative inline-block text-[#FF494B] px-4 py-2 rounded-full text-3xl font-bold">
                      {title}
                    </span>
                    <p className="mt-2 text-2xl text-gray-700">{subtitle}</p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center w-full px-20">
                  <div className="flex flex-col items-center justify-center w-[50%] h-[200px] border-l-4 border-black bg-gradient-to-r to-[#faf4f3] from-[#ffdbd6] text-white">
                    <span className="relative inline-block text-[#FF494B] px-4 py-2 rounded-full text-3xl font-bold">
                      {title}
                    </span>
                    <p className="mt-2 text-2xl text-gray-700">{subtitle}</p>
                  </div>
                  <div className="w-[30%]">
                    <img
                      src={img}
                      alt={title}
                      className="w-100 h-80 object-fill rounded-xl "
                    />
                  </div>{" "}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-5xl font-bold mb-2">
          For <span className="text-[#FF484A]">Colleges</span>
        </h2>
        <p className="text-gray-600 text-xl mb-8">
          Connecting businesses with top talent from leading colleges
        </p>

        <div className="flex flex-wrap justify-center gap-[80px] mt-20">
          {collegeFeatures.map(({ icon, title, subtitle }, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#FF484A]  rounded-lg p-6 flex flex-col items-center justify-start text-center w-[350px] h-[400px]"
            >
              <div className="w-36 h-36 mb-4 rounded-full border-4 border-[#FF484A] flex items-center justify-center">
                <div
                  className="w-30 h-30 rounded-full border-3 border-[#0f0f0f] bg-[#010101]  flex items-center justify-center"
                  
                >
                  {icon}
                </div>
              </div>

              <h4 className="font-bold my-3 text-[#FF484A] text-2xl">
                {title}
              </h4>
              <p className="text-gray-500 text-lg my-3">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div
          className="relative h-[800px] "
          style={{
            backgroundImage: `url(${hero})`,
          }}
        >
          <div className="absolute bg-[rgba(11,11,11,0.80)] w-full h-full flex ">
            <div className="flex flex-col justify-center mx-2 mt-5 ml-5 md:mt-10 md:ml-20 w-auto md:w-[600px]">
              <h1 className="text-[#f15322] md:text-6xl text-2xl font-bold">
                Our Impact
              </h1>
              <ul className="space-y-4 text-white mt-10">
                {impactItems.map((text, idx) => (
                  <li key={idx} className="flex items-center space-x-3 py-3">
                    <div className="w-12 h-12 p-3 border-2 border-[#f15322] text-white flex justify-center items-center rounded-full">
                      <TiTick className="text-xl" />{" "}
                    </div>
                    <span className="pr-5 text-3xl font-bold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
