import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import { AllItemsProducts } from '../assets/Assets'



const AllProduct = () => {
  return (
    <div>
        <Nav />
        <div className='px-32 mt-10'>
            <div className="ProductLost mt-10 flex items-start  stroke-none flex-wrap justify-start">
            { AllItemsProducts.map( AllItemsProductsItems => {
                    return(
                        <a className=' block CardArea' href=""> 
                          <div className="Card  bg-slate-50 px-12 py-8 rounded-xl overflow-hidden">
                            <div className='Images h-72 flex items-center justify-center'><img src={AllItemsProductsItems.Imagename} alt="" /></div>
                            <div className='text-sm mt-6'>Sealler - {AllItemsProductsItems.SellerName}</div>
                            <b className='mt-3 block'>{AllItemsProductsItems.Title}</b>
                            <div className="reating">
                              <div className="star"></div>
                              <div className='text-sm'>3.5 40 revews</div>
                            </div>
                            <div className="Order flex items-end justify-between mt-3">
                              <h4>{AllItemsProductsItems.Price} <span className=' text-lg'>$</span></h4>
                              <button className='text-lg'><i class="fa-solid fa-plus"></i></button>
                            </div>
                          </div>
                      </a>
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
