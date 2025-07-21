import React from 'react'
import logo from '../../assets/epochfolio.png'
import { IoMdCall, IoMdPlay } from 'react-icons/io'
import { IoMail } from 'react-icons/io5'
import { TbWorld } from 'react-icons/tb'
import { FaLocationDot } from 'react-icons/fa6'
import { GoHorizontalRule } from 'react-icons/go'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import arrowUp from '../../assets/arrowUp.png'

const Footer = () => {
    return (
        <div>
            <div className='p-2 md:p-5 xl:p-10'>
                <div >
                    <img src={logo} alt="" className='lg:h-[15vh]' />
                </div>
            </div>
            <div className='px-10 md:px-0 md:flex md:justify-evenly'>
                {/* first */}
                <div className='flex flex-col gap-5 px-10 lg:px-0 text-sm md:text-[14px] lg:text-xl max-w-[60vh]'>
                    <p className='max-w-[30vw]'>Organically grow holistic world view of dispute innovaion via empowerment.</p>
                    {/* with icons */}
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-4 text-[#FF494B] items-center'>
                            <IoMdCall />
                            <span className='text-[#000]'>90167 31145</span>
                        </div>
                        <div className='flex gap-4 text-[#FF494B] items-center'>
                            <IoMail />
                            <span className='text-[#000]'>90167 31145</span>
                        </div>
                        <div className='flex gap-4 text-[#FF494B] items-center'>
                            <TbWorld />
                            <span className='text-[#000]'>90167 31145</span>
                        </div>
                    </div>
                </div>

                {/* second */}
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5 items-center'>
                        <IoMdPlay />
                        <span className='text-[#FF494B]'>Partner with Us</span>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <IoMdPlay />
                        <span className='text-[#FF494B]'>Partner with Us</span>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <IoMdPlay />
                        <span className='text-[#FF494B]'>Partner with Us</span>
                    </div>
                </div>

                {/* second */}
                <div className=' font-bold'>
                    <div className='flex items-center'>
                        <FaLocationDot className='text-[#FF494B]' />
                        <span>Maharashtra</span>
                    </div>
                    <div className='flex items-center'>
                        <FaLocationDot className='text-[#FF494B]' />
                        <span >Delhi</span>
                    </div>
                    <div className='flex items-center'>
                        <FaLocationDot className='text-[#FF494B]' />
                        <span >Gujrat</span>
                    </div><div className='flex items-center'>
                        <FaLocationDot className='text-[#FF494B]' />
                        <span >Tamil Nadu</span>
                    </div>
                    <div className='flex items-center'>
                        <FaLocationDot className='text-[#FF494B]' />
                        <span >Telangana</span>
                    </div>
                </div>

                {/* fourth */}
                <div className='flex flex-col gap-3'>
                    <div className='flex font-semibold items-center gap-2'>
                        <GoHorizontalRule className='font-extrabold' />
                        <span>GET IN TOUCH</span>
                    </div>
                    <span>Advantage Social Links</span>
                    <p className='max-w-[20vw] text-xs lg:text-[16px]'>Taking Seamless key performance indicators offline to maximize the long tail</p>
                    <div className='flex gap-1'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />

                    </div>
                </div>

            </div>
            {/* final border */}
            <div className='w-full mt-5 md:mt-10 text-[8px] md:text-sm lg:text-lg lg:p-10 font-semibold bg-[#FF494B] flex justify-between p-4 md:px-8 text-[#000]'>
                <span>copyright by Epochfolio. All rights reserved</span>
                <div className='flex gap-3 items-center'>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">SERVICES</a>
                    <a href="#">PORTFOLIO</a>
                    <a href="#">BLOG</a>
                    <a href="#">SHOP</a>
                    <img src={arrowUp} alt="" className='h-3 md:h-6'/>
                </div>
            </div>
        </div>

    )
}

export default Footer