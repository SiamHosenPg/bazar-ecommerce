
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import { useParams } from 'react-router'
import { AllproductsData } from '../assets/Allproductsdata'
import { ProfileImage } from '../assets/Profileiamge'
import { NavLink } from 'react-router'
import Ratingstar from '../components/card/Ratingstar'
import { useState } from 'react'

const Productpreview = ({ addToCart }) => {
  const { id } = useParams();
  const ProductInfo = AllproductsData.find((p) => p.id === parseInt(id));
  const [PrevewImage, SetPrevewImage] = useState(ProductInfo.filePath);
  return (
    <div>
        <Nav />
          <div className='px-32 mt-10'>
            <div className="TopNavigation flex items-center justify-start">
              <NavLink className='uppercase pr-2' to='/home'>Home</NavLink>
              <i className="fa-solid fa-angle-right text-sm"></i>
              <NavLink className='uppercase pr-2 ml-8' to='/allproducts'>Products</NavLink>
              <i className="fa-solid fa-angle-right text-sm"></i>
              <div className='ml-8'>{ProductInfo.name}</div>
            </div>
            {/* Top Navigation type product informatin section */}
            
            <div className="Content flex justify-between items-start gap-20 mt-10">

              <div className="ColorImage w-1/12">
                {ProductInfo.imageSources && ProductInfo.imageSources.map((Imageitems, index) => {
                    return(
                      <div onClick={() => SetPrevewImage(Imageitems.ExtImage)} key={index} className='bg-slate-200 overflow-hidden duration-300 rounded-md mb-6 border '>
                        <img className=' aspect-square hover:scale-[1.1] duration-300' src={Imageitems.ExtImage} alt="" />
                      </div>
                    )
                })} 
              </div>
              {/* Left All Immage Section */}

                <div className="w-11/12 ">
                  <div className="flex items-start justify-between gap-20 ">
                          <div className="overflow-hidden aspect-square w-6/12 block bg-slate-200 rounded-lg duration-300 border">
                            <img className=' aspect-square w-full  hover:scale-[1.1] duration-300' src={PrevewImage} alt="" />
                          </div>

                          <div className="Discribe w-6/12">
                              <div className="Saler"><span className=' uppercase'>Author <i className="fa-solid fa-angle-right text-sm pr-5"></i>  </span>{ProductInfo.author}</div>
                              <h3 className='mt-10'>{ProductInfo.name}</h3>
                              <div className="Rating mt-4 flex items-center justify-start gap-1">
                                  <Ratingstar className="block" rating={ProductInfo.rating} />
                                  <span className=' ml-6 text-2xl font-medium'>{ProductInfo.rating}</span>
                                  <span className='ml-3'>{`${ProductInfo.ratingcount} Peoples`}</span>
                              </div>
                              <h2 className="Price mt-6 font-semibold">{ProductInfo.price} <span className=' font-medium'>$</span> <span className='font-normal text-sm'>Price</span></h2>
                              <div className="mt-3 flex justify-start items-center gap-3">
                                <div className=' uppercase'>Color</div>
                                <i className="fa-solid fa-angle-right text-sm"></i>
                              {
                                ProductInfo.colors.map((Color, index) =>
                                  <div key={index}>{Color}</div>
                                )
                              }
                              </div>
                              
                              <p className="w-4/5 mt-10 leading-7">{ProductInfo.summaries}</p>
                              
                              <button onClick={() => addToCart(ProductInfo)} className="border mt-5 px-6 py-3 border-slate-600 rounded-sm text-black font-medium">Add To Cart</button>
                              <div className=" mt-10 uppercase font-medium flex justify-start items-center gap-10">Shear on : 
                                <div className="Icon flex gap-4 font-medium text-xl">
                                  <i className="fa-brands fa-facebook"></i>
                                  <i className="fa-brands fa-twitter"></i>
                                  <i className="fa-brands fa-instagram"></i>
                                </div>
                              </div>
                        </div>
                  </div>
                  {/* Top Area With iamge and main Details section */}

                  <div className="Bootom mt-10 flex justify-between items-start gap-20">
                      <div className="DiscribeText w-4/6">
                        <div className="Top flex justify-start items-center gap-10 border-b-[1px] pb-4">
                          <button className='text-xl uppercase font-bold'>Description </button>
                          <button className='Deactive text-xl uppercase font-bold'>Reviews <span>{`${ProductInfo.productReviews.length}`}</span></button>
                        </div>
                        {/* Title bar */}
                        <div className="Texts ">
                          <p className='w-5/6 mt-12 leading-7'>{ProductInfo.description}</p>
                          <div className="mt-16">
                            <div className=" uppercase">Product Detels</div>
                            <ul className='mt-5'>
                              { ProductInfo.benefits && ProductInfo.benefits.map((ProudInfo, index) =>
                                <li key={index} className='list-disc ml-8 mt-3'>{ProudInfo}</li>
                              )}
                            </ul>
                          </div>
                        </div>
                        {/* Product Describe */}

                        <div className='Review mt-12'>
                          {
                          ProductInfo.productReviews && ProductInfo.productReviews.map((ProductData, index) => {
                              const User = ProductData.Userid
                              const UserData = ProfileImage.find(UID => UID.UID === User);
                            return(
                              <div className="Reviews mt-10 mb-20" key={index}>
                                  <div className=" bg-[#f7f7f7] px-10 py-8 rounded-lg" key={index}>
                                    <p className=' w-5/6'>{ProductData.ReviewText}</p>
                                    <div className='mt-5'>Reating : {ProductData.rating}</div>
                                    <div className="User flex justify-start items-center gap-4 mt-8">
                                      <div className="profile w-12 h-12  rounded-full">
                                        <img className='h-full bg-slate-900 w-full rounded-full' src={UserData.ProfileImg} alt="" />
                                      </div>
                                      <div className="txt">
                                        <div className=' font-medium'>{ProductData.Name}</div>
                                        <span className='block text-sm'>{ProductData.date}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className='flex mt-5 justify-between items-start flex-col'>
                                    <div className="react  flex gap-10 text-xl pl-11">
                                      <button><i className="fa-regular fa-thumbs-up"></i></button>
                                      <button><i className="fa-regular fa-thumbs-down"></i></button>
                                    </div>
                                    <div className="Reply pl-11 rounded-lg flex flex-col gap-5 mt-5 w-5/6">
                                      {
                                        ProductData.comments.map((ConnentsData, index) => {
                                          return(
                                            <div className="" key={index}>
                                              <div className='flex justify-start items-start gap-5'>
                                                <span className='block uppercase w-1/6 '>Author <i className="fa-solid fa-angle-right text-sm"></i></span> 
                                                <span className='block w-5/6'>{ConnentsData.RplyText}</span>
                                              </div>
                                            </div>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>
                              </div>
                            )
                           })
                          }
                        </div>
                        {/* Revew Content  */}

                      </div>
                      <div className="Aditional w-2/6">
                        <div className=' uppercase '>Additional Information </div>
                        <div className='mt-10'>Sales Count : {ProductInfo.sellcount}</div>
                        <div className='mt-2'>Offer : {ProductInfo.offer}</div>
                        <div className='mt-2'>Size : {ProductInfo.size}</div>
                      </div>
        
                  </div>
                  {/* Botton Product Information */}
                </div>
                {/* Product Main Area  */}
            </div>
            {/* Body Product Information Section */}
          </div>

        <Footer />
    </div>
  )
}

export default Productpreview