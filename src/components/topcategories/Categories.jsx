import React from "react";
import { CategoriesList } from "../../assets/Assets";
import { NavLink } from "react-router";

const Categories = () => {
  return (
    <div className="Categories mt-14 sm:mt-14 md:mt-20">
      <div className="PageRatio ">
        <h3>Top Categories</h3>
        <div className="Lists mt-5 sm:mt-6 md:mt-10 2xl:gap-7 2xl:h-32 xl:gap-5 xl:h-28   gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5">
          {CategoriesList &&
            CategoriesList.map((Ctgores, index) => {
              return (
                <NavLink
                  to={Ctgores.Urldirectory}
                  key={index}
                  className="block h-full"
                  href=""
                >
                  <div className="Box  flex items-center 2xl:gap-4 xl:gap-3 md:gap-2 px-8 py-5 gap-5  h-full 2xl:py-2 2xl:px-4 xl:px-3 xl:py-1 rounded-xl duration-300 hover:bg-slate-100 bg-slate-50">
                    <img
                      className="w-16 "
                      src={Ctgores.Images}
                      alt={Ctgores.Name}
                      loading="lazy"
                    />
                    <div className="Txt">
                      <b className=" block">{Ctgores.Name}</b>
                      <p className="p-ellipsetext text-xs mt-1">
                        {Ctgores.Text}
                      </p>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
