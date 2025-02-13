import React from 'react'
import { ProductsImages } from '../../assets/Allimagedata'

import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";

const CartItems = () => {
  return (
    <div className='mt-14'>
      <h3>Shopping Cart</h3>
      <div className='flex justify-between items-start gap-24 mt-8'>
        <div className="CartItemsAll w-8/12 border  rounded-lg px-8 py-4 md:px-10 md:py-5 xl:px-12 xl:py-6">
            <div className="TableHead font-medium flex items-center justify-between border-b pb-4 gap-4">
                <div className="w-6/12">Product Code</div>
                <div className="w-2/12">Quantity</div>
                <div className="w-2/12">Total Price</div>
                <div className="w-2/12">Action</div>
            </div>
            {/* Title Table Head Section Closs  */}
            <div className="mt-3 flex justify-between items-center gap-4 border-b py-4">
                <div className="PdCode flex w-6/12 items-center justify-start gap-5 ">
                    <img className='block aspect-square w-24 rounded-md overflow-hidden bg-slate-200 ' src={ProductsImages.Headphone} alt="" />
                    <div>
                        <b className='p-ellipsetext block w-5/6 '>Product name In heare the boys outline hero</b>
                        <span className='block text-sm mt-2'>Rofiq Azim</span>
                    </div>
                </div>
                {/* Product Code Section Closs  */}
                <div className="quantity w-2/12">
                    <div className=' flex justify-center items-center gap-3 w-fit'>
                        <div><IoIosAdd className='text-xl cursor-pointer'/></div>
                        <div className='text-lg'>6</div>
                        <div><IoIosRemove className='text-xl cursor-pointer' /></div>
                    </div>
                </div>
                {/* Quantity Section Closs  */}
                <div className="Price w-2/12 text-lg font-medium">$353535</div>
                <div className="Action  w-2/12">
                    <button>
                        <MdDeleteOutline className='text-xl'/>
                    </button>
                </div>
            </div>
            {/* Cart Box Closs  */}
        </div>
        {/* Cart Items Closs  */}
        <div className="PriceItems w-4/12 border rounded-lg px-8 py-4 md:px-10 md:py-5 xl:px-12 xl:py-6 ">
            <div className=' pb-4 font-medium'>Order Summary</div>
            <form action="" className='flex gap-4 justify-start items-center'>
                <input className='border border-[#444] rounded-3xl px-5 py-2' type="text" name="" id="Viuture" placeholder='Discount vutuare' />
                <input className='border border-[#444] rounded-3xl px-5 py-2 text-[#666]' type="submit" value="Apply"/>
            </form>
            <div className='flex justify-between mt-8 items-center'>
                <b className='block '>Sub Total</b>
                <span className='block text-lg font-medium'>$668</span>
            </div>
            <div className='flex justify-between mt-2 items-center'>
                <b className='block '>Discount Money</b>
                <span className='block text-lg font-medium'>$668</span>
            </div>
            <div className='flex justify-between mt-2 items-center border-b pb-3'>
                <b className='block '>Delebary Fee</b>
                <span className='block text-lg font-medium'>$668</span>
            </div>
            <div className='flex justify-between mt-2 items-center'>
                <b className='block '>Total Price</b>
                <span className='block text-xl font-semibold '>$668</span>
            </div>
            <div className='flex gap-2 w-5/6 mt-8'>
                <div><AiOutlineSafety className=' text-xl'/></div>
                <p><b>90 Days Limeted Woranty</b> without firepse and distory or your folt <a className='font-semibold' href="">Detels</a></p>
            </div>
            <div className=" mt-8 border rounded-full w-[200px] bg-[#333] text-white text-center py-3 float-right">Checkout Now</div>
        </div>
        {/* Price Items Closs  */}
      </div>
    </div>
  )
}

export default CartItems
