import React from 'react'
import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import Slider from "react-slick";
import bgImage from '../../images/slider3.png'
import './course.css'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../store/auth';

const Courses = () => {
    const {courses} = useAuth();
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    var settings = {
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint:768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    };
    if (!courses || courses.length === 0) {
        return <HashLoader color="#36d7b7" />; // or any other loading indicator
    }
  return (
    <div className="py-20 px-3 relative after:content-[' ']  after:bg-green-100 after:absolute after:top-0  after:-left-96 after:bottom-0 after:-right-96 after:-z-50 after:-rotate-3">
        <div className=' max-w-5xl mx-auto'>
            <div className='courseHolder leading-snug text-center md:pr-5 md:mb-10  mx-auto'>
                <div className='headingWrap mb-10'>
                    <h2 className='text-4xl font-bold mb-4 text-purple-900'>Fit your study around your life through blended learning</h2>
                    <p className='mb-0'>Scroll to view and select from our expertly-crafted programs that integrate formal classroom training with self-paced learning activities and supervised work placement, which involves face-to-face training at the workplace.</p>
                </div>
                
                <Slider {...settings} className='pt-10 md:pt-0'>
               
                    { 
                        courses.map((curElem,index) => {
                            const {course_code, course_name} = curElem;
                            return (
                                <div key={index}>
                                    <div className='outerWrap mx-2'>
                                        <div className="courseCard border border-purple-600 bg-white">
                                            <NavLink to={'/enrollment'} className='text-purple-600 mb-0 block  h-64 flex flex-wrap place-content-end' style={{backgroundImage:`url(${bgImage})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
                                                <div className="textWrap px-2 py-3 bg-white w-full">{course_code}-{course_name}</div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </Slider>
                    
            </div>
            
        </div>
    </div>
    
    )
}

export default Courses