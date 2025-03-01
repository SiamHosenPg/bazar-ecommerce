import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const AllProduct = () => {
  const { ProductsData } = useContext(ProductData);
  return (
    <div>
      <div className="PageRatio mt-10">
        <Card AllproductsData={ProductsData} />
      </div>
    </div>
  );
};

export default AllProduct;
