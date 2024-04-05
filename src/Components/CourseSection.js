import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function CourseSection() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(0)
  const handleScroll = ()=>{
    setScroll(window.scrollY)
  }
  window.addEventListener('scroll', handleScroll)
  return (
    <div>
      <div className="w-[100%] flex lg:flex-row flex-col h-[100vh] items-center">
        <div className={`lg:w-[50%] ${scroll > 0 ? 'popout' : 'opacity-0'} lg:h-[100%] h-[60%] w-[100%] bg-cover bg-[url("https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/4b0f46a1-d0e6-4f6e-922d-6405a0e04579/shutterstock_1626625408.jpg?format=2500w")]`}></div>
        <div className="  lg:w-[50%] w-[90%] lg:items-center flex justify-center  text-[black] flex-col">
          <h1 id="check" className={`mt-[3vh] ${scroll > 170 ? 'popout' : 'opacity-0'} w-[70%] text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black`}>
            THE PREMIER <br /> DESTINATION FOR <br /> ADVANCED MED <br /> SPA
            <span className="text-[#F9728C]"> TRAINING</span>.
          </h1>
          <h1 class={`${scroll > 220 ? 'popout' : 'opacity-0'} lg:w-[70%] w-[95%] tracking-widest mt-[3vh] leading-none  text-gray-900 md:text-xl lg:text-[20px] dark:text-black`}>
            Our Training Academy is home to the industry’s most advanced Med Spa
            + Spa Training. All of our advanced courses are taught by medical +
            licensed professionals.{" "}
          </h1>
          <div className={`${scroll > 225 ? 'popout' : 'opacity-0'} flex lg:w-[100%] justify-evenly mt-[2%] lg:flex-row flex-col lg:h-[8vh] h-[20vh]`}>
            <button onClick={()=>navigate("/courses")} class=" lg:w-[40%] w-[95%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[white]">
              View Courses<i class="bx bx-right-arrow-alt"></i>
            </button>
            <button onClick={()=>navigate("/salonservices")} class="lg:w-[40%] w-[95%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[white]">
              Discover Services<i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
