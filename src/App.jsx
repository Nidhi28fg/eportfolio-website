
import './App.css'
import Home from './Page/Home'
import OurService from './Page/OurService'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Aboutus from './Page/Aboutus';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/our-service" element={<OurService />} />
<Route path="/about-us" element={<Aboutus />} />

</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
