"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { addTask } from '@/services/taskService'
import { toast } from 'react-toastify';
const page = () => {
  const[task,setTask]=useState({
    title:"",
    content:"",
    status:"",
    // userId:"67aa3dc99cd38a41bb79c9d1"
  })

const handleInput=(e)=>{
const{name,value}=e.target;
setTask((prev)=>({
...prev,
[name]:value,
}));
}
const handleSubmit=async (e)=>{
  e.preventDefault();

  try {
     const result=await addTask(task); 
     toast.success("Added Task Successfully",{position:"top-center"});
     setTask({ title: "", content: "", status: "" })
   
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
            <Image src="/imgform.svg" width={150} height={80} alt="img" />
          </div>
          <h1 className="text-gray-700 font-lg font-bold text-center mt-2">
            Add Your Tasks!
          </h1>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="title" id="title" className="block mt-2">
              Title
            </label>
            <input
              id="title"
              className="mb-2 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
            name="title"
            onChange={handleInput}
            value={task.title}
            />

            <label htmlFor="content" id="content" className="block mt-3 mb-2">
              Content
            </label>
            <textarea
              id="content"
              className="mt-2 block bg-slate-200 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-gray-400"
              rows={5}
              name="content"
              onChange={handleInput}
              value={task.content}
            />

            <label htmlFor="status" id="status" className="block mt-3 mb-2">
              Status
            </label>
            <select
              id="status"
              className="mt-2 mb-3 block bg-slate-200 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 text-black"
              name="status"
            onChange={handleInput}
            value={task.status}
            >
              <option value="none" disabled>
                --Select Status--
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            <div className="flex flex-col sm:flex-row  gap-3">
              <button
                type="submit"
                className="text-white bg-blue-300 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 w-full sm:w-auto"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setTask({ title: "", content: "", status: "", userId: "" })}
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 w-full sm:w-auto"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
