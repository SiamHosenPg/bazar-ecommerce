import React, { useContext } from "react";
import Card from "../components/card/Card";
import { ProductData } from "../assets/contextapi/ContextApp";

const Watchproduct = () => {
  const { ProductsData } = useContext(ProductData);
  const WatchProducts = ProductsData.filter((p) => p.category == "watch");
  return (
    <div>
      <div className="PageRatio">
        <Card AllproductsData={WatchProducts} />
      </div>
    </div>
  );
};

export default Watchproduct;
