import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './enrollment.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Radio from '../components/Radio/Radio';
import { useAuth } from '../store/auth';

const Enrollment = () => {
    const form = useRef();
    const [page, setPage] = useState(0);
    const [cert, setCert] = useState({
        value: 'Certificate III in Individual Support (Ageing and Disability)'
    });

    const [enrollment, setEnrollment] = useState({
        fullname:"",
        dateofbirth:"",
        address:"",
        email:"",
        mobile:"",
        qualification:"",
        skills:[],
        sports:[],
        lastcourse:"",
        interest:"",
        plan:"",
        coursecombination:[],
        resources:[],
        achievement:"",
        level:"",
        info:[],
        availability:[],
        availabilitytime:[],
        declaration:"",
        usinumber:"",
        expectation:"",
        coreunit:[],
        electiveunit:[],
        specialisation:[],
        electives:[]
    });

    const {courses } = useAuth();

    let classType, category, idval, textValue

    const navigate = useNavigate();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if(name === 'level') {
            setCert({
                value
            });
        }

        if(name ==='coreunit' || 
            name==='availability' || 
            name==='availabilitytime' || 
            name === 'electiveunit' || 
            name==='specialisation' || 
            name==='electives' ||
            name==='info' ||
            name==='resources' ||
            name === 'coursecombination' ||
            name==='sports'||
            name==='coreunit'||
            name==='skills') {
            let content = {...enrollment}

            if(e.target.checked) {
                content[name].push(value)
            } else {
                content[name] = content[name].filter(el => el !== value)
            }
            setEnrollment(content)
        } else {
            setEnrollment({
                ...enrollment,
                [name]: value
            })  
        }
             
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/data/enrollment",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(enrollment)
            })
            const res_data = await response.json();
            
            if(response.ok) {
                toast.success('Enrollment Successful email will be sent for the payment')
                emailjs.sendForm('service_b3h68f4', 'template_ccrgph7', form.current, '0bEwJCNRL8IP494PA')
                .then((result) => {
                    console.log(result);
                }, (error) => {
                    console.log(error);
                });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch(error) {
            console.log('error from enrollment page')
        }
    }
    
  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-screen py-10'>
        <form  ref={form} className="formHolder lg max-w-xxl text-center bg-slate-50 rounded-lg overflow-hidden px-4" onSubmit={submitHandler}>
            <h1 className='text-2xl text-center p-3 mb-3 text-white bg-violet-700 -mx-4'>Enrollment Form</h1>
            <strong className='text-left block mb-3 text-indigo-700'>The course will be of more than 18 months depending upon the units selected.</strong>

            <h2 className='mb-3 text-left font-bold block mb-3 text-indigo-700 italic'>Please Select the cetification that you are planning to do</h2>
            <div className="topBar mb-6">
                <Radio 
                    classType="radioWrap"
                    category="level"
                    handleInput={handleInput}
                    idval="1"
                    textValue="Certificate III in Individual Support"
                />
                <Radio 
                    classType="radioWrap"
                    category="level"
                    handleInput={handleInput}
                    idval="2"
                    textValue="Certificate IV in Disability Support"
                />
                <Radio 
                    classType="radioWrap"
                    category="level"
                    handleInput={handleInput}
                    idval="3"
                    textValue="Certificate III in Individual Support (Ageing and Disability)"
                />
            </div>
            <div className="bg-purple-400 p-4 rounded mb-5 text-left">
                <strong className="mb-3 font-style-italic">Course Info:</strong>
                <em> You need to complete {(cert.value === 'Certificate IV in Disability Support') ? ' 10 ':' 15 '}units in total.</em>
            </div>
            <strong className='text-left block mb-3 text-indigo-700 italic'>Please make sure the information you provide is true to the best of your knowledge.</strong>
                
            <div className='formContent p-5 text-left'>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="fn"
                        >
                        Full Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="fn" 
                            type="text"
                            name="fullname"
                            value={enrollment.fullname}
                            onChange={handleInput}
                        />            
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="dob"
                        >
                        Date of Birth
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="dob" 
                            type="date" 
                            name="dateofbirth"
                            value={enrollment.dateofbirth}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap mb-6 ">
                    <div className="w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="address"
                        >
                        Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="address" 
                            type="text" 
                            name="address"
                            value={enrollment.address}
                            onChange={handleInput}
                            />            
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="email" 
                            type="email" 
                            name="email"
                            value={enrollment.email}
                            onChange={handleInput}
                        />            
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="mobile"
                        >
                        Mobile Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="mobile" 
                            type="number" 
                            name="mobile"
                            value={enrollment.mobile}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="quali"
                        >
                            Educational Qualification
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="quali" 
                            type="text" 
                            name="qualification"
                            value={enrollment.qualification}
                            onChange={handleInput}
                        />            
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="interest"
                        >
                        Field of interest
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="interest" 
                            type="text" 
                            name="interest"
                            value={enrollment.interest}
                            onChange={handleInput}
                        />            
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="mobile"
                        >
                        Skills/ Talents
                        </label>
                        <div className="coreUnit mb-5">
                            <div className="checkWrap">
                                <input id="check221" type="checkbox"  name="skills" value="Acting" onChange={handleInput}/>
                                <label htmlFor="check221">Acting</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check222" type="checkbox"  name="skills" value="Calculating" onChange={handleInput}/>
                                <label htmlFor="check222">Calculating</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check223" type="checkbox"  name="skills" value="Dancing"  onChange={handleInput}/>
                                <label htmlFor="check223">Dancing</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check224" type="checkbox"  name="skills" value="Photography"  onChange={handleInput}/>
                                <label htmlFor="check224">Photography</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check225" type="checkbox"  name="skills" value="Programming"  onChange={handleInput}/>
                                <label htmlFor="check225">Programming</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check226" type="checkbox"  name="skills" value="Playing music instruments"  onChange={handleInput}/>
                                <label htmlFor="check226">Playing music instruments</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check227" type="checkbox"  name="skills" value="Singing"  onChange={handleInput}/>
                                <label htmlFor="check227">Singing</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check228" type="checkbox"  name="skills" value="Arts"  onChange={handleInput}/>
                                <label htmlFor="check228">Arts</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="mobile"
                        >
                        Sports
                        </label>
                        <div className="coreUnit mb-5">
                            <div className="checkWrap">
                                <input id="check91" type="checkbox"  name="sports" value="Football" onChange={handleInput}/>
                                <label htmlFor="check91">Football</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check92" type="checkbox"  name="sports" value="Basketball" onChange={handleInput}/>
                                <label htmlFor="check92">Basketball</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check93" type="checkbox"  name="sports" value="Cricket"  onChange={handleInput}/>
                                <label htmlFor="check93">Cricket</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check94" type="checkbox"  name="sports" value="Badminton"  onChange={handleInput}/>
                                <label htmlFor="check94">Badminton</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check95" type="checkbox"  name="sports" value="Chess"  onChange={handleInput}/>
                                <label htmlFor="check95">Chess</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check96" type="checkbox"  name="sports" value="Tenis"  onChange={handleInput}/>
                                <label htmlFor="check96">Tenis</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check97" type="checkbox"  name="sports" value="Swimming"  onChange={handleInput}/>
                                <label htmlFor="check97">Swimming</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full  md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="plan"
                        >
                        What is your plan after Training?
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="plan" 
                            type="text" 
                            name="plan"
                            value={enrollment.plan}
                            onChange={handleInput}
                        />            
                    </div>
                    <div className="w-full md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="lastcourse"
                        >
                        Last course completed?
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="lastcourse" 
                            type="text" 
                            name="lastcourse"
                            value={enrollment.lastcourse}
                            onChange={handleInput}
                        />            
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                        Course Combination
                        </label>
                        <div className="coreUnit mb-5">
                            <div className="checkWrap">
                                <input id="check71" type="checkbox"  name="coursecombination" value="English" onChange={handleInput}/>
                                <label htmlFor="check71">English (Reading + Writing) : Saturday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check72" type="checkbox"  name="coursecombination" value="Math Plus Disability IV" onChange={handleInput}/>
                                <label htmlFor="check72">Math Plus Disability IV :Sunday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check73" type="checkbox"  name="coursecombination" value="Math Plus Disability IV"  onChange={handleInput}/>
                                <label htmlFor="check73">Math Plus Disability IV : Saturday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check74" type="checkbox"  name="coursecombination" value="English"  onChange={handleInput}/>
                                <label htmlFor="check74">English (Reading + Writing) : Sunday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check75" type="checkbox"  name="coursecombination" value="First Aid"  onChange={handleInput}/>
                                <label htmlFor="check75">First Aid</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check76" type="checkbox"  name="coursecombination" value="cooking"  onChange={handleInput}/>
                                <label htmlFor="check76">cooking</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check77" type="checkbox"  name="coursecombination" value="personal care"  onChange={handleInput}/>
                                <label htmlFor="check77">personal care</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Resources Available  (you can select more than one)
                        </label>
                        <div className="coreUnit mb-5">
                            <div className="checkWrap">		
                                <input id="check174" type="checkbox"  name="resources" value="Car"  onChange={handleInput}/>
                                <label htmlFor="check174">Car/ Transportation</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check175" type="checkbox"  name="resources" value="Printer"  onChange={handleInput}/>
                                <label htmlFor="check175">Printer</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check176" type="checkbox"  name="resources" value="Laptop"  onChange={handleInput}/>
                                <label htmlFor="check176">Laptop</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check177" type="checkbox"  name="resources" value="LCD Projector"  onChange={handleInput}/>
                                <label htmlFor="check177">LCD Projector</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check178" type="checkbox"  name="resources" value="Other"  onChange={handleInput}/>
                                <label htmlFor="check178">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap  -mx-3 mb-6 ">
                    <div className="w-full px-3 md:w-1/2 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="achievement"
                        >
                        Achievment or Rewards
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="achievement" 
                            type="text" 
                            name="achievement"
                            value={enrollment.achievement}
                            onChange={handleInput}
                        />            
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="usi"
                        >
                            USI Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="usi" 
                            type="text" 
                            value={enrollment.usinumber}
                            name="usinumber"
                            onChange={handleInput}
                            />            
                    </div>
                </div>
                <div className="flex flex-wrap  mb-6 ">
                    <div className="w-full md:w-1/2 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Why this course?
                        </label>
                        <div className="radioWrap">
                            <input id="check301" type="radio" group="reason"  name="reason" value="To get the job"  onChange={handleInput}/>
                            <label htmlFor="check301">To get the job</label>
                        </div>
                        <div className="radioWrap">		
                            <input id="check302" type="radio" group="reason"  name="reason"  value="Build skills" onChange={handleInput}/>
                            <label htmlFor="check302">Build skills</label>
                        </div>
                        <div className="radioWrap">		
                            <input id="check303" type="radio" group="reason"  name="reason"  value="Social Work" onChange={handleInput}/>
                            <label htmlFor="check303">Social Work</label>
                        </div>
                        <div className="radioWrap">		
                            <input id="check304" type="radio" group="reason"  name="reason"  value="Other" onChange={handleInput}/>
                            <label htmlFor="check304">Other</label>
                        </div>                
                    </div>
                    
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 ">
                    <div className="w-full md:w-1/2  px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Day Available (you can select more than one)
                        </label>
                        <div className="coreUnit mb-5">
                            <div className="checkWrap">		
                                <input id="check475" type="checkbox"  name="availability" value="Monday"  onChange={handleInput}/>
                                <label htmlFor="check475">Monday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check476" type="checkbox"  name="availability" value="Tuesday"  onChange={handleInput}/>
                                <label htmlFor="check476">Tuesday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check477" type="checkbox"  name="availability" value="Wednesday"  onChange={handleInput}/>
                                <label htmlFor="check477">Wednesday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check478" type="checkbox"  name="availability" value="Thursday"  onChange={handleInput}/>
                                <label htmlFor="check478">Thursday</label>
                            </div>
                            <div className="checkWrap">		
                                <input id="check474" type="checkbox"  name="availability" value="Friday"  onChange={handleInput}/>
                                <label htmlFor="check474">Friday</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2" 
                        >
                        Time Available
                        </label>
                        <div className="checkWrap">		
                            <input id="check201" type="checkbox" name="availabilitytime" value="7AM - 11AM"  onChange={handleInput}/>
                            <label htmlFor="check201">7AM - 11AM</label>
                        </div>
                        <div className="checkWrap">		
                            <input id="check205" type="checkbox" name="availabilitytime" value="12AM - 3PM"  onChange={handleInput}/>
                            <label htmlFor="check205">12AM - 3PM</label>
                        </div>
                        <div className="checkWrap">		
                            <input id="check204" type="checkbox" name="availabilitytime" value="5PM - 9PM"  onChange={handleInput}/>
                            <label htmlFor="check204">5PM - 9PM</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-6 ">
                    <div className="w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="train"
                        >
                            Expectation From training
                        </label>
                        <textarea className='w-full resize-none' name="expectation" id="train" cols="30" rows="6" value={enrollment.expectation} onChange={handleInput}></textarea>      
                    </div>
                </div>
                <strong  className="h1 groupTitle text-center block">Group A</strong>
                    <h2 className='text-xl font-bold mb-2 text-center'>{cert.value}</h2>
                    <h3 className='text-md font-bold mb-2'>Core Units</h3>
                    {
                        (cert.value === 'Certificate III in Individual Support') ? 
                            <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>Out of the 15 units, 9 are core units. These are mandatory and everyone must take them.</strong> 
                        : ((cert.value === 'Certificate IV in Disability Support') ? 
                            <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>Out of the 10 units, 7 are core units. These are mandatory and everyone must take them.</strong>
                        : <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>Out of the 15 units, 9 are core units. These are mandatory and everyone must take them.</strong>
                        )
                    }
                    
                    <div className="coreUnit mb-5">
                        {   
                            courses.map((course)=> {
                                if(course.unit_type === 'Core') {
                                    category=course.unit_type
                                    if(cert.value === course.certificate) {
                                        idval=course._id
                                        textValue= course.course_name
                                        return (                        
                                            <Radio 
                                                classType="checkWrap"
                                                category= {category}
                                                handleInput={handleInput}
                                                idval={idval}
                                                key={course._id}
                                                textValue={textValue}
                                            />                            
                                        )
                                    } 
                                }
                            
                            })
                        }   
                    </div>

                <div className="electiveUnit mb-10">
                    <h3 className='text-md font-bold mb-2'>Elective Units <div className={cert.value === 'Certificate III in Individual Support' ? 'block' : 'hidden'}> (AGEING specialisation)</div></h3>
                    {
                        (cert.value === 'Certificate III in Individual Support') ? 
                            <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>The remaining 6 units are elective. You have some flexibility here. At least 3 units must be chosen from Group A or B. The other 3 elective units can be selected from Group A, Group B, or Group C.</strong> 
                        : ((cert.value === 'Certificate IV in Disability Support') ? 
                            <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>The remaining 2 units are elective. You have some flexibility here. up to 1 unit from the electives listed below, or any current endorsed Training Package or accredited course</strong>
                        : <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'> The remaining 6 units are elective. You have some flexibility here.</strong>
                        )
                    }
                    {   
                        courses.map((course)=> {
                            if((course.unit_type === 'Elective')||(course.unit_type === 'Electives')) {
                                category=course.unit_type
                                if(cert.value === course.certificate) {
                                    idval=course._id
                                    textValue= course.course_name
                                    return (                        
                                        <Radio 
                                            classType="checkWrap"
                                            category= {category}
                                            handleInput={handleInput}
                                            idval={idval}
                                            key={course._id}
                                            textValue={textValue}
                                        />                            
                                    )
                                } 
                            }
                        
                        })
                    }                  
                </div>
                <div className={cert.value === 'Certificate III in Individual Support' ? 'block' : 'hidden'}>
                    <strong className="h1 groupTitle text-center block">Group B</strong>
                    <h2  className='text-xl font-bold mb-2 text-center'>Disability specialisation </h2>
                    <strong className='block bg-purple-400 p-4 rounded mb-5 text-left'>You have the option to specialize. Depending on your interest or career path, you can choose specific electives to focus on a particular area within Individual Support.</strong>
                </div>
                {   
                        courses.map((course)=> {
                            if(course.specialisation === 'disability') {
                                category=course.unit_type
                                if(cert.value === course.certificate) {
                                    idval=course._id
                                    textValue= course.course_name
                                    return (                        
                                        <Radio 
                                            classType="checkWrap"
                                            category= {category}
                                            handleInput={handleInput}
                                            idval={idval}
                                            key={course._id}
                                            textValue={textValue}
                                        />                            
                                    )
                                } 
                            }
                        
                        })
                    }                  
                    <div className={cert.value === 'Certificate III in Individual Support' ? 'block' : 'hidden'}>
                        <strong className="h1 groupTitle text-center block">Group C</strong>
                        <h2 className='text-xl font-bold mb-2 text-center'>Other electives</h2>
                        <div className="coreUnit mb-5">
                    </div>
                    {   
                        courses.map((course)=> {
                            if(course.unit_type === 'Other electives') {
                                category=course.unit_type
                                if(cert.value === course.certificate) {
                                idval=course._id
                                    textValue= course.course_name
                                    return (                        
                                        <Radio 
                                            classType="checkWrap"
                                            category= {category}
                                            handleInput={handleInput}
                                            idval={idval}
                                            key={course._id}
                                            textValue={textValue}
                                        />                            
                                    )
                                } 
                            }
                        
                        })
                    } 
                </div>
                <h2 className='text-xl font-bold mb-2 text-center'>Declaration</h2>            
                <div className="checkWrap">
                    <input id="check401" type="checkbox"  name="declaration" value="I hereby declare that the information given by me in the Application is true, complete and correct to the best of my knowledge and belief and that nothing has been concealed or distorted. "  onChange={handleInput}/>
                    <label htmlFor="check401">I hereby declare that the information given by me in the Application is true, complete and correct to the best of my knowledge and belief and that nothing has been concealed or distorted. </label>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2  items-end">
                    <div className='w-full px-3'>
                        <button className="but12" type="submit">
                            <svg><rect></rect></svg>
                            Submit
                        </button>
                    </div>     
                </div>
            </div>
        </form>
    </div>
  )
}

export default Enrollment