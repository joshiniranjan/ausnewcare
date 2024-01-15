import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <>
      <div className='bg-purple-900 text-white text-center md:text-left'>      
        <div className="md:flex md:flex-wrap max-w-5xl mx-auto  py-5 px-5">
          <div className='md:w-1/2 mb-5 md:mb-0'>
              <h2 className='text-lg md:text-xl font-bold mb-3'>Find us</h2>
              <div className='mb-2'>
                <img className='inline-block' src={logo} alt="ausnew" />
              </div>
              <address className='mb-2'>25A poplar street north st. marys NSW</address>
              <dl className='flex flex-wrap mb-2 place-items-center place-content-center md:place-content-start md:place-items-start'>
                <dt className='mr-1 font-bold'>phone:</dt> 
                <dd>1234567890</dd>
              </dl>
              <dl className='flex flex-wrap mb-2 place-items-center place-content-center md:place-content-start md:place-items-start'>
                <dt className='mr-1 font-bold'>email:</dt>  
                <dd>a@test.com</dd>
              </dl>
            </div>
          <div className='md:w-1/4' >
            <h2 className='text-lg md:text-xl font-bold mb-3'>Quick links</h2>
            <ul className='flex flex-wrap  md:block place-items-center place-content-center md:place-content-start md:place-items-start md:-mx-3'>
              <li className='mb-2 px-3'><NavLink to="/">Home</NavLink></li>
              <li className='mb-2 px-3'><NavLink to="/">About</NavLink></li>
              <li className='mb-2 px-3'><NavLink to="/">Contact</NavLink></li>
            </ul>
          </div>        
          <div className='md:w-1/4' >
            <h2 className='text-lg md:text-xl font-bold mb-3'>Connect with us</h2>
            <ul className='flex flex-wrap place-items-center place-content-center md:place-content-start md:place-items-start md:-mx-2'>
              <li className='px-2 text-2xl'><NavLink to="/"><FaFacebookF /></NavLink></li>
              <li className='px-2 text-2xl'><NavLink to="/"><FaTwitter /></NavLink></li>
              <li className='px-2 text-2xl'><NavLink to="/"><FaLinkedinIn /></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center bg-lime-700  py-2 text-white'>
            <p>&copy; Copyright 2023 AUSNew Home Care</p>
            <ul className='flex flex-wrap place-items-center place-content-center'>
              <li><NavLink to="/">Learner Handbook</NavLink></li>
              <li><NavLink to="/">Privacy Policy</NavLink></li>
              <li><NavLink to="/">Website by NJ</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default Footer