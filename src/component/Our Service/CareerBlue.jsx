import blue from "../../assets/c1.jpg";

const CareerBlue = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 m-20">
      <div className="md:w-1/3">
        <div className="flex items-center md:gap-5 md:-pt-40">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>EVERY STEP, WITH PURPOSE.</p>
          </div>
        </div>
        <h1 className="text-3xl md:text-6xl font-bold my-8 text-[#d7552d]">
          <span className="text-[#ff7e56]">Career</span>
          <br />
          Blueprint
        </h1>
        <img
          src={blue}
          alt=""
          className="w-[420px] h-[240px] object-fill rounded-lg"
        />
      </div>
      <div className="md:w-1/3 text-lg">
        <p>
          We begin by helping students identify their strengths, interests, and
          aspirations. With guided tools and reflective assessments, learners
          gain clarity on their ideal career direction.
        </p>
        <p className="my-10">
          Based on each student's profile, we match them with relevant industry
          skills. From communication to technical expertise, we ensure the
          learning path aligns with job-market demands.
        </p>
        <p>
          Through curated resources, practice modules, and interactive sessions,
          students build practical knowledge. Every lesson is created by experts
          to be engaging, useful, and directly applicable.
        </p>
      </div>
      <div className="md:w-1/3 text-lg">
        <p>
          Students create polished resumes, projects, and personal websites that
          showcase their true capabilities. We guide them in presenting a
          professional and impressive digital presence.
        </p>{" "}
        <p className="my-10">
          Mock interviews, group discussions, and real-world scenarios help
          learners gain confidence. We coach them on how to handle interviews,
          pitches, and team collaborations effectively.
        </p>
        <p>
          With college and company partnerships, we bring students face-to-face
          with opportunity. From internships to job roles, we make sure they're
          ready to launch their careers-confidently.
        </p>
      </div>
    </div>
  );
};

export default CareerBlue;
