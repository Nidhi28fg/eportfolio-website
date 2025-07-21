import React from 'react'

const TrustCard = ({ title, description, icon: Icon, bgColor, textColor }) => {
    return (
        <div className='mt-10 w-full flex gap-5 md:gap-10 items-center'>
            {/* icon */}
            <div
                className={`h-[65px] w-[75px]  md:h-[75px] md:w-[95px] lg:h-[85px] lg:w-[95px] flex justify-center items-center rounded-[50%] border ${bgColor} ${textColor} `}
                style={{
                    boxShadow: `0 0 10px 1px ${
                      textColor.match(/\[#([A-Fa-f0-9]{6})\]/)
                        ? `#${textColor.match(/\[#([A-Fa-f0-9]{6})\]/)[1]}`
                        : '#000000'
                    }`,
                  }}            >
                <Icon className="text-xl md:text-3xl lg:text-4xl" />
            </div>

            {/* text */}
            <div className='w-full lg:max-w-[28vw] text-xs md:text-xl lg:text-3xl flex flex-col gap-2 lg:gap-3'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-[10px] md:text-[14px] lg:text-[18px]'>{description}</p>
            </div>
        </div>
    )
}

export default TrustCard
