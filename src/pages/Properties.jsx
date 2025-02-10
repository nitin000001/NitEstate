import React from "react";
import data from "../data/properties.json";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Properties = () => {
  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center my-6 text-orange-400">
        Property Details
      </h2>
      <div className="grid grid-cols-1  gap-6">
        {data.map((property, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center rounded-lg shadow-lg p-4 bg-white"
          >
            {/* Image Section */}
            <div className="relative w-full">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                {property.location}
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-3 md:ml-4 w-full">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-500">{property.place}</p>
              <p className="text-green-700 font-semibold">₹ {property.price}</p>
              <p className="text-sm text-gray-700">Size: {property.size}</p>
              <p className="text-sm text-gray-700">Type: {property.type}</p>
              <p
                className={`text-sm font-semibold mb-3 ${
                  property.status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {property.status}
              </p>
              <Link to="/" className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition-all duration-150">
                 <IoChevronBackOutline className="inline-block items-center" />Back
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
