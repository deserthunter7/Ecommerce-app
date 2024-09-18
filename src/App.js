// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import CompareProducts from "./components/Compare_Products/CompareProducts";
import OurStore from "./pages/OurStore";
import MainProductPage from "./pages/MainProductPage";
import Cart from "./pages/Cart";
import CartProvider from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap your routing structure with CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="compare" element={<CompareProducts />} />
            <Route path="mainproduct" element={<MainProductPage />} />
            <Route path="/store" element={<OurStore />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
