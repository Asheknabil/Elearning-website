import React from "react";
import { ArrowUpRight } from "lucide-react";
import about1 from "../assets/home/about_1.jpg";
import about2 from "../assets/home/about_2.jpg";
import { TiTick } from "react-icons/ti";


const About = () => { 
  return (
    <section className="bg-white w-full py-16 px-4 sm:px-6 md:px-10 lg:px-8 grid md:grid-cols-2 gap-10 items-center">

      <div className="relative flex justify-center">

        <img
          src={about1}
          alt="Trainer"
          className="w-[260px] sm:w-[300px] md:w-[320px] h-auto object-cover rounded-2xl shadow-lg relative z-10"
        />
    

        <img
          src={about2}
          alt="Student"
          className="absolute bottom-[-40px] right-[-20px] sm:bottom-[-50px] sm:right-[-30px] w-[130px] sm:w-[160px] md:w-[180px] h-auto object-cover rounded-2xl border-4 border-white shadow-xl z-20"
        />

      </div>


      <div className="text-center md:text-left mt-14 md:mt-0">

        <div className="flex justify-center md:justify-start items-center gap-3 mb-3">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <h5 className="text-blue-600 font-semibold text-base sm:text-lg uppercase">
            About Us
          </h5>
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
        </div>


        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
          Experience Over 10 years <br className="hidden sm:block" /> with Online
          Educations
        </h2>


        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Far far away, behind the word mountains, far from the Consonantia,
          there live the blind texts. Separated they marks grove right at the
          coast of the Semantics a large language ocean.
        </p>


        <ul className="space-y-2 mb-8 text-gray-800 text-sm sm:text-base">

          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-blue-600">
                <TiTick />
            </span>
            Expert Trainers
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-blue-600">
                <TiTick />
            </span>
            Online Remote Learning
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-blue-600">
                <TiTick />
            </span>
            Lifetime Access
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-blue-600">
                <TiTick />
            </span>
            Guide Sheet All Courses
          </li>

        </ul>


        <button className="group inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-blue-700 transition-all duration-300">
          More About
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default About;
