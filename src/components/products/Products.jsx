import React from 'react'
import './Products.css'
import { Images,TopSeallShows ,ProductsAll} from '../../assets/Assets'
import { NavLink } from 'react-router'


const Products = () => {
  return (
    <div className='Products mt-32'>
      <div className="Ratio px-32">

            <div className="TopBar">
                <div className="Titlearea flex items-center justify-between">
                    <h3>Top sealling shoes</h3>
                    <button className='flex items-center gap-2'>View More <span className='block w-12 h-0.5 bg-neutral-400'></span> <i class="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="Product mt-10 flex items-start justify-between gap-20">
                {
                  TopSeallShows.map( TopShoes => {
                    return(
                      <div className="Card w-1/4 bg-slate-50 px-12 py-8 rounded-xl overflow-hidden">
                        <div className="Gift  bg-green-700 text-white w-64 text-center py-3 rotate-[-40deg]">
                          <span className='text-xl font-medium'>{TopShoes.Discount}</span> 
                          <span className='text-sm'> Discount</span>
                        </div>
                        <div className='Images h-64 flex items-center justify-center'><img src={TopShoes.Imagename} alt="" /></div>
                        <div className='text-sm mt-6'>Sealler - {TopShoes.SellerName}</div>
                        <b className='mt-3 block'>{TopShoes.Title}</b>
                        <div className="reating">
                          <div className="star"></div>
                          <div className='text-sm'>3.5 40 revews</div>
                        </div>
                        <div className="Order flex items-end justify-between mt-3">
                          <h4>{TopShoes.Price} <span className=' text-lg'>$</span></h4>
                          <button className='text-lg'><i class="fa-solid fa-plus"></i></button>
                        </div>
                      </div>
                    )

                  })
                }
                </div>
            </div>

            <div className="TopBar mt-32">
                <div className="Titlearea flex items-center justify-between">
                    <h3>Top sealling shoes</h3>
                    <button className='flex items-center gap-2'>View More <span className='block w-12 h-0.5 bg-neutral-400'></span> <i class="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="ProductLost mt-10 flex items-start  stroke-none flex-wrap justify-start">
                  

                {
                  ProductsAll.map( ProductsValue => {
                    return(
                      <a className=' block CardArea' href=""> 
                          <div className="Card  bg-slate-50 px-12 py-8 rounded-xl overflow-hidden">
                            <div className='Images h-72 flex items-center justify-center aspect-square'><img className=' object-cover' src={ProductsValue.Imagename} alt="" /></div>
                            <div className='text-sm mt-6'>Sealler - {ProductsValue.SellerName}</div>
                            <b className='mt-3 block'>{ProductsValue.Title}</b>
                            <div className="reating">
                              <div className="star"></div>
                              <div className='text-sm'>3.5 40 revews</div>
                            </div>
                            <div className="Order flex items-end justify-between mt-3">
                              <h4>{ProductsValue.Price} <span className=' text-lg'>$</span></h4>
                              <button className='text-lg'><i class="fa-solid fa-plus"></i></button>
                            </div>
                          </div>
                      </a>
                    )

                  })
                }
                </div>
            </div>
            <NavLink className='block border px-5 py-3 w-40 text-center mt-10 border-gray-700 rounded-xl' to="/AllProducts">Shop More</NavLink>
      </div>
    </div>
  )
}

export default Products
