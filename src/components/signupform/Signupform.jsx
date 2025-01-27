import React from 'react'

const Signupform = () => {
  return (
        <div>
            <form action="" className='w-3/4 mt-12'>
                <div className="EmailBox mt-10">
                    <b className=' block '>Name</b>
                    <input type="text"  className='block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700' placeholder='Enter your Name'/>
                </div>
                <div className=" mt-10">
                    <b className=' block '>Email</b>
                    <input type="email"  className='block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700' placeholder='Enter your Email '/>
                </div>
                <div className=" mt-10 flex items-center  justify-between gap-8">
                    <div>
                        <b className=' block '>Password</b>
                        <input type="email"  className='block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700' placeholder='Enter your Email '/>
                    </div>
                    <div>
                        <b className=' block '>Confarm Password</b>
                        <input type="email"  className='block px-6 py-3 text-lg mt-4 w-full border border-b-slate-700' placeholder='Enter your Email '/>
                    </div>
                </div>
                <div className="Policy mt-10 flex items-center justify-start gap-4">
                    <input type="checkbox" name="" id="Chackbox"  className='w-6 h-6 block'/>
                    <label htmlFor="Chackbox">I agry to Website privicy policy</label>
                </div>
                <input type="submit"  value='Create account' className=' bg-blue-600 text-white block w-52 text-center py-4 mt-10 font-medium'/>
            </form>
            <div>
                <p className='w-2/3 mt-10'>Your have an account Click <a className='text-blue-600' href="">Login</a></p>
            </div>
        </div>
  )
}

export default Signupform
