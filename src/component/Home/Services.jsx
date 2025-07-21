import React from 'react'
import ServiceData from '../../data/ServiceData'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='py-2 px-5 md:px-10 lg:px-15'>
      <div className='max-w-[82vw] md:max-w-[60vw] lg:max-w-[70vw] xl:max-w-[50vw] xl:px-15 font-bold text-xl md:text-3xl lg:text-5xl'>
        <h1>Core Services <span className='text-[#FF494B]'>At a Glance</span> </h1>
      </div>
      <div className='px-5 py-10 xl:px-20 md:grid grid-cols-2 gap-15 justify-center max-w-[1400px] mx-auto'>
        {ServiceData.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            icon={item.icon}
            bgColor={item.bgColor}
            textColor={item.textColor}
            iconBox={item.iconBox} />
        ))}
      </div>
    </div>)
}

export default Services;