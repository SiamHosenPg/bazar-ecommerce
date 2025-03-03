import React from "react";
import Header from "../components/header/Header";
import Categories from "../components/topcategories/Categories";
import Products from "../components/products/Products";
import { IoLocationOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import Smallbanner from "../components/smallbanner/Smallbanner";

const Home = () => {
  return (
    <div>
      <div className="PageRatio pt-6 hidden topText items-center justify-between text-gray-500 sm:hidden md:hidden xl:flex">
        <div className="left">siamhosenpg@gmail.com</div>
        <div className="links flex gap-8 items-center">
          <div className="flex items-center gap-1" href="">
            <IoLocationOutline /> Bangladesh
          </div>
          <div className="flex items-center gap-1" href="">
            <GiWorld /> English
          </div>
          <div href="">About Our Company</div>
          <div href="">Developer Contruct</div>
        </div>
      </div>

      <Header />
      <Categories />
      <Products />
      <Smallbanner />
    </div>
  );
};

export default Home;
