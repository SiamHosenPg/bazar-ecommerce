import React from "react";
import CartItems from "../components/cartitems/CartItems";

const carts = ({ cart, removeFromCart }) => {
  return (
    <div>
      <div className="PageRatio">
        <CartItems cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default carts;
