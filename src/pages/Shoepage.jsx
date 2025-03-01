import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Shoepage = () => {
  const { ProductsData } = useContext(ProductData);
  const ShoeProducts = ProductsData.filter((p) => p.Category == "shoe");
  return (
    <div>
      <div className=" px-32">
        <Card AllproductsData={ShoeProducts} />
      </div>
    </div>
  );
};

export default Shoepage;
