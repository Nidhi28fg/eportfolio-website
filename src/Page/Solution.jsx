import React from 'react'
import Solution from '../component/Solution/Solution'
import Layout from '../component/Home/Layout'
import Footer from '../component/Our Service/Footer'

const SolutionPage = () => {
  return (
    <div className="max-w-[1280px] lg:max-w-full mx-auto ">
        <Layout/>
        <Solution/>
        <Footer/>
    </div>
  )
}

export default SolutionPage;
