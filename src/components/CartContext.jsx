// src/CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      setCartItems((prevItems) => [...prevItems, product]);
      setTotalPrice((prevPrice) => prevPrice + product.price);
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const totalQuantity = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalPrice,
        totalQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export const useCart = () => useContext(CartContext);
export default CartProvider;
