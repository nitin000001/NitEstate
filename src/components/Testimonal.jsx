import React from 'react';
import testimonal from "../data/testimonls.json";

const Testimonal = () => {
  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Client Testimonials</h2>
      
      <div className="gallery flex flex-nowrap overflow-x-auto gap-6 scrollbar-hide">
        {testimonal.map((value, index) => (
          <div key={index} className="min-w-[300px] p-4 border rounded-lg shadow-lg bg-white">
            <img src={value.image} alt={value.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-3">{value.name}</h3>
            <p className="text-gray-600">{value.place} - {value.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonal;
