import React, { useState } from "react";

import image from '../assets/products/f.webp'
import image1 from '../assets/products/t.avif'
import image2 from '../assets/products/g.webp'
const LoginPage = () => {

  const DUMMY_USER = { email: "test@example.com", password: "password123" };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = (e) => {
    e.preventDefault();

    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password!");
    }
  };

  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 w-full max-w-md">
     
        {isLoggedIn ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Welcome!</h2>
            <p className="text-gray-600 mb-6">You are successfully logged in.</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Log In Your Account</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

           
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="test@example.com"
                className="w-full p-3 border border-gray-300  rounded-md focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

         
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                placeholder="password123"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

          
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-gray-700 text-sm">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-gray-600 text-sm">Forgot Password?</a>
            </div>

         
            <button
              onClick={handleLogin}
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md"
            >
              Log In
            </button>

          
            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="mx-4 text-gray-500">Or</span>
              <div className="border-t flex-grow"></div>
            </div>

         
            <div className="flex gap-2">
              <button className="flex items-center gap-2 flex-1  text-black py-2 rounded-md">
                <img src={image} alt="" className="w-8 h-8" />Facebook</button>
                <button className="flex items-center gap-2 flex-1  text-black py-2 rounded-md">
                <img src={image1} alt="" className="w-8 h-8" />Twitter</button>
                <button className="flex items-center gap-2 flex-1  text-black py-2 rounded-md">
                <img src={image2} alt="" className="w-8 h-8" />Google</button>
            </div>

         
            <p className="text-center text-gray-700 text-sm mt-6">
              Don't Have An Account? <a href="#" className="text-black font-bold">Sign Up</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
