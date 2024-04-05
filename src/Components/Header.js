

import React, { useState } from "react";
import SimmiLogo from "../Images/Simmi_Aesthetics.png";
import SA from "../Images/SA.png";
import { useNavigate } from "react-router-dom";

function Header({scroll}) {
   const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  const scrollHandler = () => {
    setScrollY(window.scrollY);
  };
  document.addEventListener("scroll", scrollHandler);

 
  return (
    <header
      style={{ backgroundColor: scrollY >= 200 ? "#fcf2f4" : "white" }}
      class={`${scrollY >= 200 ? "fixed" : "absolute"} ${
        scrollY >= 200 ? "header-down" : null
      } z-10 w-full overflow-hidden`}
      id="header"
    >
      <nav className="navbar container">
        <img className="lg:w-[20%] pt-5 cursor-pointer w-[40%]" src={SimmiLogo}  onClick={()=>navigate("/")}></img>
        <div class="burger" id="burger">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </div>
        <div class="menu" id="menu">
          <ul class="menu-inner">
            <li class="menu-item">
            <a href="#Courses" class="menu-link"
             
             >
               Courses
             </a>
             
            </li>
            <li class="menu-item" >
            <a href="#salonservices" class="menu-link">
                Salon Services
              </a>
            </li>
            <li class="menu-item">
              <a href="#Blog" class="menu-link">
                Blog
              </a>
            </li>
            <li class="menu-item">
              <a href="#aboutus" class="menu-link">
                About Us
              </a>
            </li>
            <li class="menu-item">
              <a href="#contactus" class="menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a  href="tel:+91 9584888999" className="bst menu-block bg-[#F9728C]">
          Call Us <i class="fa fa-phone ml-2" aria-hidden="true"></i>
          
        </a>
      </nav>
    </header>
  );
}

export default Header;
