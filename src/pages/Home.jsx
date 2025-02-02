import React from 'react'

import Nav from '../components/navigation/Nav'
import Header from '../components/header/Header'
import Categories from '../components/topcategories/Categories'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'



const Home = () => {
 
  return (
    <div>
        <div className="topText h-14 flex items-center justify-between text-gray-500 px-32">
            <div className="left">siamhosenpg@gmail.com</div>
            <div className="links flex gap-8 items-center">
                <a href=""><i class="fa-solid fa-location-dot text-sm"></i> Bangladesh</a>
                <a href=""><i class="fa-solid fa-earth-americas text-sm"></i> English</a>
                <a href="">About Our Company</a>
                <a href="">Developer Contruct</a>
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
