import React, { useEffect, useState } from "react";
import { FaUserCog, FaVideo, FaCube, FaDumbbell, FaBrain } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { PiPiBold } from "react-icons/pi";

const iconMap = {
  FaUserCog: <FaUserCog size={40} className="text-purple-600" />,
  FaVideo: <FaVideo size={40} className="text-purple-600" />,
  FaCube: <FaCube size={40} className="text-purple-600" />,
  SiBlockchaindotcom: <SiBlockchaindotcom size={40} className="text-purple-600" />,
  MdCastForEducation: <MdCastForEducation size={40} className="text-purple-600" />,
  PiPiBold: <PiPiBold size={40} className="text-purple-600" />,
  FaDumbbell: <FaDumbbell size={40} className="text-purple-600" />,
  FaBrain: <FaBrain size={40} className="text-purple-600" />
};

function Categories() {
  const [categories, setCourses] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="text-center py-16 bg-gray-50">
      <h5 className="text-purple-600 text-sm font-semibold relative inline-block mb-3 before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-1 before:bg-purple-400 before:rounded-full after:absolute after:-right-6 after:top-1/2 after:w-4 after:h-1 after:bg-purple-400 after:rounded-full">
        Browse Categories
      </h5>
      <h1 className="text-3xl font-bold mb-10">Explore Online Courses</h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-10">
        {categories.map((course, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition">
            <div className="flex justify-center mb-3">
              {iconMap[course.icon]}
            </div>
            <h5 className="font-semibold text-lg">{course.title}</h5>
            <h6 className="text-gray-500 text-sm">{course.courses}</h6>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
