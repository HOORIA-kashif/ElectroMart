import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import { FaShareAlt, FaQuestionCircle } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import { LuAlbum } from "react-icons/lu";
import image from "../assets/collection/h.png"
import image1 from "../assets/products/2.webp";
import image2 from "../assets/products/4.avif";
import image3 from "../assets/products/5.webp";
import image4 from "../assets/products/6.webp";
import visa from "../assets/products/v.webp";
import mastercard from "../assets/products/m.jpg";
import amex from "../assets/products/c.png";
import paypal from "../assets/products/p.png";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const { addToCart } = useCart(); 

  if (!location.state) {
   
    navigate("/collection");
    return null; 
  }

  const product = location.state; 
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "black", 
        color: "white", 
      },
    });
  };

  return (
    <div>
      <ToastContainer />
      <img src={image} alt="" className="md:ml-40" />
      <div className="max-w-6xl mx-auto p-4 grid-cols-1 sm:p-6 grid md:grid-cols-2 gap-8">
      
      <div>
       
        <img src={mainImage} alt="Product" className="w-full h-100 object-contain rounded-lg" />
        <div className="flex gap-2 mt-4">
          {[image1, image2, image3, image4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img ? "border-black" : "border-gray-300"}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mt-4">{product.name}</h2>
        <div className="flex items-center gap-4">
          <p className="text-sm text-green-600 font-semibold mt-4">${product.price} <span className="text-gray-500 line-through text-sm">$130.00</span></p>
          <p className="text-[10px] text-gray-700 border border-green-300 text-green-700 px-3 py-1 rounded-full">IN STOCK</p>
        </div>
        <p className="mt-2 text-sm text-gray-600 flex items-center mt-4">
          <RiStarSFill className="text-yellow-500"/>
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
          <RiStarSFill className="text-yellow-500" />
         2 Reviews</p>
        <p className="mt-4 text-gray-500 text-[12px]">Men fashion shirts | shirt for men | shirts for men | shirts | causal shirt for men in 4 attractive color good quality shirts for men and boys for all occasion in all season <span className="text-blue-500 cursor-pointer">See More</span></p>
        <div className="border border-gray-200 mt-4"></div>
        
       
        <div className="mt-4 text-gray-700 text-sm ">
          <p className="mb-3 text-[12px]"><strong>SKU:</strong> HR-59083</p>
          <p className="mb-3 text-[12px]"><strong>Categories:</strong> Home, Smart, Mouse</p>
          <p className="mb-3 text-[12px]"><strong>Tags:</strong> Bluetooth, Laptop, Monitor, Speaker</p>
          <p className="text-[12px]"><strong>Quantity</strong> </p>
        </div>
        
      
        <div className="mt-2 flex items-center gap-2">
          <div className="border border-gray-400 rounded-full text-sm">
          <button className=" px-3 py-1 " onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span className="text-sm font-semibold">{quantity}</span>
          <button className=" px-3 py-1 " onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="text-black text-sm border border-gray-300 px-6 py-1 rounded-full flex items-center gap-2">
          <IoBagHandleOutline />Add to Cart
          </button>
          <button className="border border-gray-200 px-2 py-2 rounded-full flex 
          bg-white text-gray-500 items-center gap-2">
            <FaRegHeart />
          </button>
        </div>
        
        <button className="w-[55%] bg-black text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 mt-4" onClick={handleAddToCart}>
        <IoBagHandleOutline /> Add to Cart
        </button>
        
       
        <div className="text-gray-600 text-sm p-4 mt-4 rounded-lg">
          <h1 className="flex items-center gap-1">
            <CiCircleCheck className="text-white bg-green-500 rounded-full"/>
            Pickup available at <b className="text-black">ELECTRO MART</b>
          </h1>
          <p>Usually ready in 24 hours</p>
          <p className="text-black text-[12px] mt-2 border-b w-fit cursor-pointer">View Store Information</p>
        </div>
        
       
        <p className="mt-4 text-sm">Hurry! Only 20 items left in stock.</p>
        <div className="w-full bg-gray-200 h-1 rounded-lg overflow-hidden mt-2">
          <div className="bg-red-600 h-1 w-1/4"></div>
        </div>

       
        <div className="mt-4 flex gap-4 text-black text-sm items-center">
          <FaQuestionCircle className="text-gray-500"/><p>Compare</p>
          <LuAlbum className="text-gray-500" /><p>Ask a Question</p>
          <FaShareAlt className="text-gray-500" /><p>Share</p>
        </div>

      
        <p className="mt-6 font-semibold text-sm">Guarantee Safe and Secure Checkout</p>
        <div className="mt-4 flex gap-4">
          <img src={visa} alt="Visa" className="w-12" />
          <img src={mastercard} alt="Mastercard" className="w-12" />
          <img src={amex} alt="Amex" className="w-12" />
          <img src={paypal} alt="PayPal" className="w-12" />
        </div>
      </div>

      <div className="w-[] mx-auto p-4 md:p-20 hidden md:block">
         
      <div className="flex border-b">
        {["Product Description", "Additional Information", "Shipping & Return", "Product Reviews"].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === tab.toLowerCase().replace(/\s+/g, "-")
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.toLowerCase().replace(/\s+/g, "-"))}
          >
            {tab}
          </button>
        ))}
      </div>

    
      <div className="min-w-200 hidden md:flex   mt-10">
      
        <div className="w-[60%]">
          <h2 className=" text-lg md:text-2xl font-bold ">
            Lenovo IdeaPad 1 14AMN7 AMD Ryzen <br/>5 14" FHD Laptop With DDR5 RAM
          </h2>
          <ul className="mt-3 space-y-2 text-gray-700 text-[10px]">
            <li className="flex items-center gap-2"> <CiCircleCheck className="text-white bg-green-500 rounded-full"/> Flexible, Secure Fit Wrinkles For All Day Comfort And Stability.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> Auto Play/Pause Via Optical Sensors And Accelerometers.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> High Quality Call Performance And Voice Assistant Interaction.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> Built-in Microphone With Wind Reduction For Voice Clarity.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> Flexible, Secure Fit Wrinkles For All Day Comfort And Stability.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> Auto Play/Pause Via Optical Sensors And Accelerometers.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> High Quality Call Performance And Voice Assistant Interaction.</li>
            <li className="flex items-center gap-2"><CiCircleCheck  className="text-white bg-green-500 rounded-full"/> Built-in Microphone With Wind Reduction For Voice Clarity
            High <br/> Quality Call Performance And Voice Assistant Interaction.</li>
          </ul>
          <button className="mt-4 text-sm bg-black text-white px-4 py-2 rounded-full">Buy Now</button>
         
        </div>

       
        <div className="">
          <img
            src={image1}
            alt="Lenovo Laptop"
            className="w-full h-90 object-contain rounded-lg "
          />
        </div>
      
      </div>
      </div>
      </div>
    </div>
    


      
    
  );
};

export default ProductPage;
