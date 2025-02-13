import React from 'react'

const Footer = () => {
  return (
    <div className='Footer PageRatio '>
        <div className="  bg-indigo-200 px-28 py-16 rounded-xl mb-20 mt-24">
            <div className="TopFooter flex items-start justify-between">
                <div className="FLinks flex flex-col gap-2">
                    <div className='mb-3'><b>Products</b></div>
                    <a href="">Featured Products</a>
                    <a href="">Trending Now</a>
                    <a href="">On Sale</a>
                    <a href="">Top Rated</a>
                    <a href="">Gift Sets</a>
                    
                </div>
                <div className="FLinks flex flex-col gap-2">
                    <div className='mb-3'><b>Information</b></div>
                    <a href="">About Our Company</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Sitemap</a>
                    <a href="">Security & Payment</a>
                    
                </div>
                <div className="FLinks flex flex-col gap-2">
                    <div className='mb-3'><b>Support</b></div>
                    <a href="">Customer Support</a>
                    <a href="">Track Order</a>
                    <a href="">Return & Exchange</a>
                    <a href="">Warranty Info</a>
                    <a href="">Order Help</a>
                    
                </div>
                <div className="FLinks flex flex-col gap-2">
                    <div className='mb-3'><b>Stay Connected</b></div>
                    <a href="">Newsletter Sign-Up</a>
                    <a href="">Blog Updates</a>
                    <a href="">Join Our Loyalty Program</a>
                    <a href="">Exclusive Offers</a>
                    <a href="">Upcoming Events</a>
                    
                </div>
            </div>
            <a className='block mt-9 font-medium' href="">View more information</a>
        </div>
    </div>
  )
}

export default Footer
