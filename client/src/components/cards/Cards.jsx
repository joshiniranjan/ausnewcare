import React from 'react'
import './cards.css'

const Cards = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 md:py-28">
        <div className='CardsWrap md:flex md:flex-wrap md:-mx-3 text-center md:text-left px-5'>
            <div className='mb-5 md:w-1/2 lg:w-1/3 md:px-3'>
                <div className="card rounded-xl py-8 px-5 md:p-5 bg-purple-900 text-white h-full hover:shadow-2xl transition-all">
                    <h3 className='md:flex font-bold text-2xl place-items-center mb-3'>
                        <div className="iconWrap md:mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto md:mx-auto w-15 h-16 md:w-9 md:h-9">
                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Acknowledged nationwide
                    </h3>
                    <p className='mb-0 text-justify text-md md:leading-snug'>It will be simpler to receive credit or advanced standing toward additional education if you know that our courses fulfill the requirements needed to be nationally recognized throughout Australia.</p>
                </div>
            </div>
            <div className="mb-5 md:w-1/2 lg:w-1/3 md:px-3">
                <div className="card rounded-xl py-8 px-5 md:p-5 bg-purple-900 text-white h-full place-content-between hover:shadow-2xl transition-all">
                    <h3 className='md:flex font-bold text-2xl place-items-center mb-3'>
                        <div className="iconWrap  md:mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto md:mx-auto w-15 h-16 md:w-9 md:h-9">
                                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        Adaptable Terms of Payment
                    </h3>
                    <p  className='mb-0 text-justify text-md md:leading-snug'>For some courses, payment options are available. Enjoy convenient terms for payments by credit card or monthly bank transfer.</p>
                </div>
            </div>
            <div className="mb-5 md:w-1/2 lg:w-1/3 md:px-3">
                <div className="card rounded-xl py-8 px-5 md:p-5 bg-purple-900 text-white h-full hover:shadow-2xl transition-all">
                    <h3 className='md:flex font-bold text-2xl place-items-center mb-3'>
                        <div className="iconWrap  md:mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto md:mx-auto w-15 h-16 md:w-9 md:h-9">
                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                            </svg>
                        </div>
                    Paid internship                
                    </h3>
                    <p className='mb-0 text-justify text-md md:leading-snug'>Paid internships may be available to candidates approved by our partner organization, Meditech Staffing. For a successful orientation process as a  Meditech Staffing service support worker.</p>
                </div> 
            </div>
        </div>    
    </div>
  )
}

export default Cards