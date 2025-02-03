import React from 'react'
import './Header.css'
import { FaAngleRight } from "react-icons/fa6";
import { Images} from '../../assets/Assets'


const Header = () => {
  return (
    <div className='Header px-32 mt-14'>
        <div className="Ratio bg-slate-100 w-full rounded-xl flex items-center justify-between px-11 ps-28">
            <div className="Content w-11/12 flex items-center justify-between gap-16">
                <div className="LeftTxt w-2/5">
                    <h2>Shop Computers & Accessories</h2>
                    <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ullam repellat quia vero, soluta labore eum dicta ex? Accusamus, amet.</p>
                    <button className='border border-[#aaa] px-8 py-3 rounded-sm mt-8'>View more</button>
                </div>
                <div className="image w-2/5 h-full"><img className='' src={Images.Headphons} alt="" /></div>
            </div>
            <div className="NextLoad ">
                <button className='border rounded-full w-10 h-10 border-slate-900 flex items-center justify-center'>
                    <FaAngleRight className='text-xl' />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
