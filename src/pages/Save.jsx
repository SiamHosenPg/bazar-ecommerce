import React from 'react'
import Saveproducts from '../components/saveproducts/Saveproducts'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'

const Save = () => {
  return (
    <div>
        <Nav />
        <div className='PageRatio'>
          <Saveproducts />
        </div>
        <Footer/>
    </div>
  )
}

export default Save
