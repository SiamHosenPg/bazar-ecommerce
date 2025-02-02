import React from 'react';
import './Products.css';
import { AllproductsData } from '../../assets/Allproductsdata';
import { NavLink } from 'react-router';
import { BsCart } from "react-icons/bs";
import { FaAngleRight, FaStar } from "react-icons/fa";

const Products = () => {

  const BestDiscount = AllproductsData.filter((p) => p.discount !== null);
        BestDiscount.sort((a, b) => a.discount - b.discount);
  const HighestSales = AllproductsData.sort((a, b) => a.sellcount - b.sellcount);

  return (
    <div className='Products mt-32'>
      <div className="Ratio px-32">
        {/* Top Selling Shoes Section */}
        <div className="TopBar">
          <div className="Titlearea flex items-center justify-between">
            <h3>Highest Discount</h3>
            <button className='flex items-center gap-2'>
              View More <span className='block w-12 h-0.5 bg-neutral-400'></span> <FaAngleRight />
            </button>
          </div>

          <div className="Product mt-10 flex items-start flex-wrap justify-start gap-10">
            {BestDiscount.map((items, index) => (
              <NavLink key={index} to={`/AllProducts/${items.id}`} className='block CardArea border hover:border-[#bbb] rounded-xl overflow-hidden'>
                <div className="Discount absolute bg-green-700 text-white w-[100px] text-center z-20 py-2 mt-10 ml-[-10px] rounded-sm">
                  <span className='text-lg font-medium'>{items.discount}%</span> <span className='text-sm'>Save</span>
                </div>
                <div className="Card duration-300 overflow-hidden pb-6">
                  <div className='Imgs bg-slate-50 m-3 flex items-center justify-center aspect-square rounded-lg overflow-hidden'>
                    <img className='object-cover aspect-square duration-300 hover:scale-[1.1]' src={items.filePath} alt={items.name} />
                  </div>
                  <div className='line-ellipsetext text-sm mt-6 px-8'>Seller - {items.author}</div>
                  <b className='p-ellipsetext mt-3 block px-8'>{items.name}</b>
                  <div className="rating px-8 flex items-center gap-2 mt-2">
                    <div className="star text-sm  flex justify-start items-center gap-1">
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar/> 
                    </div>
                    <div className='text-sm'>{items.rating}</div>
                  </div>
                  <div className="Order flex items-center justify-between mt-3 px-8">
                    <h4>{items.price} <span className='text-lg'>$</span></h4>
                    <BsCart className='text-lg' />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* All Products Section */}
        <div className="TopBar mt-32">
          <div className="Titlearea flex items-center justify-between">
            <h3>Top Selling Prodicts</h3>
            <NavLink className='flex items-center gap-2' to="/AllProducts">
              View More <span className='block w-12 h-0.5 bg-neutral-400'></span> <FaAngleRight />
            </NavLink>
          </div>

          <div className="ProductList mt-10 flex items-start gap-10 flex-wrap justify-start">
            {HighestSales.map((items, index) => (
              <NavLink key={index} to={`/AllProducts/${items.id}`} className='block CardArea border hover:border-[#bbb] rounded-xl'>
                  <div className="Discount absolute bg-green-700 text-white w-[100px] text-center z-20 py-2 mt-10 ml-[-10px] rounded-sm">
                    <span className='text-lg font-medium'>{items.discount}%</span> <span className='text-sm'>Save</span>
                  </div>
                <div className="Card  duration-300 overflow-hidden pb-6">
                  <div className='Imgs bg-slate-50 m-3 flex items-center justify-center aspect-square rounded-lg overflow-hidden'>
                    <img className='object-cover aspect-square duration-300 hover:scale-[1.1]' src={items.filePath} alt={items.name} />
                  </div>
                  <div className='line-ellipsetext text-sm mt-6 px-8'>Seller - {items.author}</div>
                  <b className='p-ellipsetext mt-3 block px-8'>{items.name}</b>
                  <div className="rating px-8 flex items-center justify-start gap-2 mt-2">
                    <div className="star text-sm  flex justify-start items-center gap-1">
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar className=' text-orange-400'/>
                      <FaStar/>                     
                    </div>
                    <div className='text-sm'>{items.rating}</div>
                  </div>
                  <div className="Order flex items-center justify-between mt-3 px-8">
                    <h4>{items.price} <span className='text-lg'>$</span></h4>
                    <BsCart className='text-lg' />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Products;
