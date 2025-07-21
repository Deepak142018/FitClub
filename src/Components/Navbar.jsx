import React from "react";
import gymLogo from "../assets/A Gymlogo.jpeg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 bg-transparent text-white font-semibold text-lg">
      <div className="flex items-center gap-3">
        <img src={gymLogo} alt="Logo" className="w-12" />
        <span className="text-2xl font-bold">THE FIT CLUB</span>
      </div>
      <ul className="hidden md:flex gap-8 text-lg">
        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
        <li><a href="#programs" className="hover:text-orange-400">Programs</a></li>
        <li><a href="#whyus" className="hover:text-orange-400">Why Us</a></li>
        <li><a href="#plans" className="hover:text-orange-400">Plans</a></li>
        <li><a href="#testimonials" className="hover:text-orange-400">Testimonials</a></li>
      </ul>
      <a href="#join">
        <button className="bg-white text-black font-bold px-6 py-2 rounded text-sm">
          Join Now
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
