import React from "react";
import { IoIosPricetags } from "react-icons/io";

const PropertyShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Find Your New Home With Us
      </h2>

      {/* Image & Details Section */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          <img
            src="https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Property"
            className="w-[300px] h-96 object-cover object-top rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1542718786-2e81a9d3dfac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJ1aWxkaW5nfGVufDB8fDB8fHww"
            alt="Property"
            className="w-[300px] h-96 object-cover object-top rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1508066109736-172d0a808468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk2fHxidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Property"
            className="w-[300px] h-96 object-cover object-top rounded-lg shadow-md"
          />
        </div>

        {/* Property Details Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[400px]">
          <h3 className="text text-xl w-1/2 font-semibold text-gray-800 mb-2">
            Find Your New Home With Us
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis rem
            debitis quisquam officia voluptatem.
          </p>
          <div className="flex items-center space-x-4">
            <IoIosPricetags className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Sell Your Home
              </h4>
              <p className="text-gray-600">Find Us</p>
            </div>
          </div>
          {/* CTA Button */}
          <div className="mt-5 ">
            <button className="cursor-pointer bg-[#2a7748] text-white px-2 py-1 rounded shadow-md text-sm  hover:bg-[#2e4637] transition duration-300">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
