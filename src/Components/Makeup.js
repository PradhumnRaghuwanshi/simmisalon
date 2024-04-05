import React from "react";

function Beauty() {
  return (
    <div>
      <div className="w-full lg:h-[30vh] h-[26vh] flex justify-center items-end ">
        <div className="text-black w-[80%] lg:text-[45px] text-[40px] font-bold">
          Makeup Services
        </div>
      </div>
      <div className="w-full h-[10vh] flex justify-center">
        <div className="h-[0.5px] w-[80%] bg-[#F9728C]"></div>
      </div>
      <div className="w-full flex  gap-8 flex-col items-center lg:mb-[5%]">
        
        <div className="w-[80%] lg:h-[15vh] h-[20vh] bgg flex flex-row justify-around ">
          <div className="lg:w-[70%] w-[50%] h-full flex items-center ">
            <h1 className="text-[gray] font-semibold">Eye Makeup with Lashes</h1>
          </div>
          <div className="lg:w-[15%] w-[30%] h-full flex items-center text-black">
            <h1 className="lg:text-[15px] text-[11px]">
            STARTING FROM<br />
              <span className="text-[#F9728C] font-semibold lg:text-[15px] text-[20px]">
                Rs. 2200 Onwards{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[80%] lg:h-[15vh] h-[20vh] bgg flex flex-row justify-around ">
          <div className="lg:w-[70%] w-[50%] h-full flex items-center">
            <h1 className="text-[gray] font-semibold">Eye Makeup
</h1>
          </div>
          <div className="lg:w-[15%] w-[30%] h-full flex items-center text-black">
            <h1 className="">
            STARTING FROM<br />
              <span className="text-[#F9728C] font-semibold lg:text-[15px] text-[20px]">
             
Rs. 1700 Onwards
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[80%] lg:h-[15vh] h-[20vh] bgg flex flex-row justify-around ">
          <div className="lg:w-[70%] w-[50%] h-full flex items-center">
            <h1 className="text-[gray] font-semibold">Party Makeup Premium

</h1>
          </div>
          <div className="lg:w-[15%] w-[30%] h-full flex items-center text-black">
            <h1 className="">
              STARTING FROM<br />
              <span className="text-[#F9728C] font-semibold lg:text-[15px] text-[20px]">
              Rs. 5000 Onwards{" "}
              </span>
            </h1>
          </div>
        </div>
        <div className="w-[80%] lg:h-[15vh] h-[20vh] bgg flex flex-row justify-around ">
          <div className="lg:w-[70%] w-[50%] h-full flex items-center">
            <h1 className="text-[gray] font-semibold">Party Makeup </h1>
          </div>
          <div className="lg:w-[15%] w-[30%] h-full flex items-center text-black">
            <h1 className="">
              STARTING FROM<br />
              <span className="text-[#F9728C] font-semibold lg:text-[15px] text-[20px]">
                Rs. 3000 Onwards{" "}
              </span>
            </h1>
          </div>
        </div>
      
      
        
      </div>
    </div>
  );
}

export default Beauty;
