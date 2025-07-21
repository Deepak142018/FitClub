import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Programs from "./Components/Programs";
import WhyUs from "./Components/WhyUs";
import Plans from "./Components/Plans";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-orange-700 text-white">
      <Navbar />
      <Hero />
      <Programs />
      <WhyUs />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
