import React from 'react'

const BladderForm = () => {
  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen '>
    <form className="formHolder lg max-w-xxl text-center bg-slate-50 rounded-lg overflow-hidden">
    <h1 className='text-2xl text-center p-3 text-white bg-violet-700'>Bowl Chart Form</h1>
    <div className='formContent p-5'>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-date">
            Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-time">
            Time
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-time" type="time" />
        </div>
        <em className='w-full text-xs px-3'>Day/Time of every bowel movement if there is no bowel movement this must be done </em>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">        
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="desc">
            Stool Description
            </label>
            <em className='text-xs'>Refer to Bristol Stool Chart Type 1-7)The type of stool was 4 and the quantity was medium.</em>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 resize-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="desc" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="urge">
            Do you feel the urge to go?
            </label>
            <em className='text-xs'>Yes/No</em>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 resize-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="urge" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
            <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="acc">
            Accident/Soiling
            </label>
            <em className='text-xs'>Record time in left, and column and note description of leakage in this column</em>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 resize-none leading-tight focus:outline-none focus:bg-white' id="acc" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="supp">
                Laxatives, aperients, fiber supplements, etc 
                </label>
                <em className='text-xs'>what taken and when</em>
                <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight resize-none focus:outline-none focus:bg-white' id="supp" cols="30" rows="5"></textarea>
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left items-end">       
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="fluid">
            Fluid check
            </label>
            <em className='text-xs'>all drinks taken during the 24 hrs - types and quantities</em>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border resize-none border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="fluid" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="comment">
            Comments
            </label>
            <em className='text-xs'>(include when bowel movement or leakage happened, eg “half hour after breakfast”, “11 am, soiling when I was out walking”)</em>
            <textarea className='appearance-none block w-full resize-none bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="comment" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
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

export default BladderForm