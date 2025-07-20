import React from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi";

const Layout = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div>
        <img src={logo} alt="logo" className="w-60 h-20" />
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <ul className="flex space-x-12 text-xl font-semibold text-gray-800 ">
          <li className="cursor-pointer flex items-center gap-2 hover:text-gray-600"><div>Home</div> <div><HiOutlineChevronDown/></div></li>
          <li className="cursor-pointer flex items-center gap-2 hover:text-gray-600"><div>About Us</div> <div><HiOutlineChevronDown/></div></li>
          <li>Service</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-6">
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer"><FaSearch /></div>
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer"><HiOutlineBars3BottomRight /></div>
      </div>
    </div>
  );
};

export default Layout;
