
import './App.css'
import Home from './Page/Home'
import OurService from './Page/OurService'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Page/Aboutus';
import Blog from './Page/Blog';
import Solution from './Page/Solution';
import Reference from './Page/Reference';
import Contact from './Page/Contact';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/our-service" element={<OurService />} />
<Route path="/about-us" element={<Aboutus />} />
<Route path="/blog" element={<Blog />} />
<Route path="/solution" element={<Solution />} />
<Route path="/Reference" element={<Reference />} />
<Route path="/contact" element={<Contact />} />"


</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
