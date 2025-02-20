import React from "react";

import Card from "../components/card/Card";

import { AllproductsData } from "../assets/Allproductsdata";

const Watchproduct = () => {
  const WatchProducts = AllproductsData.filter((p) => p.Category == "watch");
  return (
    <div>
      <div className="px-32">
        <Card AllproductsData={WatchProducts} />
      </div>
    </div>
  );
};

export default Watchproduct;
