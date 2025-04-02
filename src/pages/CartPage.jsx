import React from "react";
import { useCart } from "../context/CartContext";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import image from "../assets/collection/2.webp";
import image1 from "../assets/collection/5.webp";
import image2 from "../assets/collection/11.webp";
import image3 from "../assets/collection/13.jpg";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="max-w-6xl mx-auto bg-[#ECECEC] p-6">
    
      <div className="bg-white py-5">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Cart</h1>


        <div className="flex justify-center items-center space-x-4 
        sm:space-x-8 mb-4 text-gray-500 font-semibold text-[10px] md:text-sm">
          <div className="text-black border-b-2 border-yellow-500 pb-1">01 Shopping Cart</div>
          <div className="pb-1">02 Shipping & Checkout</div>
          <div className="pb-1">03 Confirmation</div>
        </div>
      </div>

   
      {cart.length === 0 ? (
        <p className="text-center text-lg mt-4">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Left Section - Cart Items */}
          <div className="md:col-span-2 bg-white p-4 rounded-lg">
            <div className="hidden md:flex justify-between text-sm font-semibold pb-3 ">
              <p>Product Details</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="flex  items-center justify-between py-4 ">
                {/* Product Details */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image} alt={item.name} className="w-14 h-14 sm:w-16
                   sm:h-16 object-cover rounded" />
                  <div>
                    <h2 className="md:text-sm text-[10px] font-bold">{item.name}</h2>
                    <p className="text-green-500 text-[10px] md:text-sm mt-1">${item.price}.00</p>
                  </div>
                </div>

           
                <p className="text-[10px] md:text-sm">${item.price}</p>

          
                <div className="flex items-center space-x-2  rounded-lg p-1">
                  <button onClick={() => decreaseQuantity(item.id)} className="p-1 bg-gray-300 rounded-full">
                    <HiOutlineMinusSmall className="text-xs sm:text-sm" />
                  </button>
                  <span className="text-xs sm:text-sm">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="p-1 bg-black text-white rounded-full">
                    <GoPlus className="text-xs sm:text-sm" />
                  </button>
                </div>

              
                <p className="text-[10px] md:text-sm  font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-8">Total Cart</h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Charge</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between font-bold mb-8">
                <span>Total</span>
                <span>${(cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 10).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-gray-600 mb-5">
              <p className="mb-2"> Name: <span className="font-semibold">Reaz Hossain</span></p>
              <p>Address: <span className="font-semibold">8098 Railroad St.</span></p>
            </div>

            <button className="mt-4 w-full bg-yellow-400 text-black font-bold py-2 rounded-lg text-xs sm:text-sm">
              Checkout
            </button>
          </div>
        </div>
      )}


      <div className="mt-12">
        <h2 className="text-xl font-bold mb-2">Popular Products</h2>
        <p className="text-gray-500 mb-4">Recommendations For Your Lifestyle.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Air Buds", price: 120, image: image },
            { name: "Air Fryer", price: 120, image: image1 },
            { name: "Bluetooth Speaker", price: 120, image: image2 },
            { name: "DSLR Camera", price: 120, image: image3 },
          ].map((product, index) => (
            <div
              key={index}
              className="p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300 w-full"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-22 md:h-48 object-contain rounded-md mb-4"
              />
              <p className="text-sm font-medium">{product.name}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-green-600 text-lg ">${product.price}</p>
                <FaArrowRight className="text-gray-400 hover:text-gray-600 transition" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
