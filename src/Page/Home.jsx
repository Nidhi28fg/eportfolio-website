import Layout from "../component/Home/Layout";
import Herosec from "../component/Home/Herosec";
import HeroSec2 from "../component/Home/HeroSec2";
import WhoWeAre from "../component/Home/WhoWeAre";



const Home = () => {
  return (
    <div className="max-w-[1280px] lg:max-w-[1480px] mx-auto">
      <Layout />
      <Herosec />
      <HeroSec2/>
      <WhoWeAre/>
      
    </div>
  );
};

export default Home;
