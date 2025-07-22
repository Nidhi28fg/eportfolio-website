import React from 'react'

const SwipeContent = ({image, heading, text}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        {/* <img src={image} alt="" className='w-full h-full object-cover' /> */}
        <div>{image}</div>
        <h1 className='text-2xl font-bold text-[#ff6263]'>{heading}</h1>
        <p className='text-center'>{text}</p>
    </div>
  )
}

export default SwipeContent
