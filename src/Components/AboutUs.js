import React from "react";
import { useNavigate } from "react-router-dom";


function AboutUs() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-[100%] flex lg:flex-row flex-col lg:h-[90vh] h-[120vh] justify-center items-center  ">
        <div className="  lg:w-[55%] w-[90%] flex justify-center  text-[black] flex-col mt-[15%] lg:mt-0">
          <h1 class="  mt-[3vh] w-[90%] text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">
            We believe everyone deserves a quality education.
          </h1>
          <h1 class="  w-[95%] mt-[3vh] leading-none tracking-wide text-gray-900 md:text-xl lg:text-[15px] dark:text-black">
            More than a decade ago, the Medical Aesthetics industry reached a
            new era of growth and profitability. A boom in demand for
            professional Med Spa services was missing one thing: high-quality
            education for professionals entering the field.
          </h1>
          <h1 class="  w-[95%] mt-[3vh] leading-none tracking-wide text-gray-900 md:text-xl lg:text-[15px] dark:text-black">
          To bridge this gap, <span className="text-[#F9728C]">Simmi Aesthetics</span> was
          born, a facility to provide the highest standard of education to both
          those in the trade and those wishing to enter it. Simmi Aesthetics offered up its
          first-ever course in 2024: Laser Hair Removal. Fast forward to 2024,
          where it now houses over 25+ distinct licensing and certification
          courses, all while remaining true to its core values and standards.
          </h1>
          <h1 class="  w-[95%] mt-[3vh] leading-none tracking-wide text-gray-900 md:text-xl lg:text-[15px] dark:text-black">
          Simmi Aesthetics is immensely proud to license current and next-generation practitioners through real-world curriculum at our campus in Indore.
          </h1>
        
          {/* <h1 className="w-[70%] lg:text-[black text- cursor-pointer hover:text-[#F9728C] underline ">
            View all courses →
          </h1> */}
          <br />
        </div>
        <div className='mb-[10%] lg:mb-0  lg:w-[35%] lg:h-[70%] h-[50%] w-[90%] bg-cover   bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/46ea4bf1-108e-4f4d-a997-0e244813a4ac/AJNJ-3.jpg?format=2500w")]'></div>
      </div>
      <div className="w-[100%] flex justify-center items-center flex-col ">
        <div className="w-[90%] h-[7vh]  flex items-end ">
          <h1 class="  text-3xl font-extrabold leading-none  text-gray-900 md:text-5xl lg:text-3xl dark:text-black">
          BROWSE COURSES ⚡️
          </h1>
        </div>

        <div className="flex flex-wrap w-[97%] lg:h-[50vh] h-[150vh] justify-evenly my-8 ">
          <div onClick={()=>navigate("/apprentice")} className=" rounded-lg cursor-pointer lg:w-[20%]  flex flex-col justify-center items-center shadow-2xl ">
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1691778970445-4SW46ZY4P68IDX4BU70U/TMD-18.jpg?format=750w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Apprentice in Training: Laser Hair Removal Licensing
            </b>
          </div>
          <div onClick={()=>navigate("/laserhair")} className="rounded-lg  cursor-pointer lg:w-[20%] flex flex-col justify-center items-center shadow-2xl ">
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/db04e759-976e-4156-9f5d-470bec1ec94d/shutterstock_731004361+%281%29.jpg?format=1000w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Laser Hair Removal Technician License
            </b>
          </div>
          <div onClick={()=>navigate("/apprentice")} className=" rounded-lg cursor-pointer lg:w-[20%] w-[100%] flex flex-col justify-center items-center shadow-2xl ">
            <div className="h-[1%] bg-[#F9728C] w-[100%]"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696601525-ZUHN73LTIXROFUODL1TV/laser-hair-removal-licensing-course.jpg?format=750w)]"></div>
            <b className="h-[28%] p-3 text-black text-[18px]">
              Senior Laser Hair Removal License
            </b>
          </div>
          <div className="rounded-lg  cursor-pointer lg:w-[20%] flex flex-col justify-center items-center shadow-2xl ">
            <div className="h-[1%] bg-[#F9728C] w-full"></div>
            <div className="h-[70%] bg-cover bg-no-repeat w-full bg-[url(https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1679426812790-IZG3UVX7XXID9BB488Y4/AdobeStock_108819014.jpeg?format=1000w)]"></div>
            <b className=" h-[28%] p-3 text-black text-[18px]">
              Professional Laser Hair Removal License Exam
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
