import React, { useState } from 'react'

const BladderForm = () => {
    const [detail, setDetail] = useState({
        userid: "",
        entrydate:"",
        entrytime:"",
        shift:"",
        inputvalue:"",
        outputvalue:"",
        observation:""
    })

    const handleChange = (e) => {
        let name= e.target.name;
        let value = e.target.value;

        setDetail({
            ...detail,
            [name]: value
        })
    }
  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen '>
    <form className="formHolder max-w-lg text-center bg-slate-50 rounded-lg overflow-hidden">
    <h1 className='text-2xl text-center p-3 text-white bg-violet-700'>Bladder Chart form</h1>
    <div className='formContent p-10'>
        <div className="noteWrap text-left mb-5 text-sm text-purple-700">
            <em className='font-bold'>Note:</em>
            <ol >
                <li>You need to give your client drink every as this is your job</li>
                <li>Remaining amount is zeroed out every two days.</li>
            </ol>
        </div>  
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="userid"
            >
                User id
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="userid" 
                type="text" 
                placeholder="BKW20****"
                name="userid"
                onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/3 px-3">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="entrydate"
            >
                Date
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="entrydate" 
                type="date" 
                name="entrydate"
                onChange={handleChange}
            />
        </div>
        <div className="w-full md:w-1/3 px-3">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="entrytime"
            >
                Time
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="entrytime" 
                type="time"
                name="entrytime" 
                onChange={handleChange}
            />
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full px-3 flex flex-wrap items-center justify-between">
            <strong className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Shift</strong>
            <div className="radioWrap">
                <input 
                    type="radio" 
                    className="rounded text-pink-500" 
                    id="mng"  
                    name="shift"
                    value="Morning"
                    onChange={handleChange}
                />
                <label 
                    className="block uppercase tracking-wide text-gray-700 text-xs inline-block" 
                    htmlFor="mng"
                >
                    Morning
                </label>
            </div>
            <div className="radioWrap">
                <input 
                    type="radio" 
                    className="rounded text-pink-500" 
                    id="aft"  
                    value="Afternoon"
                    name="shift"
                    onChange={handleChange}
                />
                <label 
                    className="block uppercase tracking-wide text-gray-700 text-xs inline-block" 
                    htmlFor="aft"
                >
                    Afternoon
                </label>
            </div>
            <div className="radioWrap">
            <input 
                type="radio" 
                className="rounded text-pink-500" 
                id="ngt" 
                value="Night"
                name="shift"
                onChange={handleChange}
            />
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs inline-block" 
                htmlFor="ngt"
            >
                Night
            </label>
            </div>            
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="inputvalue"
            >
                Input
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="inputvalue" 
                type="number" 
                onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="outputvalue"
            >
                Output
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="outputvalue" 
                type="number" 
                onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                htmlFor="observation"
            >
                Observation
            </label>
            <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="observation" 
                type="number"
                onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6  text-left items-end">
        <div className='w-full px-3'>
            <button 
                className="flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold" 
                type="button"
            >
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