import React from 'react'
import { CategoriesList} from '../../assets/Assets'
import { NavLink } from 'react-router'

const Categories = () => {
  return (
    <div className='Categories px-32 mt-20'>
        <div className="Ratio ">
            <h3>Top Categories</h3>
                <div className="Lists mt-10 flex items-center justify-between gap-7 h-32">
                        {
                         CategoriesList &&  CategoriesList.map( (Ctgores, index) => {
                                return(
                                    <NavLink to={Ctgores.Urldirectory} key={index} className='block h-full' href="">
                                        <div className="Box  flex items-center gap-4  h-full py-2 px-4 rounded-xl duration-300 hover:bg-slate-100 bg-slate-50">
                                            <img className='w-16 '  src={Ctgores.Images} alt="" />
                                            <div className="Txt">
                                                <b className=' block'>{Ctgores.Name}</b>
                                                <p className='text-xs mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, voluptatibus.</p>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            }) 
                        }
                </div>
        </div>
    </div>
  )
}

export default Categories
