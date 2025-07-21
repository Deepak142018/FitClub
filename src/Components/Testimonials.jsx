import React from "react";
import image1 from "../assets/testimonial.jpeg";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="px-8 py-16 grid lg:grid-cols-2 items-center gap-8"
    >
      {/* Left text */}
      <div className="space-y-5">
        <h4 className="text-orange-400 uppercase font-bold text-sm">
          Testimonials
        </h4>
        <h2 className="text-4xl font-bold text-white">
          WHAT THEY SAY ABOUT US
        </h2>
        <p className="text-gray-300 text-[17px] leading-relaxed">
          I made the right choice by choosing the Fitclub and by choosing the
          right plan and program I already achieved my ideal body!
        </p>
        <p className="text-orange-500 font-semibold text-lg">
          MATHEW HENDRICKSON - <span className="text-white">ENTREPRENEUR</span>
        </p>
        <div className="text-2xl space-x-4 text-white">⬅ ➡</div>
      </div>

      {/* Right image */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64">
          <img
            src={image1}
            alt="User"
            className="rounded-xl shadow-2xl w-full h-full object-cover"
          />
          <div className="absolute border-4 border-orange-500 -top-4 -left-4 w-full h-full z-[-1] rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
