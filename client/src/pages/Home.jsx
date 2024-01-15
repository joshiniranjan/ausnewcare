import React from 'react'
import Banner from '../components/banner/Banner'
import Cards from '../components/cards/Cards'
import Courses from '../components/courses/Courses'
import CourseGuide from '../components/courseguide/CourseGuide'
import Testimonial from '../components/testimonial/Testimonial'

const Home = () => {
  return (
    <div>
        {/* <AttendanceSheet /> */}
        {/* <AttendanceForm /> */}
        {/* <IncidentReport/> */}
        {/* <BladderForm /> */}
        {/* <BowelForm/> */}
        {/* <Catheter /> */}
        {/* <DutiesForm /> */}
        <Banner />
        <Cards />
        <Courses />
        <CourseGuide />
        <Testimonial />
    </div>
  )
}

export default Home