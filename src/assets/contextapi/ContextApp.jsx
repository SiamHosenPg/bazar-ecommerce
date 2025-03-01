import { createContext } from "react";
import ProductsData from "../information/produtcs.json";

export const ProductData = createContext();
export const ProductDataProvider = ({ children }) => {
  return (
    <ProductData.Provider value={{ ProductsData }}>
      {children}
    </ProductData.Provider>
  );
};
