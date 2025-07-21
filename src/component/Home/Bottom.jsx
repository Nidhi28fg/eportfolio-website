import React from 'react'
import Footer from './Footer';


const Bottom = () => {
    return (
        <div>
            <div className='w-full px-5 md:p-10 h-[30vh] md:h-[40vh] lg:h-[50vh] text-white text-xs md:text-xl bg-[#1B2229] flex flex-col gap-5 md:gap-10 lg:gap-15 items-center justify-center'>
                <h1 className='text-xl md:text-3xl lg:text-5xl'>Where <span className='text-[#FF725E]'>We Work</span></h1>
                <p>Headquarted in India with outreach across <span className='text-[#FF725E]'>Gujrat, Maharashtra, Telangana, Tamil Nadu, Delhi,</span>and expanding fast</p>
                <span className='text-[8px] md:text-sm xl:text-lg text-gray-200'>100% Digital Delivery with regional on-ground support as needed</span>
            </div>

            <div className='w-full px-5 md:p-10 h-[35vh] md:h-[45vh] lg:h-[55vh] text-white text-xs md:text-xl bg-[#FF494B] flex flex-col gap-5 md:gap-10 lg:gap-15 items-center justify-center'>
                <h1 className='text-xl md:text-3xl lg:text-5xl'>Let's Build the Future Together</h1>
                <div className='max-w-[70vh] text-center mx-auto'>
                    <p className='text-xs md:text-lg lg:text-xl'>
                        <span className='block'>Whether you're a company hiring talent or a college</span>
                        <span className='block max-w-[24ch] mx-auto'>improving placement </span>
                        <span className='block'>performance, EpochFolio is your growth partner.</span>
                    </p>
                </div>
              {/* button */}
              <button className='text-[#FF494B] px-4 py-2 md:px-9 md:py-4 lg:px-10 lg:py-5 rounded-md md:rounded-2xl bg-white'>Partner With Us</button>
              
            </div>
            <Footer/>
        </div>
    )
}

export default Bottom