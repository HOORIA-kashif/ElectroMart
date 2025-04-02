import React from "react";
import image1 from "../assets/tab/1.jpg"
import image2 from "../assets/tab/2.jpg"
import image3 from "../assets/tab/3.jpg"
import image4 from "../assets/tab/4.jpg"
import image5 from "../assets/tab/5.jpg"
import image6 from "../assets/tab/6.jpg"
import image7 from "../assets/tab/7.jpg"
import image8 from "../assets/tab/8.jpg"
import image9 from "../assets/tab/9.jpg"
import image10 from "../assets/tab/10.jpg"
import image11 from "../assets/tab/11.jpg"
import image12 from "../assets/tab/12.jpg"
const categories = [
  {
    title: "Wireless Tech",
    items: [
      { name: "Smartphones", img: image1 },
      { name: "Watches", img: image2 },
      { name: "Headphones", img: image3 },
      { name: "Tablets", img: image4 },
    ],
  },
  {
    title: "Most-loved watches",
    items: [
      { name: "Women", img: image5 },
      { name: "Men", img: image6 },
      { name: "Girls", img:image7 },
      { name: "Boys", img:image8 },
    ],
  },
  {
    title: "Most-loved travel essentials",
    items: [
      { name: "Backpacks", img: image9 },
      { name: "Suitcases", img:image10},
      { name: "Accessories", img:image11 },
      { name: "Handbags", img:image12 },
    ],
  },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md w-full sm:w-72 md:w-80"
        >
          <h2 className="text-lg font-bold mb-3">{category.title}</h2>
          <div className="grid grid-cols-2 gap-2">
            {category.items.map((item, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-24 object-cover rounded-md"
                />
                <p className="text-sm mt-1">{item.name}</p>
              </div>
            ))}
          </div>
          <a href="#" className="text-blue-500 mt-3 block">
            Discover more
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;