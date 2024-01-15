import React from 'react'

const IncidentReport = () => {
  return (
    <div className='bg-slate-500'>
       <form className="formHolder max-w-xxl text-center bg-slate-50 rounded-lg overflow-hidden flex flex-wrap justify-center mx-auto">
            <h1 className='text-2xl text-center p-3 text-white bg-violet-700 w-full'>Incident Report form</h1>
            <div className='formContent w-full p-10 '>
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
                        Date of incident
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="datetime-local" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nature of incident
                        </span>
                        <input type="checkbox" class="rounded text-pink-500" id="miss" />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="miss">
                         Near miss
                        </label>
                        <input type="checkbox" class="rounded text-pink-500" id="aid" />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="aid">
                        First Aid
                        </label>
                        <input type="checkbox" class="rounded text-pink-500" id="medical"/>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="medical">
                        Medical Treatment/doctor
                        </label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="injuredname">
                        Name of injured person
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injuredname" type="text" placeholder="jon doe" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="addr">
                        Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="addr" type="text" placeholder="23 St. Mary..." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full  md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="occupation">
                        Occupation
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injuredname" type="text" placeholder="occupation" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="teln">
                        Telephone
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="teln" type="tel" placeholder="0123456789" />
                    </div>
                </div> 
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="emp">
                        Employer
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="emp" type="text" placeholder="Employer" />
                    </div>
                </div>                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="injury">
                        Activity in which the person was engaged at the time of injury
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injury" type="text" placeholder="Activity" />
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loc">
                        Exact Site location where enjury occured
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="emp" type="text" placeholder="loc" />
                    </div>
                </div>                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nature">
                        Nature of injury 
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nature" type="text" placeholder="fracture,burn,sprain..." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="area">
                        Body location of injury (just enter now later image will be provided)
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="area" type="text" placeholder="part" />
                    </div>
                </div>                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="treatment">
                        Treatment given on site
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injury" type="text" placeholder="treatment" />
                    </div>
                </div>                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tname">
                    Name of the treating person
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tname" type="text" placeholder="Dr. abc" />
                    </div>
                </div>                
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full  md:w-1/2  px-3">
                        <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Referral for further treatment?
                        </span>
                        <div className="flex gap-10">
                            <input type="radio" id="yes" name="referal"/>
                            <label htmlFor="yes">Yes</label>
                            
                            <input type="radio" id="no"  name="referal"/>
                            <label htmlFor="no">No</label>
                        </div>
                    </div>
                    <div className="w-full  md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="doc">
                        Name of doctor or hospital
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injury" type="text" placeholder="doc" />
                    </div>
                </div>            
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full md:w-1/2 px-3">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       WorkCover medical certificate received?
                        </span>
                        <div className="flex gap-10">
                            <input type="radio" id="yes1" name="cert"/>
                            <label htmlFor="yes1">Yes</label>
                            
                            <input type="radio" id="no1"  name="cert"/>
                            <label htmlFor="no1">No</label>
                        </div>
                    </div>
                    <div className="w-full  md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="copy">
                        Attach copies
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="injury" type="text" placeholder="copy" />
                    </div>
                </div>         
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full  md:w-1/2 px-3">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                       Injury management requirement?
                        </span>
                        <div className="flex gap-10">
                            <input type="radio" id="yes2" name="injur"/>
                            <label htmlFor="yes2">Yes</label>
                            
                            <input type="radio" id="no2"  name="injur"/>
                            <label htmlFor="no2">No</label>
                        </div>
                    </div>
                    
                    <div className="w-full  md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="coord">
                        Notify return to work coordinator
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="coord" type="text" placeholder="notification" />
                    </div>
                </div>        
                <div className="flex flex-wrap -mx-3 mb-6  text-left">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="namec">
                        Name of return to work coordinator
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="namec" type="text" placeholder="coordinator" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6  text-left items-end">
              
                <div className='w-full  px-3'>
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

export default IncidentReport