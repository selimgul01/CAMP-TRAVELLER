import React from 'react'
import { FaMap } from 'react-icons/fa'
const FeaturesItem = ({title, description}) => {
   return (
   <li className='flex w-full flex-1 flex-col items-start'>
    <div className='rounded-full p-4 bg-green-100'>
        <FaMap data-aos="fade-right"
        data-aos-delay="200" className='w-9 h-9 text-green-600'/>


    </div>

    <h2 className='font-semibold mt-5 font-popins'>
        {title}
    </h2>

    <p className='mt-5 font-light'>
        {description}
    </p>





   </li>
  )
}

export default FeaturesItem
