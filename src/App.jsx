
import './App.css'
import Home from './Page/Home'
import OurService from './Page/OurService'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Page/Aboutus';
import Blog from './Page/Blog';
// import ContactUs from './Page/ContactUs';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/our-service" element={<OurService />} />
<Route path="/about-us" element={<Aboutus />} />
<Route path="/blog" element={<Blog />} />
{/* <Route path="/contact-us" element={<ContactUs />} /> */}

</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
