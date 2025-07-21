
import './App.css'
import Home from './Page/Home'
import OurService from './Page/OurService'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/our-service" element={<OurService />} />
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
