import React from 'react';
import './Products.css';
import { AllproductsData } from '../../assets/Allproductsdata';
import { NavLink } from 'react-router';
import { FaAngleRight } from "react-icons/fa6";
import Card from '../card/Card';

const Products = () => {

  const BestDiscount = AllproductsData.filter((p) => p.discount !== null);
        BestDiscount.sort((a, b) => a.discount - b.discount);
  const HighestSales = AllproductsData.sort((a, b) => a.sellcount - b.sellcount);

  return (
    <div className='Products mt-16 sm:mt-16 md:mt-20 lg:mt-32'>
      <div className="PageRatio">
        {/* Top Selling Shoes Section */}
        <div className="TopBar">
          <div className="Titlearea flex items-center justify-between">
            <h3>Highest Discount</h3>
            <button className='flex items-center gap-2'>
              View More <span className=' hidden sm:block md:block w-8 h-[1px] bg-neutral-400'></span> <FaAngleRight />
            </button>
          </div>
            <Card AllproductsData={BestDiscount} />
        </div>

        {/* All Products Section */}
        <div className="TopBar mt-16 sm:mt-16 md:mt-20 lg:mt-32">
          <div className="Titlearea flex items-center justify-between">
            <h3>Top Selling Prodicts</h3>
            <NavLink className='flex items-center gap-2' to="/AllProducts">
              View More <span className='hidden sm:block md:block w-8 h-[1px] bg-neutral-400'></span> <FaAngleRight />
            </NavLink>
          </div>

          <Card AllproductsData={HighestSales} />
        </div>

      </div>
    </div>
  );
};

export default Products;
