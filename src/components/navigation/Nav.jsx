import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="Navigation w-full sticky top-0 h-16 sm:h-[60px] md:h-[60px] xl:h-[78px] border-b bg-white z-50">
      <div className="PageRatio flex items-center justify-between h-full">
        <div className="logo">
          <NavLink to="/" className="text-3xl font-bold">
            Bazar
          </NavLink>
        </div>
        <ul className="Pages flex items-center justify-center gap-10  font-medium">
          <NavLink to="/" className="BarLogo text-3xl font-bold hidden ">
            Bazar
          </NavLink>
          <li className="link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allproducts">Products</NavLink>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        <div className="Buttons flex gap-4 text-lg items-center">
          <NavLink to="/login">
            <CgProfile />
          </NavLink>
          <NavLink to="/save">
            <FaRegHeart />
          </NavLink>
          <NavLink to="/carts">
            <MdOutlineShoppingCart />
          </NavLink>
          <form className="Inputbox flex gap-1 border border-[#666] rounded-full overflow-hidden">
            <input
              className="border-none rounded-md px-4  py-2 text-sm"
              type="text"
              placeholder="Search Product"
            />
            <button className="flex items-center gap-2 ml-[-5px] w-7">
              <IoSearch className="" />{" "}
            </button>
          </form>

          <FaBarsStaggered className="MenuButton font-semibold text-xl hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
