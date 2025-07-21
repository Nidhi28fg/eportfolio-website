import React from 'react'
import trustData from '../../data/TrustData'
import TrustCard from './TrustCard'

const Trust = () => {
    return (
        <div className='py-2 px-5'>
            <div className='max-w-[82vw] md:max-w-[60vw] lg:max-w-[100vw] xl:max-w-[60vw] md:px-5 xl:px-25 font-bold text-xl md:text-3xl lg:text-5xl mt-10'>
                <h1>Why Colleges <span className='text-[#FF494B]'>& Companies Trust EpochFolio</span> </h1>
            </div>
            <div className='p-5 md:p-7 xl:px-35 md:grid grid-cols-2 gap-15'>
                {trustData.map((item, index) => (
                    <TrustCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        bgColor={item.bgColor}
                        textColor={item.textColor} />
                ))}
            </div>
        </div>
    )
}

export default Trust