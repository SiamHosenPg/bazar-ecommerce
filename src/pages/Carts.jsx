import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'

const carts = () => {
  return (
    <div>
        <Nav />
        <div className="CartsAll px-32 mt-32 "> 
            <div className='Ratio'>
                <div className="Carts">
                    <div className="Image"><img src="" alt="" /></div>
                    <div>Products Name</div>
                    <div>Hanif Hosen</div>
                    <div>78$</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

  )
}

export default carts
