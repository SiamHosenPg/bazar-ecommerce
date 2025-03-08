import React, { useContext } from "react";
import Card from "../components/card/Card";

import { ProductData } from "../assets/contextapi/ContextApp";

const Faceproduct = () => {
  const { ProductsData } = useContext(ProductData);
  const FaceProducts = ProductsData.filter((p) => p.category == "faceproduct");
  return (
    <div>
      <div className="PageRatio">
        <Card AllproductsData={FaceProducts} />
      </div>
    </div>
  );
};

export default Faceproduct;
