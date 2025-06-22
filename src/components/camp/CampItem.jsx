import React from "react";
import { FaMap } from "react-icons/fa";
import { PEOPLE_URL } from "../../constans/data";

const CampItem = ({ title, subtitle, background, people }) => {
  return (
     <div className={`${background} h-full w-full 
    min-w-[500px] lg:min-w-[800px] bg-cover bg-no-repeat rounded-3xl`}>
            <div className='flex h-full flex-col items-start justify-between p-6'>

                <div className='flex items-center justify-center gap-5'>

                <div data-aos="fade-down"
         data-aos-delay="250" className='rounded-full p-4 bg-green-100'>
                    <FaMap data-aos="fade-down" data-aos-delay={300} className='w-9 h-9 text-green-600'/>

                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-white  text-xl font-semibold font-roboto'>{title}</h4>
                    <p className='text-white  text-sm font-popins '>{subtitle}</p>



                </div>

                </div>

                <div className='flex items-center justify-center gap-5'>

                    <span className=' flex -space-x-4 overflow-hidden'>
                    {PEOPLE_URL.map((url)=>(
                        <img
                        alt=''
                        src={url}
                        key={url}
                        width={52}
                        height={52}
                        />
                    ))}




                    </span>

                    <p className='font-semibold text-white font-popins'>{people}</p>


                </div>

              




            </div>


    </div>
  );
};

export default CampItem;
