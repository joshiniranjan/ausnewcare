import React from 'react'
import logo from '../../images/logo.png'
import ndis from '../../images/ndislogo.png'
import agecare from '../../images/agecarelogo.png'
import afterpay from '../../images/afterpay.png'
import klarna from '../../images/klarna.png'
import zip from '../../images/zip.png'
import humm from '../../images/humm.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <div className='logoWrap md:flex md:flex-wrap place-items-center place-content-center'>
        <NavLink to={'/'}><img src={logo} width={250} className='inline-block' alt="Ausnew Home Care" /></NavLink>
          <NavLink to={'https://training.ndiscommission.gov.au/'}><img src={ndis} width={120} className='inline-block md:ml-3' alt="NDIS"/></NavLink>
          <NavLink to={'https://www.myagedcare.gov.au/'}><img src={agecare}  width={90}  className='inline-block md:ml-3'  alt="age care"/></NavLink>        
      </div>
      {/* <strong className='block  text-center mb-3 mt-5'>Now with</strong>
      <div className='subHeader  flex flex-wrap items-center justify-center '>
        <img src={zip} width={80} alt="Zip logo" />
        <img src={afterpay} width={100} className='ml-5' alt="afterpay"/>
        <img src={klarna}  width={80}  className='ml-5'  alt="klarna"/>
        <img src={humm}  width={100}  className='ml-5'  alt="humm"/>
      </div> */}
    </div>
  )
}

export default Header