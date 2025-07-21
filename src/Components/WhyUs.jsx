import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nbImage from "../assets/nb.png";
import adImage from "../assets/adidas.png";
import nikeImage from "../assets/nike.png";

const WhyUs = () => {
  return (
    <section id="whyus" className="px-8 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Left Images */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-[600px] mx-auto lg:mx-0">
        <img
          src={image1}
          alt="gym1"
          className="w-full h-full object-cover rounded-lg shadow-md row-span-2"
        />
        <img
          src={image2}
          alt="gym2"
          className="w-full h-full object-cover rounded-lg shadow-md col-span-2"
        />
        <img
          src={image3}
          alt="gym3"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <img
          src={image4}
          alt="gym4"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center h-full">
        <h3 className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
          Some Reasons
        </h3>
        <h2 className="text-4xl font-extrabold text-white my-4 leading-snug">
          Why Choose Us?
        </h2>
        <ul className="space-y-3 text-white text-base">
          <li>✅ Over 140+ Expert Coaches</li>
          <li>✅ Train Smarter and Faster Than Before</li>
          <li>✅ 1 Free Program for New Members</li>
          <li>✅ Reliable Partners</li>
        </ul>

        <div className="flex gap-6 mt-8 text-gray-400">
          <img src={nbImage} alt="NB" className="h-6" />
          <img src={adImage} alt="Adidas" className="h-6" />
          <img src={nikeImage} alt="Nike" className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
