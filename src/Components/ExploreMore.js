import React from "react";
import { Collapse, initTWE } from "tw-elements";

function CourseSection({scroll}) {
  return (
    <div>
      <div className="w-[100%] flex lg:flex-row flex-col h-[80vh] justify-center items-center">
        <div className="  lg:w-[45%] w-[90%] flex justify-center  text-[black] flex-col">
          <h1 class={`${scroll>900 ? 'popout' : 'opacity-0'} mt-[3vh] w-[70%] text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black`}>
            EXPLORE OUR NEW TRAINING OPTIONS
          </h1>
          <h1 class={`${scroll>1070 ? 'popout' : 'opacity-0'}  w-[95%] mt-[3vh] leading-none tracking-widest text-gray-900 md:text-xl lg:text-[20px] dark:text-black`}>
            Personalized learning designed to take your skills to the next
            level.
          </h1>
          <h1 className="w-[70%] lg:text-[black text- cursor-pointer hover:text-[#F9728C] underline ">
            View all courses →
          </h1>
          <br />
        </div>
        <div className={`${scroll>720 ? 'popout' : 'opacity-0'}  lg:w-[45%] lg:h-[100%] h-[50%] w-[90%] bg-cover bg-[url("https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/9be4b6c6-f156-4338-802f-73beb7583403/DSC05668.jpg?format=2500w")]`}></div>
      </div>
    </div>
  );
}

export default CourseSection;
