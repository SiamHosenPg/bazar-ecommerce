import React from "react";
import Card from "../components/card/Card";
import { AllproductsData } from "../assets/Allproductsdata";

const Faceproduct = () => {
  const FaceProducts = AllproductsData.filter(
    (p) => p.Category == "faceproduct"
  );
  return (
    <div>
      <div className="px-32">
        <Card AllproductsData={FaceProducts} />
      </div>
    </div>
  );
};

export default Faceproduct;
