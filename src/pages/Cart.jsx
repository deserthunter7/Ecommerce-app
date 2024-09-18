import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Helmet } from "react-helmet";
import BreadCrumb from "../components/BreadCrumb"; // Ensure the path is correct

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Cart</title>
      </Helmet>
      <BreadCrumb title="My Cart" />
      <div className="container">
        <h1 className="my-5">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Product_image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price * item.quantity}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total: ₹{getTotalPrice()}</h4>
            <button className="btn btn-primary">Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
