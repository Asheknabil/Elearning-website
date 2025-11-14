import React, { useState, useMemo, useEffect } from 'react';
import { Star, Dot, User } from 'lucide-react';



const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 transition-colors duration-300 ${
            i < fullStars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);
  const badgeColor = course.badge === 'New' ? 'bg-purple-600' : 'bg-green-600';
  const hoverBorderColor = course.category === 'Design' ? 'border-purple-500' : 'border-blue-500';

  return (
    <div
      className="relative p-4 bg-white rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 sm:flex-row flex-col">
        <div
          className={`relative flex-shrink-0 w-full sm:w-1/3 aspect-video sm:aspect-square overflow-hidden rounded-xl p-2 transition-all duration-500 ${
            isHovered ? `border-4 ${hoverBorderColor}` : 'border-4 border-transparent'
          }`}
        >
          <img
            src={course.image}
            alt={course.title}
            className={`w-full h-full object-cover rounded-lg transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {course.badge && (
            <div className={`absolute top-4 left-4 ${badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
              {course.badge}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between w-full sm:w-2/3">
          <div className="space-y-2">
            <div className="flex items-center text-sm font-medium text-gray-500">
              <span>{course.seats} Seats</span>
              <Dot className="w-4 h-4 text-gray-400" />
              <span>{course.semesters} Semesters</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{course.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <StarRating rating={course.rating} />
                <span className="text-sm font-semibold text-gray-600">
                  {course.rating.toFixed(1)}/{course.totalRatings} rating
                </span>
              </div>
              <span className="text-2xl font-extrabold text-[#063441]">${course.price}</span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <button className="px-4 py-2 text-sm font-semibold border border-2 border-[#0fb6e3] text-black rounded-lg hover:bg-[#16748e] hover:text-white shadow-md transition-all duration-300 hover:shadow-lg">
                Enroll Now
              </button>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>{course.instructor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('Design');
  const [showAll, setShowAll] = useState(false);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/card.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const flatCourses = Object.keys(data).flatMap(category => 
          data[category].map(course => ({
            ...course,
            category,
          }))
        );
        
        setAllCoursesData(flatCourses);
      } catch (error) {
        console.error("Error fetching course data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []); 

  const categories = ['Design', 'Development', 'Academic', 'E-Learning'];

  const currentCategoryCourses = useMemo(() => {
    return allCoursesData.filter(course => course.category === activeFilter);
  }, [activeFilter, allCoursesData]);

const displayedCourses = useMemo(() => {
  if (showAll) {
    return allCoursesData;
  } else {
    return currentCategoryCourses.slice(0, 4);
  }
}, [showAll, currentCategoryCourses, allCoursesData]);

const hasMore = allCoursesData.length > 4;


  const totalCoursesInActiveCategory = currentCategoryCourses.length;

  if (loading) {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center font-['Inter']">
            <p className="text-xl text-[#0a4d5f] font-semibold">Loading courses from card.json...</p>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto mb-12 text-center mt-20">
        <h4 className="text-[#0fb6e3] ms-6 text-xl font-semibold relative inline-block mb-3 before:absolute before:-left-6 before:top-1/2 before:w-4 before:h-1 before:bg-blue-500 before:rounded-full after:absolute after:-right-6 after:top-1/2 after:w-4 after:h-1 after:bg-blue-500 after:rounded-full text-center">LATEST COURSES</h4>

        <div className="flex flex-col lg:flex-row justify-between lg:items-end">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-10 font-extrabold text-black/80 text-start leading-snug">
            {showAll
              ? 'All Courses from All Categories'
              : `Pick Our Latest Courses in ${activeFilter}`}
          </h1>


          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}

                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
                  activeFilter === category
                    ? 'border border-2 border-[#0fb6e3] inline-flex items-center gap-2 text-black font-medium px-6 py-3 rounded-full hover:bg-[#0fb6e3] transition-all duration-300'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}


            {hasMore && (
              <button
                onClick={() => setShowAll(prev => !prev)}
                className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-md ${
                    showAll ? 'bg-[#0a4d5f] shadow-blue-300/50' : 'group bg-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300'
                }`}
              >
                {showAll ? 'Show Less' : `Show More`}
              </button>
            )}

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {displayedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedCourses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center p-10 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-500">No courses found for "{activeFilter}" category.</p>
          </div>
        )}

        {showAll && totalCoursesInActiveCategory > 4 && (
          <div className="text-center mt-12 text-lg font-medium text-gray-600">
            Showing all {totalCoursesInActiveCategory} courses in the {activeFilter} category.
          </div>
        )}
      </div>
    </div>
  );
}