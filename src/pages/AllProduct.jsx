import React from 'react';
import Nav from '../components/navigation/Nav';
import Footer from '../components/footer/Footer';
import { AllproductsData } from '../assets/Allproductsdata';
import Card from '../components/card/Card';

const AllProduct = () => {
  return (
    <div>
      <Nav />
      <div className='PageRatio mt-10'>
        <Card AllproductsData={AllproductsData} />
      </div>
      <Footer />
    </div>
  );
};

export default AllProduct;
