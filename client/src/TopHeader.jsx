import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';

const TopHeader = () => {
  return (
    <div className='topHeader flex items-center justify-center py-2 text-sm  bg-purple-700 text-white '>
      <div className='max-w-5xl  flex items-center justify-between w-full'> 
        <span className='uppercase'>FREE DELIVERY ON ALL ORDERS STOREWIDe</span>
        <div className='rightNav  flex items-center'> 
          <NavLink to='/login'>Log in</NavLink> or <NavLink to='/register'>Create account</NavLink>
          <form action="#" className='ml-2 relative'>
              <input type="search" placeholder='search' className='border-transparent bg-gray-100 border-transparent rounded text-gray-700 focus:border-transparent focus:bg-white focus:ring-none p-1 pr-6 '/>
              <button type="submit" className='border-none background-tansparent absolute right-1.5 top-1.5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="purple" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
          </form>
          <div className='iconWrap  ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
          <div className="cartWrap ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default TopHeader