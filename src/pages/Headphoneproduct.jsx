import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card'
import { AllproductsData } from '../assets/Allproductsdata'

const Headphoneproduct = () => {
      const HeadphoneProducts = AllproductsData.filter((p) => p.Category == "headphone");
  return (
    <div>
        <Nav />
        <div className="px-32"> 
            <Card AllproductsData={HeadphoneProducts}/>
        </div>
        <Footer />
      
    </div>
  )
}

export default Headphoneproduct
