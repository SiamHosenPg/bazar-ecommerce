import React from "react";
import Nav from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import { AllproductsData } from "../assets/Allproductsdata";

const Shoepage = () => {
  const ShoeProducts = AllproductsData.filter((p) => p.Category == "shoe");
  return (
    <div>
      <Nav />
      <div className=" px-32">
        <Card AllproductsData={ShoeProducts} />
      </div>
      <Footer />
    </div>
  );
};

export default Shoepage;
