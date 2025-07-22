import { FiPhoneCall } from "react-icons/fi";

import { LiaAddressCardSolid } from "react-icons/lia";
import { MdOutlineAttachEmail } from "react-icons/md";

const ReachOut = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-around md:items-center md:gap-5 md:py-30 md:px-30">
      <div>
        <div className="flex items-center md:gap-5 ">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>DSVDFYESUFEWIHGIO</p>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#e94d65]">
          <span className="text-[#ff7e56]">Reach </span>
          Out
        </h1>
        <p className="mt-3">
          — we’re here to collaborate, co-create, and elevate student journeys.
          Reach out to learn how EpochFolio can help your institution thrive.
        </p>
      </div>
      <div>
        <div className="text-center flex flex-col items-center">
          <LiaAddressCardSolid className="text-6xl text-[#ff7e56]" />
          <h1 className="font-bold text-[#f3b164] text-2xl uppercase">
            Address
          </h1>
          <p className="w-80">
            bfsbfbsufheufhuehfuehfuhh
          </p>
        </div>
      </div>
      <div>
        <div className="text-center flex flex-col items-center">
          <FiPhoneCall className="text-5xl text-[#ff7e56]" />
          <h1 className="font-bold text-[#f3b164] text-2xl uppercase">
            Call us
          </h1>
          <p className="w-80">
            90167 31145
          </p>
        </div>
      </div>
      <div>
        <div className="text-center flex flex-col items-center">
          <MdOutlineAttachEmail className="text-5xl text-[#ff7e56]" />
          <h1 className="font-bold text-[#f3b164] text-2xl uppercase">
            Email
          </h1>
          <p className="w-80">
             contact@epochfolio.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
