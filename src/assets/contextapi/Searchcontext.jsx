import { createContext, useContext, useState } from "react";
import { ProductData } from "./ContextApp";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { ProductsData } = useContext(ProductData);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [Suggestionbox, showSGbox] = useState(false);

  const searchProducts = () => {
    const results = ProductsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };
  const handleQueryChange = (value) => {
    setQuery(value);
    if (value.length > 0) {
      showSGbox(true);
      const matches = ProductsData.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      showSGbox(false);
      setSuggestions([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filteredProducts,
        searchProducts,
        suggestions,
        Suggestionbox,
        handleQueryChange,
        showSGbox,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
