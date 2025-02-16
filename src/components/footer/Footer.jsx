import React from "react";

const Footer = () => {
  return (
    <div className="Footer PageRatio ">
      <div className="bg-indigo-200 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-10 sm:py-10 md:py-12 xl:py-16 rounded-xl mb-20 mt-24">
        <div className="TopFooter grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          <div className="FLinks hidden flex-col gap-2 sm:hidden md:hidden lg:hidden xl:flex ">
            <div className="mb-3">
              <b>Products</b>
            </div>
            <a href="">Featured Products</a>
            <a href="">Trending Now</a>
            <a href="">On Sale</a>
            <a href="">Top Rated</a>
            <a href="">Gift Sets</a>
          </div>
          <div className="FLinks  flex-col gap-2  hidden sm:hidden md:hidden lg:flex xl:flex ">
            <div className="mb-3">
              <b>Information</b>
            </div>
            <a href="">About Our Company</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
            <a href="">Sitemap</a>
            <a href="">Security & Payment</a>
          </div>
          <div className="FLinks flex flex-col gap-2">
            <div className="mb-3">
              <b>Support</b>
            </div>
            <a href="">Customer Support</a>
            <a href="">Track Order</a>
            <a href="">Return & Exchange</a>
            <a href="">Warranty Info</a>
            <a href="">Order Help</a>
          </div>
          <div className="FLinks flex flex-col gap-2 ">
            <div className="mb-3">
              <b>Stay Connected</b>
            </div>
            <a href="">Newsletter Sign-Up</a>
            <a href="">Blog Updates</a>
            <a href="">Join Our Loyalty Program</a>
            <a href="">Exclusive Offers</a>
            <a href="">Upcoming Events</a>
          </div>
        </div>
        <a className="block text-sm sm:text-[14px] mt-9 font-medium" href="">
          View more information
        </a>
      </div>
    </div>
  );
};

export default Footer;
