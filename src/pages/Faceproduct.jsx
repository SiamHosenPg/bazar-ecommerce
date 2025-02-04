import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import Card from '../components/card/Card';
import { AllproductsData } from '../assets/Allproductsdata';

const Faceproduct = () => {
     const FaceProducts = AllproductsData.filter((p) => p.Category == "faceproduct");
  return (
    <div>
      <Nav />
       <div className="px-32">
            <Card AllproductsData={FaceProducts} />
       </div>
      <Footer />
    </div>
  )
}

export default Faceproduct
