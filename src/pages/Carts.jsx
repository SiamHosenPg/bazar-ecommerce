import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import CartItems from '../components/cartitems/CartItems'

const carts = () => {
  return (
    <div>
        <Nav />
        <div className="PageRatio">
          <CartItems />
        </div>
        <Footer />
    </div>

  )
}

export default carts
