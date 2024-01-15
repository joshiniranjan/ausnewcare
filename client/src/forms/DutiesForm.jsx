import React from 'react'

const DutiesForm = () => {
  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen '>
    <form className="formHolder lg max-w-xxl text-center bg-slate-50 rounded-lg overflow-hidden">
    <h1 className='text-2xl text-center p-3 text-white bg-violet-700'>Duties checklist</h1>
    <div className='formContent p-5'>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-date">
            Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="date" />
            <em className='w-full text-xs '>Day/Time of every bowel movement if there is no bowel movement this must be done </em>
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-staff">
            Staff ID
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-staff" type="text" />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full px-3 flex flex-wrap items-center justify-between">
            <strong className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Shift</strong>
            <div className="radioWrap">
                <input type="radio" class="rounded text-pink-500" id="mng"  name="shift" />
                <label className="block uppercase tracking-wide text-gray-700 text-xs inline-block" htmlFor="mng">
                    Morning
                </label>
            </div>
            <div className="radioWrap">
                <input type="radio" class="rounded text-pink-500" id="aft"  name="shift"/>
                <label className="block uppercase tracking-wide text-gray-700 text-xs inline-block" htmlFor="aft">
                Afternoon
                </label>
            </div>
            <div className="radioWrap">
            <input type="radio" class="rounded text-pink-500" id="ngt" name="shift"/>
            <label className="block uppercase tracking-wide text-gray-700 text-xs inline-block" htmlFor="ngt">
           Night
            </label>
            </div>            
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-tme">
            Started Shift
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-tme" type="time" />
        </div>
        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-fle">
            Picture
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fle" type="file" />
        </div>
        <div className="w-full md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="grid-fle">
            Duty performed
            </label>
            <div className="radioWrap">
                <input type="radio" class="rounded text-pink-500" id="yes"  name="task" />
                <label className="block uppercase tracking-wide text-gray-700 text-xs inline-block" htmlFor="yes">
                    Yes
                </label>
            </div>
            <div className="radioWrap">
                <input type="radio" class="rounded text-pink-500" id="no"  name="task"/>
                <label className="block uppercase tracking-wide text-gray-700 text-xs inline-block" htmlFor="no">
                No
                </label>
            </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 mt-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold" htmlFor="feed">
            Feedback
            </label>
            <textarea className='appearance-none block w-full bg-gray-200 text-gray-700 border resize-none border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="feed" cols="30" rows="5"></textarea>
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <em className='w-full text-xs px-3'>When starting shift you must put on your gloves and ID and  sign them of when your ID you must the put  time you got out of the box not your starting time</em>

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

export default DutiesForm