import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AllCourses() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  return (
    <div>
      <div className="w-full lg:h-[30vh] h-[20vh] flex justify-center items-end ">
        <div className="text-black w-[90%] lg:text-[45px] text-[40px]  font-bold">
          Courses
        </div>
      </div>
      <div className="w-full lg:h-[10vh] h-[3vh] flex justify-center">
        <div className="h-[0.5px] w-[90%] bg-[#F9728C]"></div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center">
        {/* -----phone------ */}

        <div className="block lg:hidden w-[90%] flex flex-row text-black gap-4 h-[10vh] items-center overflow-x-scroll">
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "all" && "bolder",
              color: category === "all" && "#F9728C",
            }}
            onClick={() => setCategory("all")}
          >
            All
          </h5>
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "laser" && "bolder",
              color: category === "laser" && "#F9728C",
            }}
            onClick={() => setCategory("laser")}
          >
            Laser Hair Removal
          </h5>
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "advancelaser" && "bolder",
              color: category === "advancelaser" && "#F9728C",
            }}
            onClick={() => setCategory("advancelaser")}
          >
            Advanced Laser
          </h5>
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "esthetics" && "bolder",
              color: category === "esthetics" && "#F9728C",
            }}
            onClick={() => setCategory("esthetics")}
          >
            Esthetics Essentials
          </h5>
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "injectable" && "bolder",
              color: category === "injectable" && "#F9728C",
            }}
            onClick={() => setCategory("injectable")}
          >
            Injectable + Filler
          </h5>
          <h5
            className="text-[15px] whitespace-nowrap"
            style={{
              fontWeight: category === "advancetreatment" && "bolder",
              color: category === "advancetreatment" && "#F9728C",
            }}
            onClick={() => setCategory("advancetreatment")}
          >
            Advanced Treatments
          </h5>
        </div>

        {/* -----phone------ */}

        {/* -----desktop----- */}
        <div class="hidden lg:flex lg:flex-col w-[20%] text-black gap-2 lg:h-[80vh] h-[10vh] lg:top-[30%] lg:sticky cursor-pointer gap-y-2">
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "all" && "bolder",
              color: category === "all" && "#F9728C",
            }}
            onClick={() => setCategory("all")}
          >
            All
          </h5>
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "laser" && "bolder",
              color: category === "laser" && "#F9728C",
            }}
            onClick={() => setCategory("laser")}
          >
            Laser Hair Removal
          </h5>
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "advancelaser" && "bolder",
              color: category === "advancelaser" && "#F9728C",
            }}
            onClick={() => setCategory("advancelaser")}
          >
            Advanced Laser
          </h5>
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "esthetics" && "bolder",
              color: category === "esthetics" && "#F9728C",
            }}
            onClick={() => setCategory("esthetics")}
          >
            Esthetics Essentials
          </h5>
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "injectable" && "bolder",
              color: category === "injectable" && "#F9728C",
            }}
            onClick={() => setCategory("injectable")}
          >
            Injectable + Filler
          </h5>
          <h5
            class="lg:text-[14.5px] text-[12px]"
            style={{
              fontWeight: category === "advancetreatment" && "bolder",
              color: category === "advancetreatment" && "#F9728C",
            }}
            onClick={() => setCategory("advancetreatment")}
          >
            Advanced Treatments
          </h5>
        </div>

        {/* -----desktop----- */}

        {category === "all" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh]  ">
            <div className="lg:w-[21%] w-[45%]  h-[35vh] flex flex-col cursor-pointer " onClick={()=>navigate("/apprentice")}>
              <img
              
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1673551535677-ZET89CECCE8XKKHLBGLC/TMD-18.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%]  text-black font-bold lg:text-[16px] text-[13px]">
                Apprentice in Training: <br /> Laser Hair Removal <br />{" "}
                Licensing
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between cursor-pointer " onClick={()=>navigate("/LaserHair")}>
              <img
              
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1675276268687-BMMXEK3UUD77OFO7OR52/image.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Laser Hair Removal <br />
                Technician License{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696601525-ZUHN73LTIXROFUODL1TV/laser-hair-removal-licensing-course.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Senior Laser Hair
                <br />
                Removal License
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1679426877783-CHIGEXQ5IMF16F1GKMGI/AdobeStock_108819014.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Professional Laser Hair
                <br /> Removal License{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1673380198427-D0WJU0R8C2FTCRAR76XU/shutterstock_1901885128%2B%25281%2529.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Continuing Education <br />
                Laser Hair Removal{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665763415451-DVYQ47LAXY61Q7S1YP9P/TLATA%2824of1%29.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Intense Pulse Light (IPL) <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665698564023-F215YGAA6Q3MXVVJ47W9/TMD-1.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Neurotoxin (Botox + Dysport) Certification{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665697797218-GH4A7P0TZQVEX1DM2BYB/TLATA%252817of1%2529.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Tissue Filler Injectable <br />
                Certification Technician License{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1701724570679-NNC3MI39HEZ1NAH0WLK3/DSC08933.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Microneedling <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664312130476-EFBZ401HVTTDXQ6E6MWT/hydro%281of1%29.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Hydrafacial <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696095857-KIO82NWGNEC75EUUUS2T/Laser-Tattoo-Removal-Austin-Texas.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Tattoo Removal <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665694262039-UVEVOLI293K7FYLG68GU/TLATA%25252820of1%252529.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Skin Resurfacing <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665695296027-IUCOYAFD9V3NPQ4530CQ/Laser-vein-removal-austin-texas.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Laser Skin <br /> Tightening/Vein & <br /> Pigment Removal{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664400945395-IDH0CXNRF0CLU36ERM8Q/shutterstock_2005959656.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Chemical Peel <br /> Certification Course
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665595860168-DS0LP12NTMSBEX2DUA7O/AA%252819of1%2529.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Wax On Wax Off <br /> Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664401468620-7CP3B5KJV8J32YZMLIS2/AJNJ-8.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Eyelash Extension <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665698564023-F215YGAA6Q3MXVVJ47W9/TMD-1.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Neurotoxin (Botox + <br /> Dysport) Certification{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665697797218-GH4A7P0TZQVEX1DM2BYB/TLATA%252817of1%2529.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Tissue Filler Injectable <br /> Certification{" "}
              </h2>
            </div>
          </div>
        )}
        {category === "laser" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh] ">
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1673551535677-ZET89CECCE8XKKHLBGLC/TMD-18.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%]  text-black font-bold lg:text-[16px] text-[13px]">
                Apprentice in Training: <br /> Laser Hair Removal <br />{" "}
                Licensing
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1675276268687-BMMXEK3UUD77OFO7OR52/image.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Laser Hair Removal <br />
                Technician License{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696601525-ZUHN73LTIXROFUODL1TV/laser-hair-removal-licensing-course.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Senior Laser Hair
                <br />
                Removal License
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1679426877783-CHIGEXQ5IMF16F1GKMGI/AdobeStock_108819014.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Professional Laser Hair
                <br /> Removal License{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1673380198427-D0WJU0R8C2FTCRAR76XU/shutterstock_1901885128%2B%25281%2529.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Continuing Education <br />
                Laser Hair Removal{" "}
              </h2>
            </div>
          </div>
        )}
        {category === "advancelaser" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh]  ">
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665763415451-DVYQ47LAXY61Q7S1YP9P/TLATA%2824of1%29.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Intense Pulse Light (IPL) <br /> Certification Course{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665696095857-KIO82NWGNEC75EUUUS2T/Laser-Tattoo-Removal-Austin-Texas.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Tattoo Removal <br /> Certification Course{" "}
              </h2>
            </div>
          </div>
        )}
        {category === "esthetics" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh]  ">
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664400945395-IDH0CXNRF0CLU36ERM8Q/shutterstock_2005959656.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Chemical Peel <br /> Certification Course
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664312130476-EFBZ401HVTTDXQ6E6MWT/hydro%281of1%29.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Hydrafacial <br /> Certification Course{" "}
              </h2>
            </div>

            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665595860168-DS0LP12NTMSBEX2DUA7O/AA%252819of1%2529.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Wax On Wax Off <br /> Course{" "}
              </h2>
            </div>
          </div>
        )}
        {category === "injectable" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh]  ">
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665698564023-F215YGAA6Q3MXVVJ47W9/TMD-1.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Neurotoxin (Botox + <br /> Dysport) Certification{" "}
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665697797218-GH4A7P0TZQVEX1DM2BYB/TLATA%252817of1%2529.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Tissue Filler Injectable <br /> Certification{" "}
              </h2>
            </div>
          </div>
        )}
        {category === "advancetreatment" && (
          <div className="lg:w-[70%] w-[90%] flex flex-wrap lg:gap-12 gap-8 lg:h-[240vh]  ">
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1665695296027-IUCOYAFD9V3NPQ4530CQ/Laser-vein-removal-austin-texas.jpg?format=2500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Laser Skin <br /> Tightening/Vein & <br /> Pigment Removal{" "}
              </h2>
            </div>

            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664400945395-IDH0CXNRF0CLU36ERM8Q/shutterstock_2005959656.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Chemical Peel <br /> Certification Course
              </h2>
            </div>
            <div className="lg:w-[21%] w-[45%] h-[35vh] flex flex-col justify-between ">
              <img
                className="h-[100%]"
                src="https://images.squarespace-cdn.com/content/v1/62cf04e8b198a72b456a17d6/1664312130476-EFBZ401HVTTDXQ6E6MWT/hydro%281of1%29.jpg?format=1500w"
                alt=""
              />
              <h2 className="h-[30%] text-black font-bold lg:text-[16px] text-[13px]">
                Hydrafacial <br /> Certification Course{" "}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllCourses;
