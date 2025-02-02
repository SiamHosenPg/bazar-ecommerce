import React from 'react';
import Nav from '../components/navigation/Nav';
import Footer from '../components/footer/Footer';
import { AllproductsData } from '../assets/Allproductsdata';
import { NavLink } from "react-router";
import { BsCart,BsCartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const AllProduct = () => {
  return (
    <div>
      <Nav />
      <div className='block px-32 mt-10'>
        <div className="ProductList mt-10 flex items-start gap-10 flex-wrap justify-start">
          {AllproductsData && AllproductsData.map((item, index) =>{
            return(
              <NavLink key={index} to={`/AllProducts/${item.id}`} className='block CardArea border hover:border-[#bbb] rounded-xl'>
              <div className="Discount absolute bg-green-700 text-white w-[100px] text-center z-20 py-2 mt-10 ml-[-10px] rounded-sm">
                <span className='text-lg font-medium'>{item.discount}%</span> <span className='text-sm'>Save</span>
              </div>
            <div className="Card  duration-300 overflow-hidden pb-6">
              <div className='Imgs m-3 bg-slate-50 flex items-center justify-center aspect-square rounded-lg overflow-hidden'>
                <img className='object-cover aspect-square duration-300 hover:scale-[1.1]' src={item.filePath} alt={item.name} />
              </div>
              <div className='line-ellipsetext text-sm mt-6 px-8'>Seller - {item.author}</div>
              <b className='p-ellipsetext mt-3 block px-8'>{item.name}</b>
              <div className="rating px-8 flex items-center gap-2 mt-2">
                <div className="star flex items-center justify-start gap-1 text-sm">
                  <FaStar className=' text-orange-400'/>
                  <FaStar className=' text-orange-400'/>
                  <FaStar className=' text-orange-400'/>
                  <FaStar className=' text-orange-400'/>
                  <FaStar/>
                </div>
                <div className='text-sm'>{item.rating}</div>
              </div>
              <div className="Order flex items-center justify-between mt-3 px-8">
                <h4>{item.price} <span className='text-lg'>$</span></h4>
                <BsCart className='text-lg' />
                <BsCartFill  className=' hidden text-lg' />

              </div>
            </div>
          </NavLink>
          )} 
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllProduct;
