import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.webp'
import slider3 from '../../images/slider3.png'
import slider4 from '../../images/slider4.webp'
import logo from '../../images/logo.png'

const HeroCarousel = () => {
  return (
    <Carousel >
            <div className='h-60 bg-center bg-no-repeat bg-cover flex items-center place-content-center ' style={{backgroundImage: `url("${slider1}")`}}>
                <div className="textHolder w-full rounded-full text-purple-700 text-center flex items-center place-content-center p-5">
                    <div className="logoWrap mb-7">
                        <img src={logo} alt="Ausnew Homecare Service" className='inline-block'/>
                    </div>
                    <strong className='font-bold text-3xl uppercase mb-7 block'>we always put <br />your needs first</strong>
                    <span className='block text-2xl '>Quality you can demand on, <br /> Expertise you can trust.</span>
                </div>
            </div>
            <div className='h-60 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${slider2}")`}}></div>
            <div className='h-60 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${slider3}")`}}>
                <div className="caption text-ceter  bg-slate-100 text-purple-700 p-3 text-center absolute bottom-10 font-bold left-0 right-0 opacity-50">
                    <span className='capitalize'>payment options available</span>
                </div>
            </div>
            <div className='h-60 bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url("${slider4}")`}}></div>
    </Carousel>
  )
}

export default HeroCarousel