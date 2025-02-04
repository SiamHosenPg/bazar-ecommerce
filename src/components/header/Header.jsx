import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaAngleRight } from "react-icons/fa6";
import { Headerdata } from '../../assets/Headerdata';
import { motion } from 'framer-motion';


const Header = () => {
    const [index, setIndex] = useState(0);
    const nextData = () => {
          setIndex((prev) => (prev + 1) % Headerdata.length);
      };
      useEffect(() => {
        const interval = setInterval(nextData, 6000);
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='Header px-32 mt-14'>
        <div className="Ratio bg-slate-100 w-full rounded-xl flex items-center justify-between px-11 ps-28 overflow-hidden">
            <motion.div
                        key={index}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, delay: .5 }}

            className="Content w-11/12 flex items-center justify-between gap-16">
                <div className="LeftTxt w-2/5">
                    <motion.h2
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4, delay: .8 }}
                    >{Headerdata[index].Name}</motion.h2>


                    <motion.p 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}                        
                    className='mt-8'>{Headerdata[index].text}
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.4 }} 
                    className='border border-[#aaa] px-8 py-3 rounded-sm mt-8'>View more</motion.button>
                </div>
                <motion.div 
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: .4 }}                 
                className="image w-2/5 h-full"><img className='' src={Headerdata[index].Image} alt="" />
                </motion.div>
            </motion.div>
            <div className="NextLoad ">
                <button onClick={nextData} className='border rounded-full w-10 h-10 border-slate-900 flex items-center justify-center'>
                    <FaAngleRight className='text-xl' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
