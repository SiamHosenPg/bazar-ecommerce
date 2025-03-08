import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Dressproduct = () => {
  const { ProductsData } = useContext(ProductData);
  const DressProducts = ProductsData.filter((p) => p.category == "dress");
  return (
    <div>
      <div className="PageRatio">
        <Card AllproductsData={DressProducts} />
      </div>
    </div>
  );
};

export default Dressproduct;
