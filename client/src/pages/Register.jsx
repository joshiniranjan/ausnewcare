import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
const URL = "http://localhost:5000/api/auth/register"


const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname:"",
    username:"",
    email: "",
    phone:"",
    password:"",
  })

  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, 
      [name]: value,
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
        const response = await fetch(URL , {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      console.log(response)
      const res_data = await response.json();

      if(response.ok) {
        //stored the token in localhost
        storeTokenInLS(res_data.token)
        // localStorage.setItem(res_data.token)

        setUser({
          firstname: "",
          lastname:"",
          username:"",
          email: "",
          phone:"",
          password:""
        })
        toast.success('Registration Successful')
        navigate("/login");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
      
    } catch(error) {
      console.log("register error",error)      
    }    
  }

  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-full'>
      <form className='formHolder max-w-md bg-slate-50 rounded-lg overflow-hidden w-full' onSubmit={handleSubmit}>
        <h1 className='text-2xl text-center p-3 text-white bg-violet-700 mb-5'>Signup</h1>
        <div className="flex flex-wrap mb-6  text-left">
          <div className="w-full md:w-1/2 mb-5 md:mb-0 px-5">
              <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                htmlFor="fn"
              >
                First name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="fn" 
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleInput}
              />
          </div>
          <div className="w-full md:w-1/2 px-5">
              <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                htmlFor="ln"
              >
                Last name
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="ln" 
                name="lastname"
                type="text"
                value={user.lastname}
                onChange={handleInput}
              />
          </div>
        </div>
        <div className="w-full px-5 mb-6">
          <div>
                <label 
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                  htmlFor="un"
                >
                  Username
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="un" 
                  name="username"
                  type="text"
                  value={user.username}
                  onChange={handleInput}
                />
            </div>
          </div>
        <div className="w-full px-5 mb-6">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
              htmlFor="email"
            >
            Email
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="email" 
              type="email"
              name="email"
              value={user.email} 
              onChange={handleInput}
            />
        </div>
        <div className="w-full px-5 mb-6">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
              htmlFor="phone"
            >
              Phone
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="phone" 
              type="number"
              name="phone"
              value={user.phone}
              onChange={handleInput}
            />
        </div>
        <div className="w-full px-5 mb-6">
            <label 
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
              htmlFor="password"
            >
              Password
            </label>
            <input 
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="password" 
              type="password"
              name="password"
              value={user.password} 
              onChange={handleInput}
            />
        </div>
        <div className="w-full px-5 mb-6">
          <button 
            className='flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold' 
            type='submit'
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register