import { createContext, useContext, useState } from "react";
import { DialogueContext } from "./Dialoguecontext";

// Creating a new context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Accessing functions from DialogueContext for showing messages
  const { setDialougeText, setBoxStatus } = useContext(DialogueContext);

  // State to store cart items
  const [cart, setCart] = useState([]);

  // State to store the discount percentage
  const [discount, setDiscount] = useState(0);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Checking if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Displaying a message if the product is already in the cart
        setDialougeText("Product already exists in the cart!");
        setBoxStatus("block");
        return prevCart;
      }
      // Adding the new product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to increase the quantity of a product in the cart
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to calculate the subtotal (total price before discount)
  const getSubTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Function to calculate the discount amount
  const getDiscountAmount = () => {
    const subTotal = getSubTotal();
    return (subTotal * discount) / 100;
  };

  // Function to calculate the total price after applying the discount
  const getTotalPrice = () => {
    const subTotal = getSubTotal();
    return subTotal - getDiscountAmount();
  };

  // Function to calculate the total price after applying discount and adding delivery fee
  const getTotalWithDelivery = (deliveryFee) => {
    const subTotal = getSubTotal();
    const discountAmount = getDiscountAmount();
    return subTotal - discountAmount + deliveryFee;
  };

  // Function to apply a discount coupon
  const applyCoupon = (code) => {
    // Predefined coupon codes and their respective discount percentages
    const coupons = {
      DISCOUNT10: 10,
      DISCOUNT20: 20,
      DISCOUNT30: 30,
    };

    // Checking if the entered coupon code is valid
    if (coupons[code]) {
      setDiscount(coupons[code]); // Applying the discount
      setDialougeText(`Coupon applied! You got ${coupons[code]}% off.`);
      setBoxStatus("block");
    } else {
      setDiscount(0); // Resetting the discount if the coupon is invalid
      setDialougeText("Invalid coupon code!");
      setBoxStatus("block");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        discount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getSubTotal,
        getDiscountAmount,
        getTotalPrice,
        getTotalWithDelivery,
        applyCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
