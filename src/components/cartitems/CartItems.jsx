import React, { useState } from "react";
import "./cartitems.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { useCart } from "../../assets/contextapi/Cartcontext";
import Checkoutinfo from "./Checkoutinfo";

const CartItems = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    discount,
    getSubTotal,
    getDiscountAmount,
    getTotalPrice,
    getTotalWithDelivery,
    applyCoupon,
  } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const deliveryFee = 5; // Delivery fee $5

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="mt-14">
      <h3>Shopping Cart</h3>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between items-start gap-5 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-24 mt-8">
        <div className="CartItemsAll w-full sm:w-full lg:w-8/12 border  rounded-lg px-4 sm:px-4 py-4 md:px-10 md:py-5 xl:px-12 xl:py-6">
          <div className="TableHead font-medium flex items-center justify-between border-b pb-4 gap-4">
            <div className="line-ellipsetext w-6/12">Product Code</div>
            <div className="line-ellipsetext w-2/12">Quantity</div>
            <div className="line-ellipsetext w-2/12">Total Price</div>
            <div className="line-ellipsetext w-2/12">Action</div>
          </div>
          {/* Title Table Head Section Closs  */}
          {cart.length < 1 ? (
            <div className="  text-center mt-6 text-[#888] py-10 flex items-start justify-center gap-4">
              <MdErrorOutline className="text-2xl" />{" "}
              <span className="text-sm w-3/6 text-left">
                You have no products in your cart. Start{" "}
                <span className="font-bold">Add To Cart</span> items to shop
                with ease!
              </span>
            </div>
          ) : (
            // Data When Nothing
            <div className="">
              {cart &&
                cart.map((Items) => {
                  const PdPrice = Items.price * Items.quantity;
                  const PriceFixed = PdPrice.toFixed(2);
                  return (
                    <div
                      key={Items.id}
                      className="CartItem mt-3 flex justify-between items-center gap-4 border-b py-4"
                    >
                      <div className="PdCode flex flex-col sm:flex-col md:flex-row lg:flex-col xl:flex-row w-6/12 items-start sm:items-start md:items-center lg:items-start xl:items-center justify-start gap-5 ">
                        <img
                          className="block aspect-square w-[100px] rounded-md overflow-hidden bg-slate-200 "
                          src={Items.filePath}
                          alt=""
                          loading="lazy"
                        />
                        <div className="w-full">
                          <b className="p-ellipsetext block w-full sm:w-full md:w-5/6 lg:w-full xl:w-5/6 ">
                            {Items.name}
                          </b>
                          <span className="hidden sm:hidden md:block lg:hidden xl:block text-sm mt-2">
                            {Items.author}
                          </span>
                        </div>
                      </div>
                      {/* Product Code Section Closs  */}
                      <div className="quantity w-2/12">
                        <div className=" flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 w-fit">
                          <div>
                            <IoIosAdd
                              onClick={() => increaseQuantity(Items.id)}
                              className="text-xl cursor-pointer border rounded-full "
                            />
                          </div>
                          <div className="text-lg">{Items.quantity}</div>
                          <div>
                            <IoIosRemove
                              onClick={() => decreaseQuantity(Items.id)}
                              className="text-xl cursor-pointer border rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Quantity Section Closs  */}
                      <div className="Price w-2/12 text-[15px] sm:text-lg font-medium">
                        ${PriceFixed}
                      </div>
                      <div className="Action  w-2/12 flex justify-center xl:justify-start items-center ">
                        <button>
                          <MdDeleteOutline
                            onClick={() => removeFromCart(Items.id)}
                            className="text-xl"
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}

              {/* Cart Box Closs  */}
            </div>
            // Data Lengtih count closs
          )}
        </div>
        {/* Cart Items Closs  */}
        <div className="PriceItems w-full sm:w-full md:w-4/6 lg:w-4/12 border rounded-lg px-8 py-4 md:px-10 md:py-5 xl:px-12 xl:py-6 ">
          <div className=" pb-4 font-medium">Order Summary</div>
          <form
            action=""
            className="flex gap-4 justify-start items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="border w-7/12 border-[#444] rounded-3xl px-5 py-2"
              type="text"
              name=""
              id="Viuture"
              placeholder="Discount vutuare"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <input
              className="border w-[100px] border-[#444] rounded-3xl px-5 py-2 text-[#666]"
              type="submit"
              value="Apply"
              onClick={() => applyCoupon(couponCode)}
            />
          </form>
          <div className="flex justify-between mt-8 items-center">
            <b className="block ">Sub Total</b>
            <span className="block text-lg font-medium">
              ${getSubTotal(cart).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <b className="block ">Discount Money</b>
            <span className="block text-lg font-medium">
              ${getDiscountAmount(cart, discount).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mt-2 items-center border-b pb-3">
            <b className="block ">Delebary Fee</b>
            <span className="block text-lg font-medium">
              {" "}
              ${deliveryFee.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <b className="block ">Total Price </b>
            <span className="block text-xl font-semibold ">
              ${getTotalWithDelivery(deliveryFee).toFixed(2)}
            </span>
          </div>
          <div className="flex gap-2 w-5/6 mt-8">
            <div>
              <AiOutlineSafety className=" text-xl" />
            </div>
            <p>
              <b>90 Days Limeted Woranty</b> without firepse and distory or your
              folt{" "}
              <a className="font-semibold" href="">
                Detels
              </a>
            </p>
          </div>
          <div
            className="mt-8 border rounded-full w-[200px] bg-[#333] text-white text-center py-3 float-right cursor-pointer"
            onClick={handleCheckout}
          >
            Checkout Now
          </div>
        </div>
        {/* Price Items Closs  */}
      </div>
    </div>
  );
};

export default CartItems;
