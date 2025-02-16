import React, { useEffect, useState } from 'react'
import './Header.css'
import { FaAngleRight } from "react-icons/fa6";
import { Headerdata } from '../../assets/Headerdata';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router';


const Header = () => {
    const [index, setIndex] = useState(0);
    const nextData = () => {
          setIndex((prev) => (prev + 1) % Headerdata.length);
      };
      useEffect(() => {
        const interval = setInterval(nextData, 9000);
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='Header PageRatio h-[700px] sm:h-[800px] md:h-[460px] lg:h-[500px] xl:h-[600px]'>
        <div className=" h-full bg-slate-100 w-full rounded-xl flex items-center justify-between px-8 sm:px-11 md:px-11 ps-8 sm:ps-11 md:ps-16 xl:ps-28 overflow-hidden mt-4 sm:mt-4 md:mt-10 lg:mt-14">
            <motion.div
                        key={index}
                        initial={{ opacity: 0,  }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0, delay: 0 }}

                    className="Content w-full  sm:w-full md:w-full lg:w-11/12 flex flex-col-reverse sm:flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-16">
                <div className="LeftTxt w-full sm:w-full md:w-3/5 lg:w-6/12 xl:2/5">
                    <motion.h2
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.4, delay: .8 }}
                         className='p-ellipsetext'
                    >{Headerdata[index].Name}</motion.h2>


                    <motion.p 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 }}                        
                    className='p-ellipsetextHeader mt-8 leading-7'>{Headerdata[index].text}
                    </motion.p>
                    <NavLink to={`/${Headerdata[index].categories}`}>
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.4 }} 
                    className='border border-[#aaa] px-8 py-3 rounded-sm mt-8 w-40 text-center'>View more</motion.div>
                    </NavLink>
                </div>
                <motion.div 
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: .4 }}                 
                className="image w-4/6 sm:w-4/6 md:w-2/5 h-full"><img className='' src={Headerdata[index].Image} alt="" />
                </motion.div>
            </motion.div>
            <div className="NextLoad hidden sm:hidden md:hidden lg:block ">
                <button onClick={nextData} className='border rounded-full w-10 h-10 border-slate-900 flex items-center justify-center'>
                    <FaAngleRight className='text-xl' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
