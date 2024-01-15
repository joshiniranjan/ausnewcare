import React from 'react'
import { NavLink } from 'react-router-dom'
import { pushRotate as Menu } from 'react-burger-menu'
import './navigation.css'
import { useAuth } from '../../store/auth'

const Navigation = () => {
  const {isLoggedIn} = useAuth();
  return (
    <>
        <Menu itemListElement="div" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <NavLink className="menu-item block text-2xl font-bold mb-4" to="/">Home</NavLink>
          <NavLink  className="menu-item block text-2xl font-bold mb-4" to="/about">About</NavLink>
          <NavLink  className="menu-item block text-2xl font-bold mb-4" to="/contact">Contact</NavLink>
            {
              isLoggedIn ? (
                <>
                  <NavLink className="menu-item block text-2xl font-bold mb-4" to="/mocktest">Online Exam</NavLink>
                  <NavLink className="menu-item block text-2xl font-bold mb-4" to="/quiz">Quiz</NavLink>
                  <NavLink  className="menu-item block text-2xl font-bold mb-4" to="/enrollment">Enrollment</NavLink>
                  <NavLink className="menu-item block text-2xl font-bold mb-4" to="/logout">Logout</NavLink>
                </>
              ): ( 
                <>
                  <NavLink className="menu-item block text-2xl font-bold mb-4" to="/register">Register</NavLink>
                  <NavLink  className="menu-item block text-2xl font-bold mb-4" to="/login">Login</NavLink>
                </>
              )
            }
        </Menu>
    </>
  )
}

export default Navigation