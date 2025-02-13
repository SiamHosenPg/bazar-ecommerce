import React from 'react'
import { AllproductsData } from '../../assets/Allproductsdata'
import Card from '../card/Card'

const Saveproducts = () => {
  const SaveProductsAll = AllproductsData.filter((p) => p.save == true);
  return (
    <div>
      <h3 className=" mt-14">
        You Save This Items.
      </h3>
      <Card AllproductsData={SaveProductsAll} />
    </div>
  )
}

export default Saveproducts
