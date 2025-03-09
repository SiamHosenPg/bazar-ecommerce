import React from "react";

const Notfound = () => {
  return (
    <div className="">
      <div className="PageRatio">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-24">
          <div className="Left  w-3/4 lg:w-1/2">
            <img src="/image/notfound.svg" alt="" />
          </div>
          <div className="right w-full px-8 lg:px-0 lg:w-1/2 ">
            <h1 className=" text-7xl lg:text-9xl font-semibold text-[#ddd]">
              404
            </h1>
            <h3 className="mt-14">
              The Page You’re Looking for Couldn’t Be Found
            </h3>
            <p className="mt-8 w-full  text-[#777]">
              We couldn’t find the page you were trying to reach. It may have
              been moved, deleted, or the URL might be incorrect. Don’t worry,
              you can return to the homepage or use the search bar to find what
              you need. If the problem persists, feel free to contact our
              support team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
