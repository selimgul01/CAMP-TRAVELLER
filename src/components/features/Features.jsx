import React from "react";
import FeaturesItem from "./FeaturesItem";
import { FEATURES } from "../../constans/data";

const Features = () => {
  return (
    <section
      className=" flex flex-col items-center mt-10 
    justify-center  overflow-hidden bg-patterntwo bg-center bg-no-repeat"
    >
      <div className="container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            alt=""
            src="/camper/phone.png"
            width={440}
            height={1000}
          ></img>
        </div>

        <div className="flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <img
              src="/pattern/camp.png"
              data-aos="fade-down"
              data-aos-delay="100"
              width={50}
              height={50}
              alt=""
            />

            <h1
              className="text-3xl mb-5 lg:text-5xl font-semibold
                    font-pacifiko"
            >
              Our Features
            </h1>

            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {FEATURES.map((data) => (
                <FeaturesItem
                  key={data.title}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
