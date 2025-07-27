import React from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex justify-between items-center my-4 ">
      <div>
        <img src={logo} alt="logo" className="w-60 h-20 object-cover" />
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <ul className="flex space-x-12 text-xl font-semibold text-gray-800 ">
          <Link to="/"><li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]"><div>Home</div> <div><HiOutlineChevronDown/></div></li></Link>
          <Link to="/about-us"><li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]"><div>About Us</div> <div><HiOutlineChevronDown/></div></li></Link>
           <Link to="/our-service"><li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]"><div>Services</div> <div><HiOutlineChevronDown/></div></li></Link>

          <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]"><div>Blog</div> <div><HiOutlineChevronDown/></div></li>
          <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]">Contact Us</li>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-6 mr-2">
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer"><FaSearch /></div>
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer"><HiOutlineBars3BottomRight /></div>
      </div>
    </div>
  );
};

export default Layout;
