import React from 'react'
import { NavLink } from 'react-router-dom'
// import erimg from '../images/error'

const Error = () => {
  return (
    <div className='max-w-xl mx-auto py-32 text-center text-xl leading-snug'>
        {/* <img src={erimg} alt="" /> */}
       <h1 className='errorHeader font-bold mb-10'>Error 404</h1>
       <h3>Sorry! Page not found.</h3>
       <p>Oops! It seems like the page you're trying to access doesn't exist. If you believe there is an issue, feel free to report it, and we'll look into it.</p>
       <ul>
        <li><NavLink to="/">Return back to home</NavLink></li>
        <li><NavLink to="/contact">report problem</NavLink></li>
       </ul>
    </div>
  )
}

export default Error