import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D"
              alt="Real Estate Agent"
              className="w-full  h-96 object-cover object-top rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Hi, I'm <span className="text-orange-500">Nitin Maurya</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I am a dedicated <span className="font-semibold text-gray-800">real estate agent</span> helping clients buy, sell, and invest in properties. With deep knowledge of the market and a passion for finding the perfect home, I ensure a seamless and stress-free experience for my clients.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Whether you're looking for your dream home or an investment opportunity, I’m here to guide you every step of the way. Let’s make real estate simple and rewarding together!
            </p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
