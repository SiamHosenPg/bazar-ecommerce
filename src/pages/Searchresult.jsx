import React from "react";
import { useContext } from "react";
import { SearchContext } from "../assets/contextapi/Searchcontext";
import Card from "../components/card/Card";

const Searchresult = () => {
  const { filteredProducts } = useContext(SearchContext);
  return (
    <div>
      <div className="PageRatio">
        <h2 className="text-xl font-bold">Search Results:</h2>
        <ul>
          {filteredProducts.length > 0 ? (
            <Card AllproductsData={filteredProducts} />
          ) : (
            <p>No products found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Searchresult;
