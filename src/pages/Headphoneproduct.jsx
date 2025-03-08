import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Headphoneproduct = () => {
  const { ProductsData } = useContext(ProductData);
  const Headphones = ProductsData.filter((p) => p.category == "headphone");
  return (
    <div>
      <div className="PageRatio">
        <Card AllproductsData={Headphones} />
      </div>
    </div>
  );
};

export default Headphoneproduct;
