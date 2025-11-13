import React, { useState, useMemo, useEffect } from 'react';
import { Star, Dot, User } from 'lucide-react';

// ---------------- Star Rating Component ----------------
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          // ক্লাস স্ট্রিং ফিক্সড
          className={`w-4 h-4 transition-colors duration-300 ${
            i < fullStars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

// ---------------- Course Card ----------------
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
        {/* Image */}
        <div
          // ক্লাস স্ট্রিং ফিক্সড
          className={`relative flex-shrink-0 w-full sm:w-1/3 aspect-video sm:aspect-square overflow-hidden rounded-xl p-2 transition-all duration-500 ${
            isHovered ? `border-4 ${hoverBorderColor}` : 'border-4 border-transparent'
          }`}
        >
          <img
            // JSON ডেটা অনুযায়ী 'image' কি (key) ব্যবহার করা হয়েছে
            src={course.image}
            alt={course.title}
            // ক্লাস স্ট্রিং ফিক্সড
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

        {/* Text Section */}
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
              {/* JSON ডেটা অনুযায়ী 'price' কি (key) ব্যবহার করা হয়েছে */}
              <span className="text-2xl font-extrabold text-purple-600">${course.price}</span>
            </div>
            <div className="flex items-center justify-between pt-4">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg">
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

// ---------------- Main Component ----------------
export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('Design');
  // 'showAll' state "Show More" / "Show Less" নিয়ন্ত্রণ করবে
  const [showAll, setShowAll] = useState(false);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // /card.json থেকে ডেটা আনার জন্য useEffect
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/card.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // JSON স্ট্রাকচার ফ্ল্যাট করে প্রতিটি কোর্সে 'category' কী (key) যুক্ত করা হয়েছে
        const flatCourses = Object.keys(data).flatMap(category => 
          data[category].map(course => ({
            ...course,
            category, // কোর্সের ক্যাটাগরি সেট করা হলো
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

  // ১. সক্রিয় ক্যাটাগরির জন্য সমস্ত কোর্স ফিল্টার করা
  const currentCategoryCourses = useMemo(() => {
    return allCoursesData.filter(course => course.category === activeFilter);
  }, [activeFilter, allCoursesData]);

  // ২. প্রদর্শিত কোর্সগুলি নির্ধারণ করা (৪টি বা সবগুলি)
  const displayedCourses = useMemo(() => {
    // showAll false হলে প্রথম ৪টি কোর্স দেখাবে, অন্যথায় সব দেখাবে।
    return showAll ? currentCategoryCourses : currentCategoryCourses.slice(0, 4);
  }, [showAll, currentCategoryCourses]);

  const totalCoursesInActiveCategory = currentCategoryCourses.length;
  // সক্রিয় ক্যাটাগরিতে ৪টির বেশি কোর্স আছে কিনা তা পরীক্ষা করা হলো
  const hasMore = totalCoursesInActiveCategory > 4;

  if (loading) {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-center justify-center font-['Inter']">
            <p className="text-xl text-purple-600 font-semibold">Loading courses from card.json...</p>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-['Inter']">
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-purple-600 font-bold mb-2">// LATEST COURSES</p>

        <div className="flex flex-col lg:flex-row justify-between lg:items-end">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight max-w-lg mb-6 lg:mb-0">
            Pick Our Latest Courses and Build your Skills
          </h1>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false); // ক্যাটাগরি পরিবর্তন করলে আবার ৪টি দেখানো হবে
                }}
                // ক্লাস স্ট্রিং ফিক্সড
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
                  activeFilter === category
                    ? 'bg-purple-600 text-white shadow-purple-400/50'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}

            {/* Show More / Show Less বাটন লজিক */}
            {hasMore && (
              <button
                onClick={() => setShowAll(prev => !prev)}
                // showAll স্টেটের উপর ভিত্তি করে ডাইনামিক স্টাইলিং
                className={`px-6 py-2 rounded-full font-semibold text-white transition-all duration-300 shadow-md ${
                    showAll ? 'bg-red-500 hover:bg-red-600 shadow-red-400/50' : 'bg-green-500 hover:bg-green-600 shadow-green-400/50'
                }`}
              >
                {showAll
                  ? 'Show Less'
                  : `Show More (${totalCoursesInActiveCategory - 4} more)`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
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

        {/* সব কোর্স দেখানো হলে মোট সংখ্যা প্রদর্শন করা হবে */}
        {showAll && totalCoursesInActiveCategory > 4 && (
          <div className="text-center mt-12 text-lg font-medium text-gray-600">
            Showing all {totalCoursesInActiveCategory} courses in the {activeFilter} category.
          </div>
        )}
      </div>
    </div>
  );
}