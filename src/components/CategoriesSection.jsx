import React from "react";
import image1 from "../assets/categories/1.jpg"
import image2 from "../assets/categories/2.jpg"
import image3 from "../assets/categories/3.jpg"
import image4 from "../assets/categories/4.jpg"
import image5 from "../assets/categories/5.webp"
import image6 from "../assets/categories/6.jpg"

const categories = [
  {
    title: "Refresh your space",
    items: [
      { name: "Dining", image:image1 },
      { name: "Home", image: image2 },
      { name: "Kitchen", image: image3 },
      { name: "Health and Beauty", image: image4},
    ],
    link: "See more",
  },
  {
    title: "Shop Landscape Lighting",
    image: image5,
    link: "All deals",
  },
  {
    title: "Toys under $25",
    image:image6,
    link: "Shop now",
  },
];

const CategorySection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div key={index} className="bg-white p-5 shadow-lg rounded-md border border-gray-200">
          <h2 className="font-bold text-lg mb-3">{category.title}</h2>
          
          {/* If multiple items exist, show a grid */}
          {category.items ? (
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((item, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <p className="text-sm mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          ) : (
           
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover rounded-md" to h-64
            />
          )}

          <a href="#" className="text-blue-500 text-sm mt-3 block">
            {category.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
