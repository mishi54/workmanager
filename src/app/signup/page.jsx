"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import signUp from '../../../public/signup.svg'
import { toast } from 'react-toastify';
import { Signup } from '@/services/userService';

const page = () => {
  const[auth,setAuth]=useState({
    name:"",
    email:"",
    password:"",
    profileUrl:"",
    about:"",
  })

const handleInput=(e)=>{
const{name,value}=e.target;
setAuth((prev)=>({
...prev,
[name]:value,
}));
}
const handleSubmit=async (e)=>{
  e.preventDefault();

  try {
     const result=await Signup(auth) 
     toast.success("Signup Successfully",{position:"top-center"});
     setAuth({ name:"",
        email:"",
        password:"",
        profileUrl:"",
        about:"",})
   
  } catch (error) {
    console.log(error);
    toast.error(" Failed to add task",{position:"top-center"})
  }
}
  return (
    <>
      <div className="mt-4 flex justify-center px-4">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-5 shadow-sm rounded-md">
          <div className="flex justify-center">
            <Image src={signUp} alt="img" style={{
                width:"50%",
            }}/>
          </div>
          <h1 className="text-gray-700 font-lg font-bold text-center mt-2">
            SignUp Now!
          </h1>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name" id="name" className="block mt-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mb-2 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
            name="name"
            onChange={handleInput}
            value={auth.name}
            />

            <label htmlFor="email" id="email" className="block mt-3 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mb-2 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
            name="email"
            onChange={handleInput}
            value={auth.email}
            />

            <label htmlFor="password" id="password" className="block mt-3 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mb-2 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
            name="password"
            onChange={handleInput}
            value={auth.password}/>
            <label htmlFor="profileUrl" id="profileUrl" className="block mt-3 mb-2">
             ProfileUrl
            </label>
            <input
              id="profileUrl"
              className="mb-2 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
            name="profileUrl"
            onChange={handleInput}
            value={auth.profileUrl}/>

<label htmlFor="about" id="about" className="block mt-3 mb-2">
            About
            </label>


            <textarea
              id="about"
              className="mt-2 block bg-slate-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
              rows={5}
              name="about"
              onChange={handleInput}
              value={auth.about}
            />

          

            <div className="flex flex-col sm:flex-row  gap-3 mt-2">
              <button
                type="submit"
                className="text-white bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 w-full sm:w-auto"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setAuth({ name:"",
                    email:"",
                    password:"",
                    profileUrl:"",
                    about:"", })}
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 w-full sm:w-auto"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
