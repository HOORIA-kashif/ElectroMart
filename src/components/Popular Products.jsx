import React from "react";
import image1 from "../assets/populars/1.jpg"
import image2 from "../assets/populars/2.jpg"
import image3 from "../assets/populars/3.jpg"
import image4 from "../assets/populars/4.jpg"
import image5 from "../assets/populars/5.jpg"
import image6 from "../assets/populars/6.jpg"
import image7 from "../assets/populars/7.jpg"
import image8 from "../assets/populars/8.jpg"
import image9 from "../assets/populars/9.jpg"
const CategorySection = () => {
  const categories = [
    {
      title: "Level up your beauty routine",
      items: [
        { name: "Makeup", image: image1 },
        { name: "Brushes", image: image2 },
        { name: "Sponges", image: image3 },
        { name: "Mirrors", image: image4 },
      ],
      link: "See more",
    },
    {
      title: "Gaming Corner",
      fullImage: image5, 
      link: "For all your gaming needs",
    },
    {
      title: "Toys for all ages",
      items: [
        { name: "Ride on's", image: image6 },
        { name: "Building & construction", image: image7 },
        { name: "Dolls & Doll Houses", image: image8 },
        { name: "Swimming pools", image: image9 },
      ],
      link: "See all",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow-md rounded-md w-full"
        >
          <h2 className="font-bold text-lg mb-3">{category.title}</h2>
          {category.fullImage ? (
            <img
              src={category.fullImage}
              alt={category.title}
              className="w-full md:h-68 object-cover"
            />
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-24 object-cover rounded-md"
                  />
                  <p className="text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          )}
          <a href="#" className="text-blue-500 text-sm mt-2 block">
            {category.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
