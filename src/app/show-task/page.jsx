"use client";
import ContextUser from "@/Context/useContext";
import { delTask, showTask } from "@/services/taskService";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
const page = () => {
  const[task,setTask]=useState([]);
  const context = useContext(ContextUser);
  console.log(context)
async function del(taskId){
  try {
    const response =await delTask(taskId)
  console.log(response);
  const newTask=task.filter((item)=>item._id != taskId);
  setTask(newTask);
    toast.success("Task Deleted Successfully");
  } catch (error) {
    console.log(error);
    toast.error("Task can't be deleted");
  }
}
  async function show(userId) {
    try {
      const response = await showTask(userId);
      setTask([...response]);
      console.log(response);
     
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    if(context.user){
      show(context.user._id);
    }
  },[context.user])
  return (
    <>
   <div className="container grid grid-cols-12 mt-3">
    <div className="col-span-6 col-start-4 ">
<div className="text-center text-2xl">Your Tasks ({task.length})</div>
{task.map((item) => (
        <div key={item._id} className={` mt-2 rounded-md text-black mb-3 block ${
          item.status=="completed"? "bg-green-600 shadow-lg border border-green-400 text-white":"bg-slate-200 shadow-lg   border border-gray-300"
        }`}>
          <div className="p-5 ">
            <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <span onClick={()=>{
              del(item._id)
            }}>
            <ImCross />
            </span>
        
            </div>
           
            <p className="font-normal">{item.content}</p>
            <p className="font-normal">Status:{item.status}</p>
            <p className="text-right">
              Author: <span className="font-bold">{context.user.name}</span>
            </p>
          </div>
        </div>
      ))}
   </div>
   </div>
    </>
   
  )
}

export default page