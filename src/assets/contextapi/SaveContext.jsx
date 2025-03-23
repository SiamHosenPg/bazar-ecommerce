import { createContext, useContext, useState, useEffect } from "react";
import { DialogueContext } from "./Dialoguecontext"; // Import DialogueContext

// Creating a new context for saved products
export const SaveContext = createContext();

export const SaveProvider = ({ children }) => {
  // Accessing functions from DialogueContext for showing messages
  const { setDialougeText, setBoxStatus, setType } =
    useContext(DialogueContext);

  // State to store saved products, initialized from local storage
  const [savedProducts, setSavedProducts] = useState(() => {
    const saved = localStorage.getItem("savedProducts");
    return saved ? JSON.parse(saved) : [];
  });

  // Save saved products to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("savedProducts", JSON.stringify(savedProducts));
  }, [savedProducts]);

  // Function to save a product
  const saveProduct = (product) => {
    setSavedProducts((prevSaved) => {
      // Checking if the product is already saved
      const existingProduct = prevSaved.find((item) => item.id === product.id);
      if (existingProduct) {
        // Displaying a danger message if the product is already saved
        setTimeout(() => {
          setDialougeText("Product already exists in saved items!");
          setBoxStatus("block");
          setType("danger");
        }, 0);
        return prevSaved;
      }
      // Adding the new product to saved products
      setTimeout(() => {
        setDialougeText("Product added to saved items!");
        setBoxStatus("block");
        setType("success");
      }, 0);
      return [...prevSaved, product];
    });
  };

  // Function to remove a saved product
  const removeSavedProduct = (id) => {
    setSavedProducts((prevSaved) => prevSaved.filter((item) => item.id !== id));
  };

  // Function to get the total number of saved items
  const getTotalSavedItems = () => {
    return savedProducts.length;
  };

  return (
    <SaveContext.Provider
      value={{
        savedProducts,
        saveProduct,
        removeSavedProduct,
        getTotalSavedItems, // Provide the getTotalSavedItems function
      }}
    >
      {children}
    </SaveContext.Provider>
  );
};

// Custom hook to use the SaveContext
export const useSave = () => {
  return useContext(SaveContext);
};
