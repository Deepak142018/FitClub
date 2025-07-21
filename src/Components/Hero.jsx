import React from "react";
import heroImage from "../assets/hero_image.png";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 lg:py-24">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <div className="bg-gray-900 inline-flex items-center rounded-full px-4 py-1 text-base text-orange-400 font-semibold">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full mr-2">THE BEST</span>
          FITNESS CLUB IN THE TOWN
        </div>
        <h1 className="text-6xl font-extrabold leading-snug">
          SHAPE <span className="text-white">YOUR</span><br />
          <span className="text-white">IDEAL BODY</span>
        </h1>
        <p className="text-gray-300 text-lg">
          In here we will help you to shape and build your ideal body and live up your life to the fullest.
        </p>
        <div className="flex gap-10 pt-6 text-lg">
          <div>
            <h2 className="text-3xl font-bold">+140</h2>
            <p>EXPERT COACHES</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">+978</h2>
            <p>MEMBERS JOINED</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">+50</h2>
            <p>FITNESS PROGRAMS</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-12 lg:mt-0">
        <img src={heroImage} alt="Hero Athlete" className="w-full max-w-md z-10 relative" />
        <div className="absolute top-0 right-0 p-4 bg-gray-900 text-white rounded">
          <div className="text-center">
            <div className="text-red-500 text-2xl">❤️</div>
            <p className="text-xs">Heart Rate</p>
            <h3 className="text-xl font-bold">116 bpm</h3>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 bg-gray-900 text-white rounded">
          <div className="text-center">
            <p className="text-xs">Calories burned</p>
            <h3 className="text-xl font-bold">220 kcal</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
