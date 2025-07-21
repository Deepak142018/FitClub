import React from "react";

const plans = [
  {
    name: "Basic Plan",
    price: 25,
    features: [
      "2 hours of excercises",
      "Free consultation to coaches",
      "Access to The Community",
    ],
  },
  {
    name: "Premium Plan",
    price: 30,
    highlighted: true,
    features: [
      "5 hour of excercises",
      "Free consultation of Coaches",
      "Access to minibar",
    ],
  },
  {
    name: "Pro Plan",
    price: 45,
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="px-8 py-16 text-center">
      {/* ✅ Heading Section */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to <span className="text-orange-500">start your journey</span>{" "}
        now with us?
      </h2>
      <p className="text-gray-300 mb-12">
        Choose the best plan that fits your fitness goal.
      </p>

      {/* ✅ Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transition-transform transform hover:scale-105 shadow-md ${
              plan.highlighted
                ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            <h3 className="text-lg font-bold mb-2 uppercase">{plan.name}</h3>
            <h2 className="text-4xl font-bold mb-4">${plan.price}</h2>
            <ul className="space-y-2 mb-4 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <a href="#" className="text-sm underline">
              See more benefits →
            </a>
            <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded">
              Join now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
