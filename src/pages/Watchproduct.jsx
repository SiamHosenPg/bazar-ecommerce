import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'

import { AllproductsData } from '../assets/Allproductsdata'

const Watchproduct = () => {
    const WatchProducts = AllproductsData.filter((p) => p.Category == "watch");
  return (
    <div>
      <Nav />
      <div className="px-32">
        <Card  AllproductsData={WatchProducts}/>
      </div>
      <Footer />
    </div>
  )
}

export default Watchproduct
