import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-[550px] md:min-h-[600px] flex items-center justify-center ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex bg-pattern flex-col justify-center pt-10 relative">
            <img data-aos="fade-down" data-aos-delay={100} width={50} src="/pattern/camp.png" alt="" />
            <h1 data-aos="fade-down" data-aos-delay={350} className="text-4xl font-bold lg:text-5xl font-popins">
              Traveller Love This
            </h1>
            <p data-aos="fade-down" data-aos-delay={350} className=" mt-5  font-semibold text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
              eligendi corrupti minus aperiam porro perferendis, beatae, soluta
              impedit tempora dolores dolorum dicta iure error.
            </p>
            <div data-aos="fade-down" data-aos-delay={500} className="flex items-center gap-1  mt-5">
              {Array(5)
                .fill(1)
                .map((_, i) => (
                  <FaStar  className="w-8 h-8 text-yellow-400" key={i} />
                ))}
              <span>256k</span>
              <span className="font-popins font-semibold text-green-600 text-lg">
                Followers
              </span>
            </div>
            <div data-aos="fade-down" data-aos-delay={600} className=" flex items-center space-x-4 mt-5">
              <button className="flex items-center justify-center bg-green-600 px-3 py-2 rounded-md text-white font-semibold">
                <MdOutlineKeyboardDoubleArrowRight size={19} className="mr-1" />
                Contunie
              </button>
              <button className="flex items-center justify-center bg-slate-900 px-3 py-2 rounded-md text-white font-semibold">
                <FaNetworkWired size={19} className="mr-2" />
                Work
              </button>
            </div>
          </div>

          <div className="min-h-[650px] md:min-h-[650px] flex items-center justify-center relative">
            <img src="/pattern/7.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
