import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; 
import Loader from "./loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
        <h1 className="text-2xl font-bold mb-4">Screen Too Small</h1>
        <p className="text-lg mb-6">Please view this website on a larger screen for the best experience.</p>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="relative">
        {loading && <Loader />} 
        <div>
          <Navbar />
          <Outlet /> 
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
