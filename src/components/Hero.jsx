import React from "react";

import hero1 from "../assets/home/hero_img_1.png";
import hero2 from "../assets/home/hero_img_2.png";
import hero3 from "../assets/home/hero_img_3.png";
import hero4 from "../assets/home/hero_img_4.png";
import hero5 from "../assets/home/hero_img_5.png";
import hero6 from "../assets/home/hero_img_6.png";
import About from "./About";
import Categories from "./Categories";
import Courses from "./Courses";


const Hero = () => {
  return (
   <>
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-b from-white to-purple-50">

      <div className="hidden md:flex flex-col items-center gap-6 relative">
        <img src={hero1} alt="student" className="lg:w-44 rounded-full shadow-lg" />
        <img src={hero2} alt="student" className="lg:w-32 rounded-full shadow-lg" />
        <img src={hero3} alt="student" className="lg:w-28 rounded-full shadow-lg" />
      </div>

      <div className="text-center md:text-left max-w-2xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug text-black/75 relative inline-block">
          Find The{" "}
          <span className="relative px-3 py-1 text-white rounded-lg font-bold bg-[#0fb6e3] before:absolute before:content-[''] before:-top-2 before:left-0 before:w-full before:h-full before:rounded-[50%] before:bg-[#7cd9f2] before:opacity-50 before:-z-10">
            Best Platform
          </span>{" "}
          For <br /> Online Courses
        </h1>

        <p className="text-gray-600 mt-6">
          Far far away, behind the word mountains, far from the Consonantia,
          there live the blind texts. Separated they marks grove right at the
          coast.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 mt-8 justify-center md:justify-start">
          <button className="bg-[#0fb6e3] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-purple-700 transition">
            Admission Now
          </button>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              <img
                src={hero1}
                alt="student1"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <img
                src={hero2}
                alt="student2"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <img
                src={hero3}
                alt="student3"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <h4 className="font-bold text-[#7cd9f2]">2k Students</h4>
              <p className="text-gray-500 text-sm">Join Our Online Class</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-6 relative mt-10 md:mt-0">
        <img src={hero4} alt="student" className="w-44 rounded-full shadow-lg" />
        <img src={hero5} alt="student" className="w-32 rounded-full shadow-lg" />
        <img src={hero6} alt="student" className="w-28 rounded-full shadow-lg" />
      </div>
    </section>
    <Categories />
    <About />
    <Courses />
    
   </>
  );
};

export default Hero;
