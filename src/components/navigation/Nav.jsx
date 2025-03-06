import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  const [NavpagePosition, SetNavPosition] = useState(false);
  const [RightnavPostion, setRightPosition] = useState("right-[-400px]");
  const [Shadowdisplay, setShadowdisplay] = useState("hidden");
  const handelNavPosotion = () => {
    if (NavpagePosition == true) {
      SetNavPosition(false);
      setRightPosition("right-[-400px]");
      setShadowdisplay("hidden");
    } else {
      SetNavPosition(true);
      setRightPosition("right-[0px]");
      setShadowdisplay("block");
    }
  };

  return (
    <nav className="Navigation w-full sticky top-0 h-[60px] sm:h-[60px] md:h-[60px] xl:h-[78px] border-b bg-white z-50 ">
      <div
        onClick={handelNavPosotion}
        className={`${Shadowdisplay} lg:hidden Shadowbox w-full h-screen fixed bg-[#00000049] z-40 top-[60px]`}
      ></div>
      <div className="PageRatio flex items-center justify-between h-full">
        <div className="logo">
          <NavLink to="/" className="text-3xl font-bold">
            Bazar
          </NavLink>
        </div>

        <div
          className={` transition-all bg-white border-l lg:border-none lg:bg-transparent  NavRightSide px-8 py-8 lg:px-0 lg:py-0 w-[310px]  md:w-[310px] 2xl:w-4/6 xl:w-9/12 lg:w-10/12 h-screen lg:h-fit fixed lg:relative top-[60px] lg:top-0 ${RightnavPostion} duration-300 ease-in-out lg:right-0 justify-end lg:justify-between  flex items-start lg:items-center flex-col-reverse lg:flex-row z-50 `}
        >
          <ul className="Pages  w-full lg:w-fit block lg:flex items-start lg:items-center  gap-10  font-medium mt-6 lg:mt-0">
            <li className="link py-1">
              <NavLink to="/" onClick={handelNavPosotion}>
                Home
              </NavLink>
            </li>
            <li className="py-1">
              <NavLink to="/allproducts" onClick={handelNavPosotion}>
                Products
              </NavLink>
            </li>
            <li className="py-1" onClick={handelNavPosotion}>
              <a href="">Gift Cards</a>
            </li>
            <li className="py-1" onClick={handelNavPosotion}>
              <NavLink to="/about">About Us</NavLink>
            </li>
          </ul>
          <div className="block lg:hidden absolute bottom-20 text-[#888] text-[13px]  pr-8">
            @Copyrighting cmaim in 2022 all right resubels.
          </div>
          <div className=" w-full lg:w-fit Buttons flex flex-col-reverse lg:flex-row gap-1 lg:gap-4  items-start lg:items-center">
            <NavLink
              onClick={handelNavPosotion}
              to="/carts"
              className="flex gap-3 items-center w-full lg:w-fit py-1 "
            >
              <MdOutlineShoppingCart className="text-lg" />
              <span className=" block lg:hidden font-medium">Cart</span>
            </NavLink>
            <NavLink
              onClick={handelNavPosotion}
              to="/save"
              className="flex gap-3 items-center w-full lg:w-fit py-1"
            >
              <FaRegHeart className="text-lg" />
              <span className=" block lg:hidden font-medium">
                Save Products
              </span>
            </NavLink>
            <NavLink
              onClick={handelNavPosotion}
              to="/login"
              className="flex gap-3 items-center w-full lg:w-fit py-1"
            >
              <CgProfile className="text-lg block" />
              <span className=" block lg:hidden font-medium">Profile</span>
            </NavLink>

            <form className="Inputbox w-full lg:w-[260px] flex items-center justify-between gap-3 mt-5 lg:mt-0 mb-6 lg:mb-0 border border-[#666] rounded-full overflow-hidden">
              <input
                className="border-none  rounded-md px-4  py-2 text-sm w-5/6"
                type="text"
                placeholder="Search Product"
              />
              <button className="flex items-center gap-2  w-7">
                <IoSearch className="" />{" "}
              </button>
            </form>
            <NavLink
              to="/"
              className="BarLogo text-3xl font-bold block lg:hidden "
            >
              Bazar
            </NavLink>
          </div>
        </div>

        <FaBarsStaggered
          onClick={handelNavPosotion}
          className="MenuButton font-semibold text-lg block lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Nav;
