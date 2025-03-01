import React from "react";
import { NavLink } from "react-router-dom";
import Ratingstar from "./Ratingstar";
import { MdOutlineShoppingCart } from "react-icons/md";

const Card = ({ AllproductsData }) => {
  const DesibleDiscount = {
    display: "none",
  };
  const ShowDiscount = {
    display: "block",
  };

  return (
    <div className="block">
      <div className="ProductList mt-5 sm:mt-5 md:mt-8 lg:mt-10   gap-1 sm:gap-4 md:gap-6 lg:gap-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {AllproductsData &&
          AllproductsData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`/AllProducts/${item.id}`}
                className="block border hover:border-[#bbb] rounded-none sm:rounded-xl"
              >
                <div
                  style={item.discount == null ? DesibleDiscount : ShowDiscount}
                  className="Discount absolute bg-green-700 text-white w-[80px] sm:w-[100px] text-center z-20 py-1 mt-10 ml-[0px] sm:ml-[-10px] rounded-sm "
                >
                  <span className="text-sm sm:text-lg font-medium">
                    {item.discount}
                  </span>
                  % <span className="text-[10px] sm:text-sm">Save</span>
                </div>
                <div className="Card  duration-300 overflow-hidden pb-6">
                  <div className="Imgs m-3 bg-slate-50 flex items-center justify-center aspect-square rounded-lg overflow-hidden">
                    <img
                      className="object-cover aspect-square duration-300 hover:scale-[1.1]"
                      src={item.filePath}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="line-ellipsetext text-[10px] sm:text-sm mt-4 sm:mt-6 px-5 sm:px-8">
                    Seller - {item.author}
                  </div>
                  <b className="p-ellipsetext mt-1 sm:mt-3 block px-5 sm:px-8">
                    {item.name}
                  </b>
                  <div className="rating px-5 sm:px-8 flex items-center gap-2 mt-2">
                    <div className="star flex items-center justify-start gap-1 text-[10px] sm:text-sm">
                      <Ratingstar rating={item.rating} />
                    </div>
                    <div className="text-sm">{item.rating}</div>
                  </div>
                  <div className="Order flex items-center justify-between mt-3 px-5 sm:px-8">
                    <h4>
                      {item.price} <span className="text-lg">$</span>{" "}
                      <del className="StartingPrice text-sm ml-2 text-[#acacac]">
                        {item.startingprice}
                      </del>
                    </h4>
                    <MdOutlineShoppingCart className="text-lg sm:text-xl" />
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
