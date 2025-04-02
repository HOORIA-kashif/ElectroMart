import React, { useState } from "react";
import { RiStarSFill,RiStarSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; 

import image1 from "../assets/shop/1.jpg"
import image2 from "../assets/shop/2.jpg"
import image3 from "../assets/shop/3.jpg"
import image4 from "../assets/shop/4.jpg"
import image5 from "../assets/shop/5.jpg"     
import image6 from "../assets/shop/6.jpg"
import image7 from "../assets/shop/7.jpg"
import image8 from "../assets/shop/8.jpg"
import image9 from "../assets/shop/9.jpg"
import image10 from "../assets/shop/10.jpg"
import image11 from "../assets/shop/11.jpg"
import image12 from "../assets/shop/12.jpg"
import image13 from "../assets/shop/13.jpg"
import image14 from "../assets/shop/14.webp"
import image15 from "../assets/shop/15.jpg"
import image16 from "../assets/tab/j.jpg"
import image17 from "../assets/collection/b2.jpg"
import ShopB from '../components/ShopB'

const Shop = () => {
  const navigate = useNavigate(); 

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product }); 
  };

  const [price, setPrice] = useState([50, 500]);

  
  const products = [
    { id: 1, name: "Smartphone", price: 120.00, image: image1, category: "Smart Phones" },
    { id: 2, name: "Digital Camera", price: 150.00, image: image2, category: "Digital Cameras" },
    { id: 3, name: "Gaming Console", price: 200.00, image: image3, category: "Gaming Accessories" },
    { id: 4, name: "Laptop", price: 300.00, image: image4, category: "Laptops and Tablets" },
    { id: 5, name: "Headphones", price: 80.00, image: image5, category: "Audio and Video" },
    { id: 6, name: "Smartwatch", price: 100.00, image: image6, category: "Smart Phones" },
    { id: 7, name: "Tablet", price: 250.00, image: image7, category: "Laptops and Tablets" },
    { id: 8, name: "Speaker", price: 90.00, image: image8, category: "Audio and Video" },
    { id: 9, name: "Drone", price: 400.00, image: image9, category: "Collection" },
    { id: 10, name: "Smartphone", price: 120.00, image: image10 },
    { id: 11, name: "Digital Camera", price: 150.00, image: image11 },
    { id: 12, name: "Gaming Console", price: 200.00, image: image12 },
    { id: 13, name: "Laptop", price: 300.00, image: image13 },
    { id: 14, name: "Headphones", price: 80.00, image: image14},
    { id: 15, name: "Smartwatch", price: 100.00, image: image15 },
    { id: 16, name: "Laptop", price: 300.00, image: image11 },
    { id: 17, name: "Headphones", price: 80.00, image: image13 },
    { id: 18, name: "Smartwatch", price: 100.00, image: image12 },
  ];
  

  return (
    <div>
       <img src={image16} alt="" className="mb-3" />
      
       <img src={image17} alt="" className="w-full object-cover" />
       <ShopB/>
      
     
     
    <div className="flex bg-[#FFFFFF]">
      
      
      {/* Sidebar */}
      <div className="w-1/5 p-4">
        <h2 className="font-bold mt-4 mb-2 text-sm">Departments</h2>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>All</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Devices & Accessories</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Appliances</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Arts, Crafts & Sewing</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Automotive</span>
        </div>
        <h2 className="font-bold mb-2 text-sm mt-4">Customer Reviews</h2>
        <div className="text-sm mb-2">
          <input type="radio" name="reviews" /> <span>All</span>
        </div>
        <div className="flex items-center text-sm mb-2">
          <input type="radio" name="reviews"  /> <span className="flex text-yellow-500
          text-lg">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
       
          <RiStarSLine />
          </span> & up
        </div>
        <div className="flex items-center text-sm mb-2">
          <input type="radio" name="reviews"  /> <span className="flex text-yellow-500
          text-lg">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          </span> & up
        </div>
        <div className="flex items-center text-sm mb-2">
          <input type="radio" name="reviews"  /> <span className="flex
          text-lg text-yellow-500">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          </span> & up
        </div>
        <div className="flex items-center text-sm mb-2 ">
          <input type="radio" name="reviews"  /> <span className="flex
          text-lg text-yellow-500">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          </span> & up
        </div>

        <h2 className="font-bold mt-4 mb-2 text-sm">Price</h2>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>All</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Under $25</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>Under $50</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="price" /> <span>$2000 & Above</span>
        </div>
        <div>
         
          <input
            type="range"
            min="50"
            max="500"
            value={price[1]} 
            onChange={(e) => setPrice([price[0], Number(e.target.value)])} 
            className="w-full appearance-none h-[2px] bg-yellow-400
             rounded outline-none cursor-pointer"
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
          <p className="text-sm text-gray-600 mb-4">Price: ${price[0]} - ${price[1]}</p>
        </div>

        <h2 className="font-bold  text-smmt-4 mb-2">Discount</h2>
        <div className="text-sm mb-2">
          <input type="radio" name="discount" /> <span>All</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="discount" /> <span>10% off or more</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="discount" /> <span>10% off or more</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="discount" /> <span>20% off or more</span>
        </div>
        <div className="text-sm mb-2">
          <input type="radio" name="discount" /> <span>50% off or more</span>
        </div>
        <h2 className="font-bold mt-4 text-sm">Prime Exclusive</h2>
        <div className="flex items-center text-sm gap-2 mt-2">
          <input type="checkbox" name="" id="" />
          <p>prime Exclusive</p>
        </div>
      
      </div>

    
      <div className="w-4/5 p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <div className="relative mt-6 cursor-pointer">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain"
              />
              <div className="">
                <span className="bg-red-600 text-white px-2 py-1 text-xs">15% off</span>
                <span className="text-red-600 px-2 py-1 text-xs ml-2">Big Spring Deal</span>
              </div>
            </div>
            <p className="text-sm mt-2 font-bold mb-2">{product.name}</p>
            <p className="text-[12px]">Shark HD430 FlexStyle Air Styling & Drying System, P…</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Shop;
