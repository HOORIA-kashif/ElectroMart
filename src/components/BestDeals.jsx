import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/best/1.jpg"
import image2 from "../assets/best/2.jpg"
import image3 from "../assets/best/3.jpg"
import image4 from "../assets/best/4.jpg"
import image5 from "../assets/best/5.jpg"
import image6 from "../assets/best/6.jpg"
import image7 from "../assets/best/7.jpg"
import image8 from "../assets/best/8.jpg"
import image9 from "../assets/best/9.jpg"
import image10 from "../assets/best/10.jpg"
import image11 from "../assets/best/11.jpg"
import image12 from "../assets/best/12.jpg"
const categories = [
  {
    title: "Shop deals in Fashion",
    links: "See all deals",
    items: [
      { img:image1, text: "Jeans under $50" },
      { img:image2, text: "Tops under $25" },
      { img:image3, text: "Dresses under $30" },
      { img:image4, text: "Shoes under $50" },
    ],
  },
  {
    title: "Top categories in Kitchen appliances",
    links: "Explore all products in Kitchen",
    items: [
      { img:image5, text: "Cooker" },
      { img:image6, text: "Coffee" },
      { img:image7, text: "Pots and Pans" },
      { img:image8, text: "Kettles" },
    ],
  },
  {
    title: "New home arrivals under $50",
    links: "Shop the latest from Home",
    items: [
      { img:image9, text: "Kitchen & dining" },
      { img:image10, text: "Home improvement" },
      { img:image11, text: "Décor" },
      { img:image12, text: "Bedding & bath" },
    ],
  },
];

const CategorySection = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
      {categories.map((category, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-3">{category.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {category.items.map((item, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-24 object-cover rounded"
                />
                <p className="text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
         
          <p
            className="text-blue-600 text-sm mt-3 block cursor-pointer"
            onClick={() => navigate("/shop")}
          >
            {category.links}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
