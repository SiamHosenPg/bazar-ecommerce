import { createContext } from "react";
import ProductsData from "../information/produtcs.json";
import ShortBanarData from "../information/baners.json";

export const ProductData = createContext();
export const ProductDataProvider = ({ children }) => {
  return (
    <ProductData.Provider value={{ ProductsData, ShortBanarData }}>
      {children}
    </ProductData.Provider>
  );
};
