import React from "react";
import data from "../data/properties.json";
import { Link } from "react-router-dom";

const PropertyCard = () => {
  return (
    <div className="mx-auto px-4">
      <h2 className="text-2xl font-semibold text-center my-6 text-orange-400">Property Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((property, index) => (
          <div key={index} className="rounded-lg shadow-lg p-4 bg-white relative">
            {/* Image Container */}
            <div className="relative mb-5">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="absolute bottom-2 left-2 bg-white bg-opacity-50 text-black text-sm px-2 py-1 rounded">
                {property.location}
              </div>
            </div>
            {/* Details */}
            {/* <div className="mt-3">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <p className="text-gray-500">{property.place}</p>
              <p className="text-green-700 font-semibold">₹ {property.price}</p>
              <p className="text-sm text-gray-700">Size: {property.size}</p>
              <p className="text-sm text-gray-700">Type: {property.type}</p>
              <p className={`text-sm font-semibold mb-3 ${property.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                {property.status}
              </p>
            </div> */}
            <Link to="/properties" className="bg-gray-800 hover:bg-gray-900 text-white px-2 py-1 rounded ">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
