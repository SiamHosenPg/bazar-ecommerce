import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Watchproduct = () => {
  const { ProductsData } = useContext(ProductData);
  const WatchProducts = ProductsData.filter((p) => p.Category == "watch");
  return (
    <div>
      <div className="px-32">
        <Card AllproductsData={WatchProducts} />
      </div>
    </div>
  );
};

export default Watchproduct;
