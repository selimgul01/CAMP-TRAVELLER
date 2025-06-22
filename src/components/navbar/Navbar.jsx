import React from "react";
import { NAV_LINKS } from "../../constans/data";
import { BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-5 px-20  border-b shadow-sm">
      <div data-aos="fade-down" data-aos-delay={100} className="cursor-pointer font-semibold font-pacifiko text-xl">
        <span className="text-green-600 ">Camp</span> Traveller
      </div>

      <div className="hidden lg:flex h-full gap-10">
        {NAV_LINKS.map((link, i) => (
          <div data-aos="fade-down" data-aos-delay={link.delay} key={i} className="font-popins flex items-center cursor-pointer text-slate-500
          hover:text-slate-950 font-semibold hover:scale-105 transition-all">
            {link.label}
          </div>
        ))}
      </div>

      <div data-aos="fade-down" data-aos-delay={1200} className="lg:flex hidden justify-center">
        <button className="flex items-center space-x-2 bg-green-600 text-white p-2 rounded-md">
          <BiUser className="" /> <p>Login</p>
        </button>
      </div>
      <FaBars data-aos="fade-down" data-aos-delay={300} size={25} className="text-green-600 lg:hidden inline-block cursor-pointer "/>
    </nav>
  );
};

export default Navbar;
