import React from 'react'
import Slider from "react-slick";
import './testimonial.css'

const Testimonial = () => {
    var settings = {
        lazyLoad: 'ondemand',
        // arrows:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <div className="testimonialBlock py-28  relative after:content-[' ']  after:bg-dark-bl after:absolute after:top-0  after:-left-96 after:bottom-0 after:-right-96 after:-z-50 ">
        <div className="max-w-sm px-2 md:px-0 mx-auto">
            <Slider {...settings}>
                <div>
                    <div className='outerWrap mx-2 mt-8'>
                        <div className="textWrap px-5 md:px-10 md:pt-3 pt-2 pb-5 mb:pb-10 border rounded-md  border-white border-solid bg-white leading-snug">
                            <div className='thumbnailWrap rounded-full w-14 h-14 bg-purple-300 mx-auto -mt-10 mb-3 md:mb-5 border border-solid border-purple-900'></div>
                            <blockquote>
                                <q className='mb-0 block text-gray-700 text-justify mb-2'>I was looking for a good institution for my career change and I found this wonderful company named Meditech. Everyone is very friendly and helpful. I have started working while completing my studies side-by-side so I'm happy with Meditech.</q>
                                <cite className='block text-sm text-gray-500 font-bold'>John Brown</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='outerWrap  mx-2 mt-8'>
                        <div className="textWrap px-2 py-3 border  rounded-md border-white border-solid bg-white leading-snug">
                            <div className='thumbnailWrap  rounded-full w-14 h-14 bg-purple-300 mx-auto -mt-10 border border-solid border-purple-900'></div>
                            <blockquote>
                                <q className="mb-0 block text-gray-700 text-justify mb-2">I found the course so helpful to gain not only a lot of knowledge but practical side of it so I would be ready to deal with real situations when I start working on the field comfortably. Sharyn and the team are inclusive and supportive, I do enjoy my learning experience at Meditech Learning College.</q>
                                <cite className='block text-sm text-gray-500 font-bold'>will smith</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='outerWrap mx-2 mt-8'>
                        <div className="textWrap px-2 py-3 border rounded-md  border-white border-solid bg-white leading-snug">
                            <div className='thumbnailWrap rounded-full w-14 h-14 bg-purple-300 mx-auto -mt-10 border border-solid border-purple-900'></div>
                            <blockquote>
                                <q className='mb-0 block text-justify mb-2 text-gray-700'>so helpful to gain not only a lot of knowledge but practical side of it so I would be ready to deal with real situations when I start working</q>
                                <cite className='block text-sm text-gray-500 font-bold'>john doe</cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
       
    </div>
  )
}

export default Testimonial