import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Apprentice from './Pages/Apprentice'
import LaserHair from './Pages/LaserHair'
import Blog from './Pages/Blog'
import BeautyServices from './Pages/BeautyServices'
import HairServices from './Pages/HairServices'
import MakeupServices from './Pages/MakeupServices'
import NailsServices from './Pages/NailsServices'
import SalonServices from './Pages/SalonServices'
import ContactUs from './Pages/ContactUs'
import Aboutus from './Pages/Aboutus'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <HashRouter>
<Header></Header>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Apprentice' element={<Apprentice/>}></Route>
        <Route path='/LaserHair' element={<LaserHair/>}></Route>
        <Route path='/Blog' element={<Blog/>}></Route>
        <Route path='/BeautyServices' element={<BeautyServices/>}></Route>
        <Route path='/HairServices' element={<HairServices/>}></Route>
        <Route path='/MakeupServices' element={<MakeupServices/>}></Route>
        <Route path='/NailsServices' element={<NailsServices/>}></Route>
        <Route path='/Aboutus' element={<Aboutus/>}></Route>
        <Route path='/SalonServices' element={<SalonServices/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App
