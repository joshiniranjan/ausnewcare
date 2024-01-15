import React from 'react'

const AttendanceForm = () => {
  return (
    
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen '>
    <form className="formHolder max-w-md text-center bg-slate-50 rounded-lg overflow-hidden">
    <h1 className='text-2xl text-center p-3 text-white bg-violet-700'>Student Attendance form</h1>
    <div className='formContent p-10 '>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
        </div>
        </div>
        
        <div className="flex flex-wrap -mx-3 mb-6  text-left items-end">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Student ID
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="s123456" />
        </div>
        <div className='w-full md:w-1/2 px-3'>
            <button className="flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold" type="button">
            Clock In
            </button>
        </div>     
        </div>
    </div>
    </form>
    </div>
  )
}

export default AttendanceForm