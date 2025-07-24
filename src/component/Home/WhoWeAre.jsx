import React from 'react'
import hero from "../../assets/WhoWeAre.jpg";
import { FaArrowRight } from "react-icons/fa";


const WhoWeAre = () => {
 const points = [{
    id:1,
    point:"Built by campus leaders and industtry-experts"},
    { id:2,
    point:"Trusted by 20+ TPOS"},
    { id:3,
    point:"Serving companies for free in year one"},
    { id:4,
    point:"Serving companies for free in year one"},
    ]

  return (
    <div>
        <div className='relative h-[800px] '
        style={{
            backgroundImage: `url(${hero})`,
        }}
        >
            <div className='absolute bg-[rgba(11,11,11,0.80)] w-full h-full flex '>
                <div className='flex flex-col justify-center mx-2 mt-5 ml-5 md:ml-20 w-auto md:w-[600px]'>
                <h1 className='text-[#f15322] md:text-5xl text-2xl font-bold'
                >
                    Who We Are?
                </h1>
                <p className='w-auto md:w-[600px] mt-8 text-justify md:text-2xl font-semibold text-white'>We are proud to be the choice of top Training & Placement Officers and institutions across the country, helping streamline campus hiring processes.</p>

               {points.map((item)=>
                <div key={item.id} className='mt-12 flex items-center gap-8'>
                    <div className='w-10 h-10 p-3 border-2 border-[#f15322] text-white flex justify-center items-center rounded-full'> <FaArrowRight/></div>
                    <p className='text-white text-md md:text-2xl font-bold'>{item.point}</p>
                </div>)}
           
           </div> </div>
        </div>
    </div>
  )
}

export default WhoWeAre
