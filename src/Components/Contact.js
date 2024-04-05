import React from "react";

function Contact() {
  return (
    <>
      {/* ---Desktop--- */}
      <div className="hidden lg:flex w-full justify-center flex-col items-center ">
        <div className="w-[90%] h-[10vh] mt-[10%]">
          <h1 className="text-black text-5xl font-bold">Contact Us.</h1>
        </div>
        <div className="w-[90%] flex lg:flex-row flex-col-reverse ">
          <div className="map-section lg:w-[60%] w-[100%]  flex gap-5 flex-col">
            <h3 className="  ">
              <a className="text-black underline text-[14px]" href="mailto:simmiaesthetic@gmail.com">
                simmiaesthetic@gmail.com
              </a>{" "}
              <br />
              <a className="text-black underline text-[14px]" href="tel:+919584888999">95848 88999</a>
            </h3>

            <h3 className=" text-black text-[14px]">
              Plot No 19, 2nd Flr, Samar Park Colony, Nipania, Indore, Madhya
              Pradesh 452010
            </h3>
            <iframe
              className="lg:w-[80%] w-[100%] h-[40vh] border-0 mb-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1004187024378!2d75.91944117527291!3d22.761654326014817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d92b43c8eb1%3A0xf21a31abad6d19e1!2sThe%20London%20Salon%20Nipania!5e0!3m2!1sen!2sin!4v1712208753916!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="field-section lg:w-[40%] w-[100%] flex gap-5 flex-col mb-10">
            <div className="w-full flex  justify-between">
              <div className="flex flex-col w-[49%] ">
                <label htmlFor="" className="text-black text-[14px]">
                  First Name <span className="text-[12px]">(required)</span>
                </label>
                <input
                  style={{ borderColor: "gray" }}
                  type="text"
                  className="custom-input border h-[6vh] "
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="" className="text-black text-[14px]">
                  Last Name
                </label>
                <input
                  style={{ borderColor: "gray" }}
                  type="text"
                  className="border h-[6vh]"
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Phone <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Email <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Subject <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Message <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[10vh]"
              />
            </div>
            <button className="h-[20%] lg:w-[40%]  btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
              SEND<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
      {/* ---Desktop--- */}

      {/* ---Phone--- */}
      <div className="lg:hidden w-full flex justify-center flex-col items-center ">
        <div className="w-[90%] h-[10vh] mt-[30%]">
          <h1 className="text-black text-3xl font-bold">Contact Us.</h1>
        </div>
        <div className="w-[90%] flex lg:flex-row flex-col">
          <div className="map-section lg:w-[60%] w-[100%]  flex gap-5 flex-col">
            <h3 className="  ">
              <a className="text-black underline text-[14px]" href="mailto:simmiaesthetic@gmail.com">
                simmiaesthetic@gmail.com
              </a>{" "}
              <br />
              <a className="text-black underline text-[14px]" href="tel:+919584888999">95848 88999</a>
            </h3>

            <h3 className=" text-black text-[14px]">
              Plot No 19, 2nd Flr, Samar Park Colony, Nipania, Indore, Madhya
              Pradesh 452010
            </h3>
          </div>
          <div className="field-section lg:w-[40%] w-[100%] flex gap-5 flex-col my-10">
            <div className="w-full flex  justify-between">
              <div className="flex flex-col w-[49%] ">
                <label htmlFor="" className="text-black text-[14px]">
                  First Name <span className="text-[12px]">(required)</span>
                </label>
                <input
                  style={{ borderColor: "gray" }}
                  type="text"
                  className="custom-input border h-[6vh] "
                />
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="" className="text-black text-[14px]">
                  Last Name
                </label>
                <input
                  style={{ borderColor: "gray" }}
                  type="text"
                  className="border h-[6vh]"
                />
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Phone <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Email <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Subject <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[6vh]"
              />
            </div>
            <div className="flex flex-col w-[100%]">
              <label htmlFor="" className="text-black text-[14px]">
                Message <span className="text-[12px]">(required)</span>
              </label>
              <input
                style={{ borderColor: "gray" }}
                type="text"
                className="border h-[10vh]"
              />
            </div>
            <button className="h-[20%] lg:w-[40%]  btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
              SEND<i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <iframe
            className="lg:w-[80%] w-[100%] h-[40vh] border-0 mb-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1004187024378!2d75.91944117527291!3d22.761654326014817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d92b43c8eb1%3A0xf21a31abad6d19e1!2sThe%20London%20Salon%20Nipania!5e0!3m2!1sen!2sin!4v1712208753916!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* ---Phone--- */}
    </>
  );
}

export default Contact;



// import React from "react";

// function Contact() {
//   return (
//     <>

//     {/* ---desktop--- */}
//     <div className="  w-full flex justify-center flex-col items-center ">
//       <div className="w-[90%] h-[10vh] mt-[10%]">
//         <h1 className="text-black text-5xl font-bold">Contact Us.</h1>
//       </div>
//       <div className="w-[90%] flex lg:flex-row flex-col-reverse ">
//         <div className="map-section lg:w-[60%] w-[100%]  flex gap-5 flex-col">
//           <h3 className="  ">
//             <a className="text-black underline text-[14px]" href="mailto:simmiaesthetic@gmail.com">
//             simmiaesthetic@gmail.com
//             </a>{" "}
//             <br />
//             <a className="text-black underline text-[14px]" href="tel:+91 9584888999">95848 88999</a>
//           </h3>

//           <h3 className=" text-black text-[14px]">
//             Plot No 19, 2nd Flr, Samar Park Colony, Nipania, Indore, Madhya
//             Pradesh 452010
//           </h3>
//           <iframe
//             className="lg:w-[80%] w-[100%] h-[40vh] border-0 mb-10"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1004187024378!2d75.91944117527291!3d22.761654326014817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d92b43c8eb1%3A0xf21a31abad6d19e1!2sThe%20London%20Salon%20Nipania!5e0!3m2!1sen!2sin!4v1712208753916!5m2!1sen!2sin"
//             allowfullscreen=""
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//         <div className="field-section lg:w-[40%] w-[100%] flex gap-5 flex-col mb-10">
//           <div className="w-full flex  justify-between">
//             <div className="flex flex-col w-[49%] ">
//               <label htmlFor="" className="text-black text-[14px]">
//                 First Name <span className="text-[12px]">(required)</span>
//               </label>
//               <input
//                 style={{ borderColor: "gray" }}
//                 type="text"
//                 className="custom-input border h-[6vh] "
//               />
//             </div>
//             <div className="flex flex-col w-[49%]">
//               <label htmlFor="" className="text-black text-[14px]">
//                 Last Name
//               </label>
//               <input
//                 style={{ borderColor: "gray" }}
//                 type="text"
//                 className="border h-[6vh]"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col w-[100%]">
//             <label htmlFor="" className="text-black text-[14px]">
//               Phone <span className="text-[12px]">(required)</span>
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="border h-[6vh]"
//             />
//           </div>
//           <div className="flex flex-col w-[100%]">
//             <label htmlFor="" className="text-black text-[14px]">
//               Email <span className="text-[12px]">(required)</span>
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="border h-[6vh]"
//             />
//           </div>
//           <div className="flex flex-col w-[100%]">
//             <label htmlFor="" className="text-black text-[14px]">
//               Subject <span className="text-[12px]">(required)</span>
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="border h-[6vh]"
//             />
//           </div>
//           <div className="flex flex-col w-[100%]">
//             <label htmlFor="" className="text-black text-[14px]">
//               Message <span className="text-[12px]">(required)</span>
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="border h-[10vh]"
//             />
//           </div>
//           <button class=" h-[20%] lg:w-[40%]  btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
//             SEND<i class="bx bx-right-arrow-alt"></i>
//           </button>
//         </div>
//       </div>
//     </div>
// {/* ---desktop--- */}



// {/* ---Phone--- */}
//     <div className="lg:hidden w-full flex justify-center flex-col items-center ">
//     <div className="w-[90%] h-[10vh] mt-[30%]">
//       <h1 className="text-black text-3xl font-bold">Contact Us.</h1>
//     </div>
//     <div className="w-[90%] flex lg:flex-row flex-col">
//       <div className="map-section lg:w-[60%] w-[100%]  flex gap-5 flex-col">
//         <h3 className="  ">
//           <a className="text-black underline text-[14px]" href="mailto:simmiaesthetic@gmail.com">
//           simmiaesthetic@gmail.com
//           </a>{" "}
//           <br />
//           <a className="text-black underline text-[14px]" href="tel:+91 9584888999">95848 88999</a>
//         </h3>
    
//         <h3 className=" text-black text-[14px]">
//           Plot No 19, 2nd Flr, Samar Park Colony, Nipania, Indore, Madhya
//           Pradesh 452010
//         </h3>
       
//       </div>
//       <div className="field-section lg:w-[40%] w-[100%] flex gap-5 flex-col my-10">
//         <div className="w-full flex  justify-between">
//           <div className="flex flex-col w-[49%] ">
//             <label htmlFor="" className="text-black text-[14px]">
//               First Name <span className="text-[12px]">(required)</span>
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="custom-input border h-[6vh] "
//             />
//           </div>
//           <div className="flex flex-col w-[49%]">
//             <label htmlFor="" className="text-black text-[14px]">
//               Last Name
//             </label>
//             <input
//               style={{ borderColor: "gray" }}
//               type="text"
//               className="border h-[6vh]"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col w-[100%]">
//           <label htmlFor="" className="text-black text-[14px]">
//             Phone <span className="text-[12px]">(required)</span>
//           </label>
//           <input
//             style={{ borderColor: "gray" }}
//             type="text"
//             className="border h-[6vh]"
//           />
//         </div>
//         <div className="flex flex-col w-[100%]">
//           <label htmlFor="" className="text-black text-[14px]">
//             Email <span className="text-[12px]">(required)</span>
//           </label>
//           <input
//             style={{ borderColor: "gray" }}
//             type="text"
//             className="border h-[6vh]"
//           />
//         </div>
//         <div className="flex flex-col w-[100%]">
//           <label htmlFor="" className="text-black text-[14px]">
//             Subject <span className="text-[12px]">(required)</span>
//           </label>
//           <input
//             style={{ borderColor: "gray" }}
//             type="text"
//             className="border h-[6vh]"
//           />
//         </div>
//         <div className="flex flex-col w-[100%]">
//           <label htmlFor="" className="text-black text-[14px]">
//             Message <span className="text-[12px]">(required)</span>
//           </label>
//           <input
//             style={{ borderColor: "gray" }}
//             type="text"
//             className="border h-[10vh]"
//           />
//         </div>
//         <button class=" h-[20%] lg:w-[40%]  btn btn-darken btn-inline hover:bg-[#F9728C] hover:text-[black]">
//           SEND<i class="bx bx-right-arrow-alt"></i>
//         </button>
//       </div>
//       <iframe
//           className="lg:w-[80%] w-[100%] h-[40vh] border-0 mb-10"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1004187024378!2d75.91944117527291!3d22.761654326014817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d92b43c8eb1%3A0xf21a31abad6d19e1!2sThe%20London%20Salon%20Nipania!5e0!3m2!1sen!2sin!4v1712208753916!5m2!1sen!2sin"
//           allowfullscreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//         ></iframe>
//     </div>
//     </div>
//     {/* ---Phone--- */}
//     </>
//   );
// }

// export default Contact;
