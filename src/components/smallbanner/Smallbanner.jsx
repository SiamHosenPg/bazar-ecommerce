import React, { useContext } from "react";
import { ProductData } from "../../assets/contextapi/ContextApp";
import { FaArrowRight } from "react-icons/fa6";

const Smallbanner = () => {
  const { ShortBanarData } = useContext(ProductData);
  return (
    <div className="PageRatio ">
      <h3 className="mt-24">Couple Combo</h3>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        voluptatibus optio cupiditate provident ea!
      </p>
      <div className="ContentArea mt-12 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-7 ">
        {ShortBanarData &&
          ShortBanarData.map((Banner, index) => {
            return (
              <div
                className={`  overflow-hidden h-auto sm:h-[420px] xl:h-[380px] 2xl:h-[420px] pb-12 sm:pb-0  rounded-lg flex flex-col sm:flex-row gap-4 xl:gap-0 2xl:gap-4 justify-between items-center relative border `}
                key={index}
              >
                <div className="right float-end w-full sm:w-5/12 h-auto aspect-square sm:aspect-auto sm:h-full p-3  overflow-hidden ">
                  <img
                    className="h-full w-full rounded-md"
                    src={Banner.Image}
                    alt=""
                  />
                </div>

                <div className="Left float-start w-full sm:w-7/12  px-8">
                  <h4>{Banner.Title}</h4>
                  <p className="mt-5 text-[#666]">{Banner.About}</p>
                  <button className=" w-[150px] py-3 mt-8 bg-[#444] hover:bg-[#111] text-white rounded-sm flex items-center justify-center gap-3">
                    <span>Check in</span> <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Smallbanner;
