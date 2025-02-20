import React from "react";
import Card from "../components/card/Card";
import { AllproductsData } from "../assets/Allproductsdata";

const Headphoneproduct = () => {
  const HeadphoneProducts = AllproductsData.filter(
    (p) => p.Category == "headphone"
  );
  return (
    <div>
      <div className="px-32">
        <Card AllproductsData={HeadphoneProducts} />
      </div>
    </div>
  );
};

export default Headphoneproduct;
