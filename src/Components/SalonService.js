import React from "react";
import { useNavigate } from "react-router-dom";

function SalonService() {
    const navigate = useNavigate();
  return (
    <div>
      <div className="w-full lg:h-[30vh] h-[20vh] flex justify-center items-end ">
        <div className="text-black w-[80%] lg:text-[45px] text-[40px]  font-bold">
          Services
        </div>
      </div>
      <div className="w-full lg:h-[10vh] h-[5vh] flex justify-center ">
        <div className="h-[0.5px] w-[80%] bg-[#F9728C]"></div>
      </div>
      <div className="flex flex-wrap w-[90%] ml-[5%] gap-10 justify-center lg:justify-start mb-[10%]">
        <div onClick={()=>navigate("/Beautyservices")} className="flex flex-col lg:h-[40vh] h-[30vh] lg:w-[30%] w-[80%] shadow-2xl cursor-pointer  ">
          <div className="h-[80%] w-full">
            <img
              className=""
              src="https://juicesalons.com/wp-content/uploads/2023/01/Beauty_service_banner-1.jpg"
              alt=""
            />
          </div>
          <div className="h-[20%] w-full bg-shadow hover:font-semibold flex justify-center items-center text-black ">
            {" "}
            <h1>Beauty</h1>{" "}
          </div>
        </div>
        <div onClick={()=>navigate("/hairservices")} className="flex flex-col lg:h-[40vh] h-[30vh] lg:w-[30%] w-[80%] shadow-2xl cursor-pointer  ">
          <div className="h-[80%] w-full">
            <img
              className="  "
              src="https://juicesalons.com/wp-content/uploads/2023/01/Hair_service_banner-1.jpg"
              alt=""
            />
          </div>
          <div className="h-[20%] w-full bg-shadow hover:font-semibold flex justify-center items-center text-black ">
            {" "}
            <h1>Hair</h1>{" "}
          </div>
        </div>
        <div onClick={()=>navigate("/makeupservices")} className="flex flex-col lg:h-[40vh] h-[30vh] lg:w-[30%] w-[80%] shadow-2xl cursor-pointer  ">
          <div className="h-[80%] w-full">
            <img
              className="  "
              src="https://juicesalons.com/wp-content/uploads/2021/06/make-up.jpg"
              alt=""
            />
          </div>
          <div className="h-[20%] w-full bg-shadow hover:font-semibold flex justify-center items-center text-black ">
            <h1>Makeup</h1>
          </div>
        </div>
        <div onClick={()=>navigate("/nailsservices")} className="flex flex-col lg:h-[40vh] h-[30vh] lg:w-[30%] w-[80%] shadow-2xl cursor-pointer  ">
          <div className="h-[80%] w-full">
            <img
              className="  "
              src="https://juicesalons.com/wp-content/uploads/2023/01/Nails_service_banner-1.jpg"
              alt=""
            />
          </div>
          <div className="h-[20%] w-full bg-shadow hover:font-semibold flex justify-center items-center text-black">
            <h1 className="">Nails</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalonService;
