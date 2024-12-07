import React from "react";
import BoxReveal from "../ui/box-reveal";

const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Box Reveal Animation */}
        <BoxReveal>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Equity Pitch for Asset Manager: <br />
            <span className="text-green-500">Renewable Energy</span>
          </h1>
        </BoxReveal>

        <BoxReveal>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Capturing Alpha in the Renewable Energy Sector
          </p>
        </BoxReveal>

        {/* Call to Action */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <BoxReveal>
            <a
              href="#about"
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-md hover:bg-green-400 transition"
            >
              Learn More
            </a>
          </BoxReveal>
          <BoxReveal>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-300 transition"
            >
              Get in Touch
            </a>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
