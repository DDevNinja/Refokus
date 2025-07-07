import React from 'react'
import Navbar from "./components/Navbar"
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from "./components/Products"
import Marqees from "./components/Marqees"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scroll = new LocomotiveScroll(); 
  return (
    <div className='w-full h-[100%] bg-black text-white font-{"Satoshi"}'><Navbar/>
    <Work/>
    <Products/>
    <Stripes/>
    <Marqees/>
    <Cards/>
    <Footer/>
    </div>
    
  )
}

export default App