import React from 'react'

import Nav from '../components/navigation/Nav'
import Header from '../components/header/Header'
import Categories from '../components/topcategories/Categories'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'

import { IoLocationOutline } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";



const Home = () => {
 
  return (
    <div>
        <div className="topText h-14 flex items-center justify-between text-gray-500 px-32">
            <div className="left">siamhosenpg@gmail.com</div>
            <div className="links flex gap-8 items-center">
                <div className='flex items-center gap-1' href=""><IoLocationOutline /> Bangladesh</div>
                <div className='flex items-center gap-1' href=""><GiWorld /> English</div>
                <div href="">About Our Company</div>
                <div href="">Developer Contruct</div>
            </div>
        </div>
       <Nav />
       <Header />
       <Categories />
       <Products />
       <Footer />
    </div>
  )
}

export default Home
