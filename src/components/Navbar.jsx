import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="w-full">

      <div className="hidden lg:flex bg-black text-white text-sm justify-between items-center px-8 py-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#0fb6e3]" />
            <span>Call: 016 37 652 900</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#0fb6e3]" />
            <span>Email: asheknabil11@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <CiSearch className="bg-white text-black p-2 rounded-full text-lg" />
          <CiHeart className="bg-white text-black p-2 rounded-full text-lg" />
          <PiShoppingCart className="bg-white text-black p-2 rounded-full text-lg"/>
          
        </div>
      </div>


      <nav className="flex justify-between items-center px-10 py-4 shadow-sm">

        <div className="flex items-center gap-2">
          <div className="bg-[#0fb6e3] p-2 rounded-full text-white font-bold text-xl">E</div>
          <h2 className="font-bold text-2xl text-white">Educve</h2>
        </div>


        <ul className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-purple-600 cursor-pointer">Home</Link>
          <Link to="/categories" className="hover:text-purple-600 cursor-pointer">Categories</Link>
          <Link to="/about" className="hover:text-purple-600 cursor-pointer">About</Link>
          <Link to="/courses" className="hover:text-purple-600 cursor-pointer">Courses</Link>
          <Link to="/" className="hover:text-purple-600 cursor-pointer">Contact</Link>
        </ul>


        <div className="flex items-center gap-4">
          <button className="border border-black rounded-full px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-600 hover:text-white transition">
            Sign in <span>↗</span>
          </button>
          <button className="border border-transparent bg-[#0fb6e3] text-white rounded-full px-5 py-2 font-medium flex items-center gap-2 hover:bg-purple-700 transition">
            Sign up <span>↗</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
