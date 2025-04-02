import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Collection from "../pages/Collection"; 
import ProductPage from "../pages/ProductPage"; 
import App from "../App"; 
import React from "react";

import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import CartPage from "../pages/CartPage";
import  ContactPage from "../pages/ContactPage";
import Login from "../pages/LoginPage"


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Collection />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "product/:id", 
        element: <ProductPage />,
      },
      {
        path:"cart",
        element:<CartPage/>
      },
      {
        path:"contact",
        element:< ContactPage/>
      },
      {
        path:"login",
       element:<Login/>
      }
    ],
  },
]);

export default router;