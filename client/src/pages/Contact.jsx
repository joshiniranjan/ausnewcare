import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/form/contact";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};


const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData)
  const {user} = useAuth();
  const [userData, setUserData] = useState(true)

  if(userData && user ) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUserData(false)
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({...contact, [name]: value})
  }

  //handle form submisson
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact)
      })

      if(response.ok) {
        setContact(defaultContactFormData)
        toast.success('message sent successfully')
      }
    }catch(error) {
      toast.error(error)
    }
  }

  return (
    <div className='bg-slate-700 flex flex-wrap items-center justify-center min-h-full'>
      <div className="max-w-xxl flex flex-wrap ">
        <div className='w-1/2'> 
          <iframe className='w-full h-full ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.3790629629161!2d150.78538560095976!3d-33.7595862305254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129ac0b4933add%3A0xf3eb81ba2ac2bcf8!2s25A%20Poplar%20St%2C%20North%20St%20Marys%20NSW%202760!5e1!3m2!1sen!2sau!4v1702787385693!5m2!1sen!2sau"  loading="lazy" ></iframe>
        </div>
        <form className='formHolder bg-slate-50 rounded-lg overflow-hidden w-1/2' onSubmit={handleLogin}>
          <h1 className='text-2xl text-center p-3 text-white bg-violet-700 mb-5'>Contact Us</h1>
          <div className="flex flex-wrap mb-6  text-left">
            <div className="w-full px-5 mb-6 ">
                <label 
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                  htmlFor="fn"
                >
                  Username
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="fn" 
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                />
            </div>
            <div className="w-full px-5 mb-6 ">
                <label 
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                  htmlFor="email"
                >
                  Email address
                </label>
                <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="email" 
                  type="email"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                />
            </div>
            <div className="w-full px-5">
                <label 
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold" 
                  htmlFor="msg"
                >
                  Message
                </label>
                <textarea 
                  className="appearance-none h-32 resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="msg" 
                  name="message"
                  type="text"
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
            </div>
          </div>
          <div className="w-full px-5 mb-6">
              <button 
                className='flex-shrink-0  bg-violet-900 hover:bg-violet-500 border-violet-900 hover:border-violet-500 text-sm border-4 text-white py-2 w-full rounded font-semibold' 
                type='submit'
              >
                  Send
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact