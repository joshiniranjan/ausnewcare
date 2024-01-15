import React from 'react'
import { useAuth } from '../store/auth'

const About = () => {
  const {user} = useAuth();

  return (
    <div className='bg-purple-700 p-3'>
      <h1>Welcome, {user ? `${user.username}`:" "} to our website  </h1>
    </div>
  )
}

export default About