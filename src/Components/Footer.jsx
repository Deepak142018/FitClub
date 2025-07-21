import React from "react";
import insta from '../assets/instagram.png'

const Footer = () => {
  return (
    <footer className="px-8 py-16 text-center space-y-8">
      <h2 className="text-3xl font-bold">
        READY TO <span className="text-white">LEVEL UP</span> YOUR BODY WITH US?
      </h2>
      <div className="flex justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your Email Address here"
          className="px-4 py-2 rounded bg-gray-700 text-white placeholder-white"
        />
        <button className="bg-orange-500 px-4 py-2 rounded font-bold text-white">
          Join now
        </button>
      </div>
      <div className="flex justify-center gap-6 text-white text-2xl">
  <a href="https://wa.me/8660106697" target="_blank" rel="noreferrer">
    <i className="fab fa-whatsapp"></i>
  </a>
  <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
</div>

      <div className="font-bold">THE FIT CLUB</div>
    </footer>
  );
};

export default Footer;
