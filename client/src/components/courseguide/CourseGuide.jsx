import React, { useState } from 'react'

const CourseGuide = () => {
    const [course, setCourse] = useState({
        firstname:"",
        lastname:"",
        phone:"",
        email:"",
        course:"",
    })

    const courseHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCourse({
            ...course,
            [name]: value
        })
    }
  return (
    <div className="py-32 px-5 ">
        <div className='max-w-xl mx-auto'>
            <div className="hedingWrap text-center mb-10">
                <h2 className='text-4xl font-bold text-purple-900 mb-3'>Get a Free Course Guide</h2>
                <p className="">Simply fill out the form and download your FREE Course Guide for an overview of your selected program.</p>
            </div>
            <form>
                <div className="flex flex-wrap md:-mx-3 md:mb-6  text-left">
                    <div className="md:w-1/2  w-full mb-3 md:mb-0 md:px-3">
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            type="text" 
                            name="firstname"
                            placeholder="First Name"
                            onChange={courseHandler} 
                        />
                    </div>
                    <div className="md:w-1/2  w-full md:px-3  mb-3 md:mb-0">
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            type="text" 
                            name="lastname"
                            placeholder="Last Name" 
                            onChange={courseHandler} 
                        />
                    </div>
                </div>  
                <div className="flex flex-wrap md:-mx-3  md:mb-6  text-left">
                    <div className="md:w-1/2 md:px-3  w-full mb-3 md:mb-0 ">
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            type="phone" 
                            name="phone"
                            placeholder="425125635" 
                            onChange={courseHandler} 
                        />
                    </div>
                    <div className="md:w-1/2 md:px-3  w-full  mb-3 md:mb-0">
                        <input 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="tname" 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            onChange={courseHandler} 
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-full md:mb-6  text-left">
                    <div className="w-full mb-3 md:mb-0">
                        <select 
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
                            name="course" 
                            onChange={courseHandler} 
                        >
                            <option value="">Select Course</option>
                            <option value="">Certificate III in Individual Support</option>
                            <option value="">Certificate IV in Disability Support</option>
                            <option value="">Certificate III in Individual Support (Ageing and Disability)</option>
                        </select>
                    </div>
                </div>
                {/* <button 
                    className="bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-md border-4 text-white py-3 w-full rounded font-semibold" 
                    type="button"
                >
                    Download Guide
                </button> */}

                <button className="but12">
                    <svg><rect></rect></svg>
                    Download Guide
                </button>
            </form>
        </div>
    </div>
  )
}

export default CourseGuide