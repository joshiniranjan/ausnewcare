import React from 'react'

const Catheter = () => {
  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen '>
    <form className="formHolder lg max-w-xxl text-center bg-slate-50 rounded-lg overflow-hidden">
    <h1 className='text-2xl text-center p-3 text-white bg-violet-700'>Catheter Form</h1>
    <div className='formContent p-5'>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-date">
                Catheter Number
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-date">
                Staff ID Number
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
            </div>
            <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-date">
                Date
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2  text-left items-end">
        <div className='w-full px-3'>
            <button className="flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold" type="button">
            Submit
            </button>
        </div>     
        </div>
    </div>
    </form>
    </div>
  )
}

export default Catheter