import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Nav.css'


const Nav = () => {
  return (
    <nav className="Navigation w-full sticky top-0 h-20 border-b bg-white z-50">
        <div className="PageRatio flex items-center justify-between h-full">
            <div className="logo"><NavLink to="/" className='text-3xl font-bold'>Bazar</NavLink></div>
            <ul className="Pages flex items-center justify-center gap-10  font-medium">
              <NavLink to="/" className='text-3xl font-bold '>Bazar</NavLink>
                <li className='link'><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/allproducts">Products</NavLink></li>
                <li><a href="">Gift Cards</a></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
            <div className="Buttons flex gap-4 text-xl">
                <button className='flex items-center gap-2'><IoSearch /> <span className='text-sm'>Search</span></button>
               
                  <NavLink to="/login">
                    <CgProfile />
                  </NavLink>
              
             
                  <NavLink to="/save">
                    <FaRegHeart />
                  </NavLink>
              
              
                  <NavLink to="/carts">
                    <MdOutlineShoppingCart />
                  </NavLink>  

                  <div className="font-semibold text-xl bg-slate-600 sm:block md:block xl:hidden">+</div> 
               
            </div>
        </div>
    </nav>
  )
}

export default Nav
