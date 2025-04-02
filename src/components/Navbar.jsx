import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import useCart

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const { cart } = useCart(); 
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Today's Deals", path: "/shop" },
    { name: "Collection", path: "/collection" },
    { name: "Contact Us", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 flex justify-between items-center text-xs md:text-sm px-6 md:px-20 py-2 border-b border-gray-300">
        <div className="text-gray-600 flex items-center space-x-2">
          <MdPhone />
          <span>(800) 123 456 7890 | ✉ sample@email.com</span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <FiMapPin />
          <span>Store Location</span>
          <img
            src="https://flagcdn.com/w40/pk.png"
            alt="Pakistan Flag"
            className="w-5 h-3"
          />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container bg-white mx-auto flex items-center justify-between px-4 md:px-20 py-3">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars className="border border-gray-300 w-8 h-8 rounded-full p-1" />}
          </button>
          <h1 className="text-[24px] md:text-[28px] font-bold text-[#222] cursor-pointer"
           onClick={() => navigate("/")}>
            
            Electro<span className="text-yellow-400">mart</span>
          </h1>
        </div>

        
        <div className="hidden md:flex flex-grow max-w-lg items-center 
        border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <button className="px-4 py-4 bg-primary text-black">
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center space-x-2 text-gray-600 cursor-pointer relative">
          <IoHeartOutline className="border border-gray-300 w-8 h-8 rounded-full
           p-1"  onClick={() => navigate("/collection")} />
          <AiOutlineUser className="border border-gray-300 w-8 h-8 rounded-full p-1 "
           onClick={() => navigate("/login")} />
          <div className="relative">
            <IoCartOutline
              className="border border-gray-300 w-8 h-8 rounded-full p-1 "
              onClick={() => navigate("/cart")} e
            />
            {/* Cart Count Badge */}
            <span
              className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-[10px] md:text-sm
                h-4 w-4 md:w-5 md:h-5 
               flex items-center justify-center rounded-full"
            >
              {cartItemCount}
            </span>
          </div>
        </div>
      </nav>

    
      <div className="bg-black text-white px-20 py-2 hidden md:flex items-center justify-between">
        <button className="bg-primary text-black px-4 py-2 flex items-center space-x-2 rounded">
          <FaBars /> <span>All Categories</span>
        </button>
        <div className="flex space-x-6 text-sm">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.name}
              to={nav.path} 
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-white hover:text-yellow-400"
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <span className="text-sm">
          *Free Shipping On Orders <span className="text-red-500">$500+</span>
        </span>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white absolute w-full left-0 top-[100px] py-4 px-4 space-y-3 shadow-lg z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path} 
              onClick={() => {
                setActiveLink(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={`block ${
                activeLink === link.name ? "text-yellow-500" : "text-white"
              } hover:text-yellow-400 transition`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
