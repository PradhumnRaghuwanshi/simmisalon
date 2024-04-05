import React from "react";
import { useNavigate } from "react-router-dom";


function LaserCourses({scroll}) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-[100%] flex justify-center items-center flex-col ">
        <div className="w-[90%]  h-[7vh] lg:mt-[7%]">
          <h1 class={`${scroll>1420 ? 'popout' : 'opacity-0'}  text-2xl font-extrabold leading-none  text-gray-900 md:text-5xl lg:text-3xl dark:text-black`}>
            LASER HAIR REMOVAL COURSES ⚡️
          </h1>
        </div>

        <div className="flex flex-wrap w-[97%] lg:h-[50vh] h-[150vh] justify-evenly ">
          <div onClick={()=>navigate("/apprentice")} className={`${scroll>1430 ? 'popout': 'opacity-0'} rounded-lg cursor-pointer lg:w-[20%]  flex flex-col justify-center items-center shadow-2xl `}>
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1691778970445-4SW46ZY4P68IDX4BU70U/TMD-18.jpg?format=750w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Apprentice in Training: Laser Hair Removal Licensing
            </b>
          </div>
          <div onClick={()=>navigate("/laserhair")} className={`${scroll>1480 ? 'popout': 'opacity-0'} rounded-lg  cursor-pointer lg:w-[20%] flex flex-col justify-center items-center shadow-2xl `}>
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/db04e759-976e-4156-9f5d-470bec1ec94d/shutterstock_731004361+%281%29.jpg?format=1000w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Laser Hair Removal Technician License
            </b>
          </div>
          <div className={`${scroll>1500 ? 'popout': 'opacity-0'} rounded-lg cursor-pointer lg:w-[20%] w-[100%] flex flex-col justify-center items-center shadow-2xl `}>
            <div className="h-[1%] bg-[#F9728C] w-[100%]"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696601525-ZUHN73LTIXROFUODL1TV/laser-hair-removal-licensing-course.jpg?format=750w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Senior Laser Hair Removal License
            </b>
          </div>
          <div className={`rounded-lg ${scroll>1520 ? 'popout': 'opacity-0'}  cursor-pointer lg:w-[20%] flex flex-col justify-center items-center shadow-2xl `}>
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1679426812790-IZG3UVX7XXID9BB488Y4/AdobeStock_108819014.jpeg?format=1000w)]"></div>
            <b className=" h-[28%] p-3 text-black text-[18px]">
              Professional Laser Hair Removal License Exam
            </b>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-col">
        <div className="w-[90%] h-[20vh] flex  items-end mb-[3%]">
          <h1 class={`${scroll>1940 && "popout"} tracking-wider text-4xl font-extrabold leading-none  text-gray-900 md:text-5xl lg:text-4xl dark:text-black`}>
            COURSES BY CATEGORY
          </h1>
        </div>
        <div className="w-[90%] lg:h-[30vh] h-[80vh] flex lg:flex-row flex-col justify-evenly ">
          <div className="lg:w-[32%] lg:h-full h-[30%] w-full flex flex-col justify-evenly ">
            <h1 className="text-black w-full text-[25px] font-black h-[30%]">
              Laser ⚡️
            </h1>
            <p className="w-full text-black tracking-tight h-[50%] text-[15px] text-balance">
              Get certified in laser hair removal + explore advanced laser
              courses to expand your skillset and offer more to patients and
              employers.
            </p>
            <p className="h-[20%] underline lg:text-black text-[#F9728C]">
              Advanced Laser courses →
            </p>
          </div>
          <div className="lg:w-[32%] lg:h-full h-[30%] w-full flex flex-col justify-evenly  ">
            <h1 className="text-black w-full text-[25px] font-black h-[30%]">
              Injectables 💉
            </h1>
            <p className="w-full text-black tracking-tight h-[50%] text-[15px] text-balance">
              For medical professionals seeking hands-on training with
              Neurotoxins (Botox + Dysport) and Filler. Inject real models under
              the guidance of an experienced aesthetic injector.
            </p>
            <p className="h-[20%] underline lg:text-black text-[#F9728C]">
              Injectables courses →
            </p>
          </div>
          <div className="lg:w-[32%] lg:h-full h-[30%] w-full flex flex-col justify-evenly ">
            <h1 className="text-black w-full text-[25px] font-black h-[30%]">
              Esthetics Essentials 💦
            </h1>
            <p className="w-full text-black tracking-tight h-[50%] text-[15px] text-balance">
              Brush up on the basics (facials, waxing, lash + brow design, and
              more) or explore new treatments like microneedling, HydraFacial,
              IPL, chemical peels, and dermaplaning.
            </p>
            <p className="h-[20%] underline lg:text-black text-[#F9728C]">
              Esthetics Essentials courses →
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[30vh] h-[50vh] bg-[#F9728C] flex lg:flex-row flex-col justify-evenly mt-10 items-center">
        <div className="lg:w-[30%] w-[100%] flex justify-center items-center ">
          <h1 class=" text-6xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          LASER HAIR <br /> <span>REMOVAL</span>  <br /> SERVICES ⚡️
          </h1>
        </div>
        <div className="lg:w-[40%] w-[90%] h-full flex justify-center flex-col ">
          <h1 className="text-black h-[15%] lg:text-[17px] ">Considering hair removal alternatives?</h1>
          <h1 className="text-black h-[40%] lg:text-[17px] ">
            Explore pricing, treatment highlights, and more on our Texas Laser &
            Aesthetics Med Spa site.{" "}
          </h1>
          <button onClick={()=>navigate("/courses")} class=" h-[20%] lg:w-[40%] w-[90%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
            TAKE ME THERE<i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaserCourses;
