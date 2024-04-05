import React from 'react'
import { useNavigate } from 'react-router-dom'

function Intro() {
   const navigate = useNavigate();



  return (
    <main  className="main flex items-center justify-center h-[100vh] bg-[url(https://muffingroup.com/blog/wp-content/uploads/2022/12/hair-salons.png)]">
   <section class="section banner banner-section">
      <div class="container banner-column">
         {/* <img class="banner-image" src="https://i.ibb.co/vB5LTFG/Headphone.png" alt="banner"/> */}
         <div class="banner-inner">
            <h1 class="heading-xl popout">Experience <span className='text-[#F9728C]'>Salon</span> Like Never Before</h1>
            <p class="paragraph popout">
            Elevate your skills and transform your career with our premium courses and services.
            </p>
            <div className='flex justify-evenly'>
            <button onClick={()=>navigate("/courses")} class="btn w-[45%] bg-[white] text-[#F9728C] hover:bg-[#F9728C] hover:text-[white] px-4 btn-inline">
            Explore Courses<i class="bx bx-right-arrow-alt"></i>
            </button>
            <button onClick={()=>navigate("/salonservices")}  class=" w-[45%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[white]">
            Discover Services<i class="bx bx-right-arrow-alt"></i>
            </button>
            </div>
            
         </div>
         <div class="banner-links">
            <a href="#" title=""><i class="fa fa-facebook hover:text-[#F9728C]" aria-hidden="true"></i></a>
            <a href="#" title=""><i class="fa fa-instagram hover:text-[#F9728C]" aria-hidden="true"></i></a>
            <a href="#" title=""><i class="fa fa-youtube-play hover:text-[#F9728C]" aria-hidden="true"></i></a>
            
         </div>
      </div>
   </section>
</main>
  )
}

export default Intro
