import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'
import { AllproductsData } from '../assets/Allproductsdata'

const Dressproduct = () => {
          const DressProducts = AllproductsData.filter((p) => p.Category == "dress");
  return (
    <div>
      <Nav />
        <div className="px-32">
            <Card AllproductsData={DressProducts}/>
        </div>
      <Footer />
    </div>
  )
}

export default Dressproduct
