import React from "react";
import { FaHome } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="mt-5 px-4 md:px-9">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <h1 className="text text-3xl md:text-4xl "><FaHome className="inline-block " /> Welcome to Your Dream Home!</h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Discover the perfect place to call home with <span className="font-semibold text-blue-600">NitEstate</span>. Whether you're looking for a luxurious villa, a modern apartment, or a peaceful countryside retreat, we have a wide range of properties to suit every lifestyle and budget.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
            alt="Interior Design"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
