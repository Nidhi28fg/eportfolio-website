import React from 'react'

const ServiceCard = ({ title, icon: Icon, bgColor, textColor, iconBox }) => {
    return (
        <div className='mt-10 flex gap-5 md:gap-10 items-center'>
            {/* icon */}
            <div className={`p-5 h-[110px] md:h-[150px] lg:h-[180px] w-full xl:max-w-[25vw] ${bgColor} flex gap-4 md:gap-8 rounded-3xl items-center shadow-[0px_2px_0px_1px_#d1d5db]`}>
                <div
                    className={`h-[50px] w-[65px]  md:h-[70px] md:w-[95px] lg:h-[90px] lg:w-[125px] flex justify-center items-center rounded-[50%] ${iconBox} ${textColor} `}>
                    <Icon className="text-xl md:text-3xl lg:text-4xl" />
                </div>

                {/* text */}
                <div className='w-full lg:max-w-[28vw] text-xs md:text-lg lg:text-xl flex flex-col gap-2 lg:gap-3'>
                    <h1 className='font-bold'>{title}</h1>
                </div>
            </div>


        </div>
    )
}

export default ServiceCard