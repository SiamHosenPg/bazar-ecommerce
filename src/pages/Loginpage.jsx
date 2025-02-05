import React, { useEffect, useState } from 'react'
import Loginform from '../components/loginform/Loginform'
import Signupform from '../components/signupform/Signupform'
import { LoginIamgeData } from '../assets/Loginpageiamge'
import { motion } from 'framer-motion'


const Loginpage = () => {
  const [indexdata, SetPageImage] = useState(0);
      const nextData = () => {
        SetPageImage((prev) => (prev + 1) % LoginIamgeData.length);
        };

      useEffect(() => {
        const interval = setInterval(nextData, 8000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='w-full h-screen'>
        <div className="Ratio flex items-center justify-between h-full">
            <div className="Left w-1/2 h-full">
                <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='h-full object-cover duration-300' key={indexdata} src={LoginIamgeData[indexdata]} alt="" />
            </div>
            <div className="Right w-1/2 px-32">
                <div className="Logo font-bold text-5xl  ">Bazar</div>
                <p className='mt-3 w-10/12 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis totam dolores inventore nesciunt?</p>
                 
                <Loginform/>
                <Signupform />
               
            </div>
        </div>
    </div>
  )
}

export default Loginpage
