import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { PiShoppingCartLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Categories", "About", "Courses", "Contact"];

  return (
    <header className="w-full">

      <div className="hidden lg:flex bg-[#04222a] text-white text-sm justify-between items-center px-8 py-2">
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

        {/* <div className="flex items-center gap-4">
          <CiSearch className="bg-white text-black p-2 rounded-full text-lg" />
          <CiHeart className="bg-white text-black p-2 rounded-full text-lg" />
          <PiShoppingCartLight className="bg-white text-black p-2 rounded-full text-lg" />
        </div> */}
      </div>

      <nav className="flex justify-between items-center px-10 py-4 shadow-sm bg-black">

        <div className="flex items-center gap-2 text-white">
          <div className="bg-[#0fb6e3] p-2 rounded-full font-bold text-2xl">E</div>
          <h2 className="font-bold text-2xl">School</h2>
        </div>

        <ul className="hidden lg:flex gap-8 text-white font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={
                idx === 1 ? "/categories" :
                idx === 2 ? "/about" :
                idx === 3 ? "/courses" :
                "/"
              }
              className="relative group hover:text-[#0fb6e3] cursor-pointer"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0fb6e3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
            </Link>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button className="group border border-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full hover:bg-[#0fb6e3] transition-all duration-300">
            Sign In
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 transition-transform" />
          </button>

          <button className="group bg-[#0fb6e3] inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300">
            Sign Up
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 transition-transform" />
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="text-white w-7 h-7" />
            ) : (
              <Menu className="text-white w-7 h-7" />
            )}
          </button>
        </div>

      </nav>

      
      {menuOpen && (
        <div className="lg:hidden bg-black text-white px-4 py-4 flex flex-col gap-4 items-center">
          <ul className="flex flex-col gap-4 text-sm sm:text-base md:text-lg items-center">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={
                  idx === 1 ? "/categories" :
                  idx === 2 ? "/about" :
                  idx === 3 ? "/courses" :
                  "/"
                }
                className="hover:text-[#0fb6e3] cursor-pointer text-center"
              >
                {item}
              </Link>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-2 w-full items-center">

            <button className="group border border-[#0fb6e3] inline-flex items-center gap-2 text-white text-sm sm:text-base md:text-lg px-5 py-2 rounded-full hover:bg-[#0fb6e3] transition-all duration-300">
              Sign In
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
            </button>

            <button className="group bg-[#0fb6e3] inline-flex items-center gap-2 text-white text-sm sm:text-base md:text-lg px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-99 transition-all duration-300">
              Sign Up
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
            </button>

          </div>
        </div>
      )}

    </header>
  );
};

export default Navbar;
