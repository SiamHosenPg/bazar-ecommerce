import React from 'react'
import Loginform from '../components/loginform/Loginform'
import ShopImage from '../assets/image/shop.jpg'
import Signupform from '../components/signupform/Signupform'

const Loginpage = () => {
  return (
    <div className='w-full h-screen'>
        <div className="Ratio flex items-center justify-between h-full">
            <div className="Left w-1/2 h-full">
                <img className='h-full object-cover' src={ShopImage} alt="" />
            </div>
            <div className="Right w-1/2 px-32">
                <div className="Logo font-bold text-5xl  ">Bazar</div>
                <p className='mt-3 w-10/12 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis totam dolores inventore nesciunt?</p>
                 
                <Loginform />
               
            </div>
        </div>
    </div>
  )
}

export default Loginpage
