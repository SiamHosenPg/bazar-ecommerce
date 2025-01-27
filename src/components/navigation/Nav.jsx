import React from 'react'
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="Navigation w-full sticky top-0 h-20 px-32 bg-white z-50">
        <div className="ratio flex items-center justify-between h-full">
            <div className="logo"><a href="" className='text-3xl font-bold'>Bazar</a></div>
            <ul className="Pages flex items-center justify-center gap-10  font-medium">
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="">Today's Deails</a></li>
                <li><a href="">Gift Cards</a></li>
                <li><NavLink to="/about">About Us</NavLink></li>
            </ul>
            <div className="Buttons flex gap-5 text-lg">
                <button className='flex items-center gap-2'><i class="fa-solid fa-magnifying-glass"></i> <span className='text-sm'>Search</span></button>
                <button><NavLink to="/login"><i class="fa-regular fa-user"></i></NavLink></button>
                <button><NavLink to="/save"><i class="fa-regular fa-heart"></i> </NavLink></button>
                <button>  <NavLink to="/carts"> <i class="fa-solid fa-cart-shopping"></i></NavLink>   </button>
            </div>
        </div>
    </nav>
  )
}

export default Nav
