import React from "react";
import CampItem from "./CampItem";
import { ImQuotesLeft } from "react-icons/im";

const Camp = () => {
  return (
    <section className="container relative flex flex-col py-10">
      <div className="hide-scrollbar flex h-[340px] w-full items-center justify-start gap-8 overflow-x-auto lg:h-[440px] xl:h-[540px]">
        <CampItem
          title="Samsun In Turkey"
          background="bg-bgimage"
          people="25 Joined"
          subtitle="Çınarcık Is Loading"
        />

        <CampItem
          title="Samsun In Turkey"
          background="bg-bgimagetwo"
          people="25 Joined"
          subtitle="Çınarcık Is Loading"
        />
      </div>
      <div data-aos="fade-down" data-aos-delay={800} className="flex items-center justify-end mt-10 px-6 lg:-mt-24 ">
        <div className="bg-green-600 p-6 lg:max-w-[500px] xl:max-w-[720px] rounded-3xl relative w-full overflow-hidden ">
            <h2 className="font-semibold text-5xl text-white font-popins">
                Lost Feel And Not Know
            </h2>
            <p className="text-white mt-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eius unde excepturi neque cupiditate ipsa?</p>
            <ImQuotesLeft className=" ml-auto  text-white  text-3xl "/>
        </div>
      </div>
    </section>
  );
};

export default Camp;
