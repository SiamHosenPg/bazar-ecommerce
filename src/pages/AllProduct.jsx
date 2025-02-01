import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import { AllproductsData } from '../assets/Allproductsdata'
import { NavLink } from "react-router";



const AllProduct = () => {
  return (
    <div>
        <Nav />

        <div className=' block px-32 mt-10'>
            <div className="ProductLost mt-10 flex items-start gap-10 stroke-none flex-wrap justify-start">
            {AllproductsData && AllproductsData.map( (AllItemsProductsItems, index) => {
                    return(
                        <NavLink to={`/AllProducts/${AllItemsProductsItems.id}`} className=' block CardArea' href="" key={index}> 
                          <div className="Card  bg-slate-50 px-12 py-8 rounded-xl overflow-hidden">
                            <div className='Images h-72 flex items-center justify-center'><img src={AllItemsProductsItems.filePath} alt="" /></div>
                            <div className='text-sm mt-6'>Sealler - {AllItemsProductsItems.author}</div>
                            <b className='mt-3 block'>{AllItemsProductsItems.name}</b>
                            <div className="reating">
                              <div className="star"></div>
                              <div className='text-sm'>3.5 40 revews</div>
                            </div>
                            <div className="Order flex items-end justify-between mt-3">
                              <h4>{AllItemsProductsItems.price} <span className=' text-lg'>$</span></h4>
                              <button className='text-lg'><i class="fa-solid fa-plus"></i></button>
                            </div>
                          </div>
                      </NavLink>
                    )
                })
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AllProduct
