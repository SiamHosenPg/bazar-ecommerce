import { createContext, useContext, useState } from "react";
import { DialogueContext } from "./Dialoguecontext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { setDialougeText, setBoxStatus } = useContext(DialogueContext);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      setDialougeText("Product already exists in the cart!");
      setBoxStatus("block");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
