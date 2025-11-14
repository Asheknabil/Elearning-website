import React from "react";

import hero1 from "../assets/home/hero_img_1.png";
import hero2 from "../assets/home/hero_img_2.png";
import hero3 from "../assets/home/hero_img_3.png";
import hero4 from "../assets/home/hero_img_4.png";
import hero5 from "../assets/home/hero_img_5.png";
import hero6 from "../assets/home/hero_img_6.png";
import hero7 from "../assets/avatar_1.png";
import hero8 from "../assets/avatar_2.png";
import hero9 from "../assets/avatar_3.png";

import About from "./About";
import { CiCirclePlus } from "react-icons/ci";
import Categories from "./Categories";
import Courses from "./Courses";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#F8FAFC]">

        <div className="hidden lg:flex flex-col items-center gap-6 relative">
          <img src={hero1} className="lg:w-44 rounded-full shadow-lg" />
          <img src={hero2} className="lg:w-32 rounded-full shadow-lg" />
          <img src={hero3} className="lg:w-28 rounded-full shadow-lg" />
        </div>

        <div className="text-center md:text-center max-w-2xl z-10">

          <h1 className="leading-snug text-black/75 font-extrabold text-4xl md:text-5xl lg:text-5xl text-center">
            {/* Small devices */}
            <span className="block md:hidden">Find The</span>
            <span className="block md:hidden relative px-3 py-1 text-white rounded-lg bg-[#0fb6e3]
                            before:absolute before:content-[''] before:-top-2 before:left-0 
                            before:w-full before:h-full before:rounded-[50%] 
                            before:bg-[#7cd9f2] before:opacity-50 before:-z-10">
              Best Platform
            </span>
            <span className="block md:hidden">Online Courses</span>

            {/* Medium devices */}
            <span className="hidden md:inline lg:hidden">
              Find The{" "}
              <span className="relative px-3 py-1 text-white rounded-lg bg-[#0fb6e3]
                              before:absolute before:content-[''] before:-top-2 before:left-0 
                              before:w-full before:h-full before:rounded-[50%] 
                              before:bg-[#7cd9f2] before:opacity-50 before:-z-10">
                Best Platform
              </span>{" "}
              For Online Courses
            </span>

            {/* Large devices */}
            <span className="hidden lg:inline">
              Find The{" "}
              <span className="relative px-3 py-1 text-white rounded-lg bg-[#0fb6e3]
                              before:absolute before:content-[''] before:-top-2 before:left-0 
                              before:w-full before:h-full before:rounded-[50%] 
                              before:bg-[#7cd9f2] before:opacity-50 before:-z-10">
                Best Platform
              </span>
              <br />
              Online Courses
            </span>
          </h1>


          <p className="text-gray-600 mt-6">
            Far far away, behind the word mountains, far from the Consonantia,
            there live the blind texts.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mt-8 justify-center md:justify-center">
            <button className="group bg-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300">
              Addmission Now
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3 items-center relative">

                <img src={hero7} className="w-9 h-9 rounded-full border-2 border-white" />
                <img src={hero8} className="w-9 h-9 rounded-full border-2 border-white" />

                <div className="relative">
                  <img
                    src={hero9}
                    className="w-9 h-9 rounded-full border-2 border-white opacity-50"
                  />
                  <CiCirclePlus className="absolute inset-0 m-auto bg-black/65 rounded-[50%] p-4 text-white" />
                </div>

              </div>

              <div>
                <h4 className="font-bold text-[#7cd9f2]">2k Students</h4>
                <p className="text-gray-500 text-sm">Join Our Online Class</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-center gap-6 mt-10 md:mt-0">
          <img src={hero4} className="w-44 rounded-full shadow-lg" />
          <img src={hero5} className="w-32 rounded-full shadow-lg" />
          <img src={hero6} className="w-28 rounded-full shadow-lg" />
        </div>
      </section>

      <Categories />
      <About />
      <Courses />
    </>
  );
};

export default Hero;
