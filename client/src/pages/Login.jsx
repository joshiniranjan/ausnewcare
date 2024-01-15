import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/auth'
// import ProgressChart from '../components/ProgressChart'
import { toast } from 'react-toastify'


const URL = "http://localhost:5000/api/auth/login"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
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


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type":'application/json',
        },
        body: JSON.stringify(user)
      })

      const res_data = await response.json();

      if(response.ok){

        //stored the token in localhost
        storeTokenInLS(res_data.token)
        setUser({
          email: "",
          password:""
        })
        toast.success('login Successful')
        navigate('/')
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
        console.log('invalid credentials');
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-full'>
      <form className='formHolder max-w-md bg-slate-50 rounded-lg overflow-hidden w-full' onSubmit={handleLogin}>
        <h1 className='text-2xl text-center p-3 text-white bg-violet-700 mb-5'>Login</h1>
        <div className="flex flex-wrap mb-6  text-left">
          <div className="w-full px-5 mb-6 ">
              <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                htmlFor="email"
              >
               Username
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
          <div className="w-full px-5">
              <label 
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                htmlFor="pass"
              >
                Password
              </label>
              <input 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="pass" 
                name="password"
                type="password"
                value={user.password}
                onChange={handleInput}
              />
          </div>
        </div>
        <div className="w-full px-5 mb-6">
            <button 
              className='flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold' 
              type='submit'
            >
                Login
            </button>
        </div>
      </form>

      {/* <ProgressChart /> */}
    </div>
  )
}

export default Login