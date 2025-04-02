import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { IoBagHandleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { LuAlignVerticalDistributeCenter } from "react-icons/lu";
import image from "../assets/collection/1.webp";
import image1 from "../assets/collection/2.webp";
import image2 from "../assets/collection/3.webp";
import image3 from "../assets/collection/4.webp";
import image4 from "../assets/collection/5.webp";
import image5 from "../assets/collection/6.webp";
import image6 from "../assets/collection/7.webp";
import image7 from "../assets/collection/10.webp";
import image8 from "../assets/collection/9.webp";
import image9 from "../assets/collection/11.webp";
import image10 from '../assets/collection/12.jpg'
import image11 from '../assets/collection/13.jpg'
import image12 from '../assets/collection/14.jpg'
import image13 from '../assets/collection/15.webp'
import image14 from '../assets/collection/6.webp'
import image15 from '../assets/collection/9.webp'
import image16 from '../assets/collection/2.webp'
import image17 from "../assets/collection/b3.jpg"


const categories = ["Smart Phones", "Digital Cameras", "Home Appliances", "Gaming Accessories", "Laptops and Tablets", "Audio and Video", "Collection", "All Products"];
const brands = ["Armani", "Bulgari", "Christian Dior", "Dolce & Gabbana"];
const colors = ["red", "green", "blue", "black", "yellow"];
const sizes = ["S", "M", "L", "XL"];


const products = [
  { id: 1, name: "Smartphone", price: 120.00, image: image1, category: "Smart Phones" },
  { id: 2, name: "Digital Camera", price: 150.00, image: image2, category: "Digital Cameras" },
  { id: 3, name: "Gaming Console", price: 200.00, image: image8, category: "Gaming Accessories" },
  { id: 4, name: "Laptop", price: 300.00, image: image4, category: "Laptops and Tablets" },
  { id: 5, name: "Headphones", price: 80.00, image: image5, category: "Audio and Video" },
  { id: 6, name: "Smartwatch", price: 100.00, image: image6, category: "Smart Phones" },
  { id: 7, name: "Tablet", price: 250.00, image: image7, category: "Laptops and Tablets" },
  { id: 8, name: "Speaker", price: 90.00, image: image3, category: "Audio and Video" },
  { id: 9, name: "Drone", price: 400.00, image: image9, category: "Collection" },
  { id: 10, name: "Smartphone", price: 120.00, image: image10 },
  { id: 11, name: "Digital Camera", price: 150.00, image: image11 },
  { id: 12, name: "Gaming Console", price: 200.00, image: image12 },
  { id: 13, name: "Laptop", price: 300.00, image: image13 },
  { id: 14, name: "Headphones", price: 80.00, image: image14},
  { id: 15, name: "Smartwatch", price: 100.00, image: image15 },
  { id: 16, name: "Laptop", price: 300.00, image: image16 },
  { id: 17, name: "Headphones", price: 80.00, image: image5 },
  { id: 18, name: "Smartwatch", price: 100.00, image: image6 },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [price, setPrice] = useState([50, 500]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product }); // Pass product details via state
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      
       <img src={image17} alt="" className="w-full h-50 object-cover" />
       <div className="flex flex-col md:flex-row w-full p-6 bg-gray-100">
      {/* Sidebar */}
      <button 
          className=" md:hidden bg-black text-white px-4 py-2 rounded
          justify-center gap-2 mb-4 flex items-center w-fit text-center ml-22"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
        
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
          <LuAlignVerticalDistributeCenter className="text-xl" />
        </button>
      <div className={`w-full md:w-1/4 p-4 bg-gray-100 md:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
     
     
        <h2 className="font-bold text-sm p-3 border border-gray-300">Categories</h2>
        <ul className="border border-gray-300 p-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 text-sm ${selectedCategory === category ? " md:font-bold" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>

        <h3 className="text-sm font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-18 mt-5 after:h-[3px] after:bg-yellow-400">
          Filter
        </h3>

        <div className="mt-5">
          <h3 className="font-semibold text-sm mt-2">Brand</h3>
          {brands.map((brand, index) => (
            <div key={index} className="text-[12px] mt-1">
              <input
                type="checkbox"
                id={brand}
                className="mr-2"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-400 mt-5"></div>

        <div>
          <h3 className="font-semibold mt-4">Color</h3>
          <div className="flex gap-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-400 mt-5"></div>

        <div>
          <h3 className="font-semibold text-sm mt-4">Size</h3>
          {sizes.map((size, index) => (
            <div key={index} className="text-[11px] mt-3">
              <input type="radio" name="size" id={size} className="mr-2" />
              <label htmlFor={size}>{size}</label>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-400 mt-5"></div>

         <div>
          <h3 className="font-semibold text-sm mt-4">Price</h3>
          <input
            type="range"
            min="50"
            max="500"
            value={price[1]}
            onChange={(e) => setPrice([price[0], Number(e.target.value)])} // Update the second value dynamically
            className="w-full appearance-none h-[2px] bg-yellow-400 rounded outline-none cursor-pointer"
            style={{
           
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
            }}
          />
          <style>
            {`
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                height: 16px;
                width: 16px;
                background-color: #facc15; /* Tailwind's yellow-400 */
                border-radius: 50%;
                cursor: pointer;
               
              }

              input[type="range"]::-moz-range-thumb {
                height: 16px;
                width: 16px;
                background-color: #facc15; /* Tailwind's yellow-400 */
                border-radius: 50%;
                cursor: pointer;
              
              }
            `}
          </style>
          <p className="text-sm text-gray-600">Price: ${price[0]} - ${price[1]}</p>
        </div>


        <button className="bg-yellow-400 text-black text-sm px-6 py-2 mt-4 rounded-full">Apply</button>

       
        <div className="mt-4 text-sm hidden md:block">
          <h3 className="font-semibold text-sm ">Warranty</h3>
          <input className="mt-3" type="checkbox" id="1year" /> <label htmlFor="1year">1 Year</label>
          <input className="mt-3 ml-4" type="checkbox" id="2year" /> <label htmlFor="2year">2 Year</label>
        </div>

      
        <div className="mt-6 text-center rounded hidden md:block">
          <img src={image} alt="Ad" className="w-full" />
          <h3 className="font-bold text-sm mt-2">Galaxy Buds Pro</h3>
          <p className="text-sm mt-2">Starting at $149</p>
          <button className="bg-black text-white w-full p-2 mt-2 flex items-center justify-center gap-2">
            <IoBagHandleOutline /> Add to Cart
          </button>
        </div>
      </div>

     
      <div className="w-full md:w-3/4 p-4">
        <div className="flex justify-between  p-3">
          <h1 className="text-sm md:text-2xl font-bold">{selectedCategory}</h1>
          <select className="bg-gray-200 p-2 md:text-sm text-[10px] rounded">
            <option className="">Sort by: Latest</option>
            <option>Sort by: Price</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className=" p-4 rounded bg-gray-100 shadow cursor-pointer" onClick={() => handleProductClick(product)}>
              <img src={product.image} alt={product.name} className="w-full h-32 object-contain bg-gray-100"  />
              <h2 className=" text-[10px] md:text-sm font-bold mt-2">{product.name}</h2>
              <p className="text-[10px] md:text-sm">Google Pixel Tablet - Android Tablet with 11-Inch Screen </p>
            
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-green-600 text-[10px] md:text-sm ">${product.price}.00</p>
                          <FaArrowRight className="text-gray-400 hover:text-gray-600
                           transition text-[10px] md:text-sm"  />
                        </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Shop;