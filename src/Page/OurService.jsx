
import Layout from '../component/Home/Layout'
import Build from '../component/Our Service/Build'
import CareerBlue from '../component/Our Service/CareerBlue'
import Footer from '../component/Our Service/Footer'
import HeroSer from '../component/Our Service/HeroSer'
import Map from '../component/Our Service/Map'
import Purpose from '../component/Our Service/Purpose'
import ReachOut from '../component/Our Service/ReachOut'
import Swipe from '../component/Our Service/Swipe'


const OurService = () => {
  return (
   <div className="max-w-[1280px] lg:max-w-full mx-auto ">
      <Layout />
      <HeroSer/>

       <div className="">
      <Swipe /></div>
      <CareerBlue/>
      <Purpose/>
      <Build/>
      <ReachOut/>
      <Map/>
      <Footer/>
      </div>
  )
}

export default OurService
