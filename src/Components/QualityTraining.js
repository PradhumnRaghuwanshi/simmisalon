import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CourseSection({ src, alt }) {

  const navigate = useNavigate()

  const [gifSrc, setGifSrc] = useState("https://www.thefrenchbeautyacademy.edu.au/wp-content/uploads/2022/07/Our-Courses-3mb.gif");

  useEffect(() => {
    const gif = document.getElementById('gif');
    gif.addEventListener('ended', () => {
      setGifSrc('');
      setTimeout(() => setGifSrc(src), 100); // Delay before restarting the gif
    });

    return () => {
      gif.removeEventListener('ended', () => {
        setGifSrc('');
        setTimeout(() => setGifSrc(src), 100); // Delay before restarting the gif
      });
    };
  }, [src]);
  return (
    <div>
      <div className="w-[100%] flex lg:flex-row flex-col h-[80vh] items-center">
        <div className="lg:w-[50%] lg:h-[100%] h-[60%] w-[100%] bg-cover flex justify-center items-center">
          <img
            className="w-[60%] h-[80%]"
            src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/2552ef5d-da42-4e8c-8477-5f2639592ed7/DSC02176+%281%29.jpg?format=2500w"
            alt=""
          />
        </div>
        <div className=" lg:h-full lg:w-[50%] w-[90%] flex justify-center   text-[black] flex-col gap-4">
          <h1 class=" w-[70%] text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">
            <span className="text-[#F9728C]">Quality </span>
            Training
          </h1>
          <h1 class=" lg:w-[70%] w-[95%] tracking-wider leading-none  text-gray-900 md:text-xl lg:text-[20px] dark:text-black">
            Our philosophy is all about creating a community of like-minded
            people who are passionate about our industry.
          </h1>

          <button class=" lg:w-[40%] w-[95%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[white]">
            LEARN MORE<i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
      <div className=" w-[100%] flex lg:flex-row flex-col h-[80vh] justify-center items-center">
        <div className="  lg:w-[45%] w-[90%] flex justify-center  text-[black] flex-col gap-5">
          <h1 class="   w-[70%] text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">
            Invest in your career today.
          </h1>
          <h1 class="  w-[95%] mt-[3vh] leading-none tracking-wider  text-gray-900 md:text-xl lg:text-[20px] dark:text-black">
            Whether you’re looking to add to your skill set to advance in your
            career or start your own company, we are here to train you to do
            just that.
          </h1>
          <button class=" lg:w-[40%] w-[95%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[white]">
            BOOK ACADEMY TOUR<i class="bx bx-right-arrow-alt"></i>
          </button>
          <br />
        </div>
        <div className=' lg:mt-0 mt-10 flex justify-end  lg:w-[45%] lg:h-[100%] h-[50%] w-[90%] bg-contain bg-no-repeat bg-[url("")]'>
          <img
            className="w-[50%] h-[80%]"
            src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/b1d1d9f8-c11b-4923-9d85-4e538799382f/TR-1.jpg?format=2500w"
            alt=""
          />

          <img
            className="w-[50%] h-[80%] mt-[-15%] ml-[-2%] "
            src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/66b30ba9-0c4c-4746-b20f-c49119822c73/Jaw+Filler-1.jpg?format=2500w"
            alt=""
          />
        </div>
      </div>
      <div className="w-full lg:h-[30vh] h-[50vh] bg-[#F9728C] flex lg:flex-row flex-col justify-evenly mt-10 items-center">
      <div className="lg:w-[30%] w-[90%] flex justify-center items-center ">
          <h1 class=" text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black  lg:pt-0 pt-2 ">
            Interested in Simmi Aesthetic Academy?
          </h1>
        </div>
        <div className="lg:w-[40%] w-[90%] h-full flex justify-center flex-col gap-3 ">
          <h1 className="text-black h-[15%] lg:text-[17px] ">
            {" "}
            Simmi Aesthetic is a modern beauty Academy.
          </h1>
          <h1 className="text-black h-[40%] lg:text-[17px] ">
          Simmi Aesthetic seeks to combine traditional education with modern
            practices, trends and products. Simmi Aesthetic students will have the
            confidence to take their careers in the direction that is right for
            them.
          </h1>
          <button onClick={()=>navigate("/courses")} class=" h-[20%] lg:w-[40%] w-[90%] btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
            TAKE ME THERE<i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
       
      </div>
      <div className="w-[100%] flex lg:flex-row flex-col lg:h-[80vh] h-[100vh] items-center">
        <div className="lg:w-[50%] lg:h-[100%] h-[60%] w-[100%] bg-cover flex justify-center items-center">
          
        <img className="" id="gif" src={gifSrc} alt={alt} />

   


      </div>
        <div className=" lg:h-full lg:w-[50%] w-[90%] flex justify-center   text-[black] flex-col gap-4">
          <h1 class=" w-[70%] text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">
      
            Our Most Popular Course:
The Future of Beauty
          </h1>
          <h1 class=" lg:w-[70%] w-[95%] tracking-wider leading-none  text-gray-900 md:text-xl lg:text-[17px] dark:text-black">
          Our most popular course for a career path in this exciting field. Nine out of ten students in this program secure employment before graduation! Combining the best-practice practical skills and theoretical knowledge including important business understandings required to be an exceptional professional in the industry, you’ll join the elite group of in-demand French Academy Alumni in just 12 months!
          </h1>

         
        </div>
      </div>
   
    </div>
  );
}

export default CourseSection;
