import React from 'react'
import Map from '../Our Service/Map'

const Contact = () => {
  return (
    <div>
        
      <div className="flex flex-col items-center justify-center text-center p-25">
        <div className="flex items-center md:gap-5">
          <div className="w-15 border-b-2 border-b-amber-600"></div>
          <div className="text-xl">
            <p>GET IN TOUCH</p>
          </div>
          <div className="w-15 border-b-2 border-b-amber-600"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-4 text-[#ff7e56] ">
          <span className="text-[#e94d65]">Contact </span>
          Us
        </h1>
        <div className="flex gap-5 my-8 w-[80%]">
          <div>
            <p>
              Have questions or want to learn more about how EpochFolio can
              transform your institution’s career readiness programs? Reach out
              to our team—we’re here to help!
            </p>
          </div>
        </div>
      </div>
<Map/>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 m-20">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-[#ff7e56] mb-4">General Inquiries</h2>
          <p className="text-lg text-gray-700">info@epochfolio.com</p>
          <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-[#ff7e56] mb-4">Partnerships</h2>
          <p className="text-lg text-gray-700">partnerships@epochfolio.com</p>
          <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
        </div>  
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-bold text-[#ff7e56] mb-4">Support</h2>
          <p className="text-lg text-gray-700">support@epochfolio.com</p>
          <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
        </div>
        </div>
        

    </div>
  )
}

export default Contact
