import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router'
import { AllproductsData } from '../assets/Allproductsdata'
import { NavLink } from 'react-router'

const Productpreview = () => {
  const { id } = useParams();
  const ProductInfo = AllproductsData.find((p) => p.id === parseInt(id));

  return (
    <div>
        <Nav />
          <div className='px-32 mt-10'>
            <div className="TopNavigation flex items-center justify-start">
              <NavLink className='uppercase pr-2' to='/home'>Home</NavLink>
              <i class="fa-solid fa-angle-right text-sm"></i>
              <NavLink className='uppercase pr-2 ml-8' to='/allproducts'>Products</NavLink>
              <i class="fa-solid fa-angle-right text-sm"></i>
              <div className='ml-8'>{ProductInfo.name}</div>
            </div>

            
            <div className="Content flex justify-between items-start gap-20 mt-10">

                <div className="ColorImage w-1/12">
                  <div className='bg-orange-100 p-6 hover:p-2 duration-300 rounded-md mb-6'><img src={ProductInfo.filePath} alt="" /></div>
                  <div className='bg-orange-100 p-6 hover:p-2 duration-300 rounded-md mb-6'><img src={ProductInfo.filePath} alt="" /></div>
                  <div className='bg-orange-100 p-6 hover:p-2 duration-300 rounded-md mb-6'><img src={ProductInfo.filePath} alt="" /></div>
                  <div className='bg-orange-100 p-6 hover:p-2 duration-300 rounded-md mb-6'><img src={ProductInfo.filePath} alt="" /></div>
                </div>

                <div className="w-11/12 ">
                    <div className="flex flex items-start justify-between gap-20">
                          <div className="Image w-6/12 block bg-slate-200 rounded-lg p-10 hover:p-6 duration-300"><img src={ProductInfo.filePath} alt="" /></div>
                            <div className="Discribe w-6/12">
                              <div className="Saler">{ProductInfo.author}</div>
                              <h3 className='mt-10'>{ProductInfo.name}</h3>
                              <div className="Rating mt-4"> <span className=' text-2xl'>{ProductInfo.rating}</span> Rating</div>
                              <h2 className="Price mt-6">{ProductInfo.price} <span className=' font-medium'>$</span> <span className='font-normal text-sm'>Price</span></h2>
                              <p className="w-4/5 mt-10">{ProductInfo.description}</p>
                              <button className="border mt-5 px-6 py-3 border-slate-600 rounded-sm text-black font-medium">Add To Cart</button>
                              <div className=" mt-10 uppercase font-medium flex justify-start items-center gap-10">Shear on: 
                                <div className="Icon flex gap-4 font-medium text-xl">
                                  <i class="fa-brands fa-facebook"></i>
                                  <i class="fa-brands fa-twitter"></i>
                                  <i class="fa-brands fa-instagram"></i>
                                </div>
                              </div>
                        </div>
                    </div>



                    <div className="Bootom mt-10">
                      <div className="DiscribeText">Hello</div>
                      
                    </div>

                </div>

            </div>

          </div>
        <Footer />
    </div>
  )
}

export default Productpreview
