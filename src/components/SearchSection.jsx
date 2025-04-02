import React from "react";
import { FaSearch } from "react-icons/fa";

const categories = [
  "All Cameras & Photography",
  "Stylish Outfits",
  "Jewellery",
  "HouseHolds",
  "Footwear",
  "Accessories",
];

const SearchSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-8">
      {/* Heading */}
      <h2 className="text-center text-sm md:text-xl font-semibold mb-4">Looking For Something Else</h2>

      {/* Search Bar */}
      <div className="flex justify-center ml-11">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className=  "w-[84%] bg-white md:w-full py-2 pl-4 pr-12  rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <button className="absolute right-13 md:right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
            <FaSearch size={16} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 text-[12px] bg-white rounded-full hover:bg-gray-200 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
