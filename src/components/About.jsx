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
  className="absolute bottom-[-40px] md:right-[-10px] sm:right-[80px] lg:right-[120px] w-[130px] sm:w-[160px] md:w-[180px] h-auto object-cover rounded-2xl border-4 border-white shadow-xl z-20" />


      </div>


      <div className="text-center md:text-left mt-14 md:mt-0">

        <h4 className="text-[#0fb6e3] ms-6 text-xl font-semibold relative inline-block mb-3 before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-1 before:bg-blue-500 before:rounded-full after:absolute after:-right-6 after:top-1/2 after:w-4 after:h-1 after:bg-blue-500 after:rounded-full">
        About Us
        </h4>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black/80 mb-4 leading-snug">
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
            <span className="text-black/80 text-3xl">
                <TiTick />
            </span>
            Expert Trainers
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-black/80 text-3xl">
                <TiTick />
            </span>
            Online Remote Learning
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-black/80 text-3xl">
                <TiTick />
            </span>
            Lifetime Access
          </li>
          <li className="flex justify-center md:justify-start items-center gap-2">
            <span className="text-black/80 text-3xl">
                <TiTick />
            </span>
            Guide Sheet All Courses
          </li>

        </ul>

        <button className="group bg-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300">
          More About
          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default About;
