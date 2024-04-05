import React from "react";

function Apprentice() {
  return (
    <div>
      
      <div className="w-full flex lg:flex-row flex-col lg:h-screen ">
        
        <div className='lg:w-[50%] w-[100%] lg:h-full h-[55vh] lg:bg-cover bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1673551535677-ZET89CECCE8XKKHLBGLC/TMD-18.jpg?format=1500w")]'></div>
        <div className="lg:w-[45%] w-[95%] h-full flex flex-col gap-5 ">
          
          <div className=" text-black lg:mt-[15%] lg:text-[50px] text-[30px] font-bold lg:leading-[50px] leading-[35px] ml-[2.5%] ">

            Apprentice in Training: <br /> Laser Hair Removal <br /> Licensing
          </div>
          <div className=" text-black text-[14px] ml-[2.5%] ">
            A Laser Hair Removal license issued by the Texas Department of
            Licensing and Regulation (TDLR) is required before performing a
            laser hair removal service. Our curriculum fulfills the educational
            requirements set in place by TDLR and provides a strong foundation
            of knowledge necessary to operate a cosmetic laser safely and
            independently.
          </div>
          <div className=" text-black text-[14px] ml-[2.5%] ">
            The Laser Hair Removal program begins with a 40-hour theory lesson
            titled:{" "}
            <span className="font-bold text-[#F9728C]">
              Apprentice in Training
            </span>
            . This class will be self-paced online starting July 2023.
          </div>
          <div className=" text-black text-[14px] ml-[2.5%]  ">
            Apprentice in Training is the first portion of training required by
            TDLR to obtain your Laser Hair Removal License. It is also the first
            cours e we encourage this course for students who desire t o enter
            the Medical Aesthetics industry, as it lays the foundation for all
            cosmetic laser devices.
          </div>
          <div className=" text-black text-[14px] ml-[2.5%]  ">
            <span className="font-bold text-[#F9728C]">
              {" "}
              Course Highlights:
            </span>{" "}
            <br />
            + Offline <br />+ Prerequisites: High School diploma or GED
          </div>
        </div>
      </div>

    </div>
  );
}

export default Apprentice;
