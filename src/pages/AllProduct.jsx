import React from "react";
import { AllproductsData } from "../assets/Allproductsdata";
import Card from "../components/card/Card";

const AllProduct = () => {
  return (
    <div>
      <div className="PageRatio mt-10">
        <Card AllproductsData={AllproductsData} />
      </div>
    </div>
  );
};

export default AllProduct;
