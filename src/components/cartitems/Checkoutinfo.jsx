import React from "react";
import GooglePay from "../../../public/image/prement-image/Google_Pay_GPay_Logo-512.webp";
import AmazonPay from "../../../public/image/prement-image/Amazon_Pay_logo.svg.png";
import PayPalPay from "../../../public/image/prement-image/PayPal.svg.png";
import cashPay from "../../../public/image/prement-image/handshaik.png";

const Checkoutinfo = () => {
  return (
    <div>
      <div className="Checkout mt-24 px-4 ">
        <h3 className="">Checkout </h3>
        <div className="flex flex-col lg:flex-row gap-24 items-start justify-between  mt-6 pb-10">
          <div className="LeftSection w-full lg:w-7/12">
            <b className="block pb-4 border-b mb-6 uppercase">
              Contuct Information
            </b>
            <form className="" action="">
              <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                <div className="w-full">
                  <b className="text-[13px] ">Type Your Full Name</b>
                  <input
                    className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                    type="text"
                    placeholder="Enter your full Name"
                  />
                </div>
                <div className="w-full">
                  <b className="text-[13px]  ">Phone Number</b>
                  <input
                    className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                    type="text"
                    placeholder="Enter your number"
                  />
                </div>
                <div className="w-full">
                  <b className="text-[13px] ">Email Address (Optional)</b>
                  <input
                    className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Address Section  */}
              <div className="Address mt-16">
                <b className=" uppercase border-b pb-4 w-full block mb-6">
                  Address
                </b>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div className="w-full">
                    <b className="text-[13px]">Street Address</b>
                    <input
                      className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                      type="text"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="w-full">
                    <b className="text-[13px]  ">City, State, Country</b>
                    <input
                      className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                      type="text"
                      placeholder="City, State, Country"
                    />
                  </div>
                  <div className="w-full">
                    <b className="text-[13px]">ZIP Code</b>
                    <input
                      className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                      type="text"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div className="w-full">
                    <b className="text-[13px]">Country</b>
                    <input
                      className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                  <div className="w-full">
                    <b className="text-[13px]">Full Address (Optional)</b>
                    <input
                      className="w-full border border-[#888] px-5 py-3 rounded-md block mt-3"
                      type="text"
                      placeholder="Gobindopur, kushtia, bangladesh"
                    />
                  </div>
                </div>
              </div>

              <div className="Prementmatiod mt-16">
                <b className="block pb-4 border-b mb-6 uppercase">
                  Prement mathod
                </b>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <div className="flex items-center justify-start gap-4 ">
                    <input id="Bkash" type="radio" />
                    <label htmlFor="Bkash block ">
                      <img
                        className="block w-40 bg-slate-100 p-4 px-6 2xl:px-8 rounded-md aspect-video object-contain"
                        src={cashPay}
                        alt=""
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-4 ">
                    <input id="Bkash" type="radio" />
                    <label htmlFor="Bkash block ">
                      <img
                        className="block w-40 bg-slate-100 p-4 px-6 2xl:px-8 rounded-md aspect-video object-contain"
                        src={GooglePay}
                        alt=""
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-4 ">
                    <input id="Bkash" type="radio" />
                    <label htmlFor="Bkash block ">
                      <img
                        className="block w-40 bg-slate-100 p-4 px-6 2xl:px-8 rounded-md aspect-video object-contain"
                        src={AmazonPay}
                        alt=""
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-start gap-4 ">
                    <input id="Bkash" type="radio" />
                    <label htmlFor="Bkash block ">
                      <img
                        className="block w-40 bg-slate-100 p-4 px-6 2xl:px-8 rounded-md aspect-video object-contain"
                        src={PayPalPay}
                        alt=""
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-3 items-start">
                <input className="w-5 h-5 mt-1 " id="confirm" type="checkbox" />
                <label className="text-[13px]" htmlFor="confirm">
                  I confirm that all transactions with me will be conducted at
                  this address and through this specified payment method,
                  ensuring clarity and mutual agreement.
                </label>
              </div>

              <button className="px-16 py-3 bg-blue-600 text-white  rounded-md mt-10">
                Place Order
              </button>
            </form>
          </div>
          <div className="rightSection w-full lg:w-5/12">
            <b>Product Information</b>
          </div>
        </div>
      </div>
      {/* Checkout section closs  */}
    </div>
  );
};

export default Checkoutinfo;
