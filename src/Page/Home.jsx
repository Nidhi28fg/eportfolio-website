import Layout from "../component/Home/Layout";
import Herosec from "../component/Home/Herosec";
import HeroSec2 from "../component/Home/HeroSec2";
import WhoWeAre from "../component/Home/WhoWeAre";
import Trust from "../component/Home/Trust";
import Services from "../component/Home/Services";
import Bottom from "../component/Home/Bottom";
import HomeFeature from "../component/Home/HomeFeature";




const Home = () => {
  return (
    <div className="max-w-[1280px] lg:max-w-full mx-auto ">
      <Layout />
      <Herosec />
      <HeroSec2/>
      <WhoWeAre/>
      <HomeFeature/>
      <div className="flex flex-col gap-20 lg:gap-30">
        <Trust />
        <Services />
        <Bottom/>
      </div>
      
    </div>
  );
};

export default Home;
