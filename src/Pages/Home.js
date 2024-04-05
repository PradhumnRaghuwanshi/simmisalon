import React, {useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Intro from '../Components/Intro'
import CourseSection from '../Components/CourseSection'
import ExploreMore from '../Components/ExploreMore'
import LaserCourses from '../Components/LaserCourses'
import QualityTraining from '../Components/QualityTraining'


function Home() {
  const [scroll, setScroll] = useState(0)
  const handleScroll = ()=>{
    setScroll(window.scrollY)
  }
  window.addEventListener('scroll', handleScroll)
  return (
    <div>
        
        <Intro></Intro>
        <CourseSection></CourseSection>
        <ExploreMore scroll={scroll}></ExploreMore>
        <LaserCourses scroll={scroll}></LaserCourses>
        <QualityTraining scroll={scroll}></QualityTraining>
     

      
    </div>
  )
}

export default Home
