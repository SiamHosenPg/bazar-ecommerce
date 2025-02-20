import React from "react";

import Card from "../components/card/Card";
import { AllproductsData } from "../assets/Allproductsdata";

const Dressproduct = () => {
  const DressProducts = AllproductsData.filter((p) => p.Category == "dress");
  return (
    <div>
      <div className="px-32">
        <Card AllproductsData={DressProducts} />
      </div>
    </div>
  );
};

export default Dressproduct;
