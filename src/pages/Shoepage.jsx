import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Shoepage = () => {
  const { ProductsData } = useContext(ProductData);
  const ShoeProducts = ProductsData.filter((p) => p.category == "shoe");
  return (
    <div>
      <div className=" PageRatio">
        <Card AllproductsData={ShoeProducts} />
      </div>
    </div>
  );
};

export default Shoepage;
