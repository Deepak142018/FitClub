import React from "react";

const programs = [
  {
    title: "Strength Training",
    description: "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    title: "Cardio Training",
    description: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    title: "Fat Burning",
    description: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    title: "Health Fitness",
    description: "This program is designed for those who exercise only for their body fitness, not bodybuilding.",
    highlighted: true,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center uppercase mb-12">
        <span className="italic font-light">Explore our</span>{" "}
        <span className="italic font-bold">Programs</span>{" "}
        <span className="italic font-light">to shape you</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl ${
              program.highlighted
                ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            <div className="text-3xl mb-4">🏋️</div>
            <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
            <p className="text-base mb-6">{program.description}</p>
            <button className="flex items-center gap-2 text-base hover:underline">
              Join Now <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
