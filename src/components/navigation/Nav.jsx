import React from 'react'
import { NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";


const Nav = () => {
  return (
    <nav className="Navigation w-full sticky top-0 h-20 px-32 border-b bg-white z-50">
        <div className="ratio flex items-center justify-between h-full">
            <div className="logo"><NavLink to="/" className='text-3xl font-bold'>Bazar</NavLink></div>
            <ul className="Pages flex items-center justify-center gap-10  font-medium">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/allproducts">Products</NavLink></li>
                <li><a href="">Gift Cards</a></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
            <div className="Buttons flex gap-5 text-xl">
                <button className='flex items-center gap-2'><IoSearch /> <span className='text-sm'>Search</span></button>
                <button>
                  <NavLink to="/login">
                    <CgProfile />
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/save">
                    <FaRegHeart />
                  </NavLink>
                </button>
                <button>  
                  <NavLink to="/carts">
                    <MdOutlineShoppingCart />
                  </NavLink>   
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav
