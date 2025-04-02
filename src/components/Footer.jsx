import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-white flex items-center">
          <span className="text-yellow-400">Electro</span> mart
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-6 md:mt-0 w-full max-w-md">
          <p className="text-sm mb-2">Subscribe Newsletter</p>
          <div className="flex border border border-gray-50 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Enter Your Mail"
              className="flex-1 px-4 py-2 text-white bg-transparent outline-none"
            />
            <button className="bg-yellow-400 px-4 flex items-center justify-center">
              <FaPaperPlane size={16} className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-400 mt-6">
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          <p>Accessories</p>
          <p>Gaming</p>
          <p>Laptops & Computer</p>
          <p>Mac Computers</p>
          <p>PC Computers</p>
          <p>Ultrabooks</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Pages</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>All Collections</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">About Us</h4>
          <p>Contact Us</p>
          <p>Wishlist</p>
          <p>Shopping Cart</p>
          <p>Shipping & Return</p>
          <p>FAQs</p>
          <p>About Us</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Regulations</h4>
          <p>Regulations</p>
          <p>Shop</p>
          <p>Cart</p>
          <p>My Account</p>
          <p>FAQs</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <p>Electronics</p>
          <p>Toys</p>
          <p>Video Games</p>
          <p>Home Products</p>
          <p>Clothing</p>
          <p>Sports & Outdoors</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-xs mt-10">
        &copy; 2024 Electro Mart, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
