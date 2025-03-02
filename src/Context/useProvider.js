"use client";
import React, { useEffect, useState } from 'react'
import ContextUser from './useContext'
import { currentUser } from '@/services/userService';
import { toast } from 'react-toastify';

const UserProvider = ({children}) => {
    const[user,setUser]=useState(null);
    useEffect(()=>{async function getData(){
     try {
            const curruser=await currentUser();
         
            if (curruser) {
                setUser(curruser); 
            } else {
                setUser(null);
            }
            console.log(curruser);
       
        } catch (error) {
            console.log(error);
            setUser(null);
            
        }}
        getData();
    },[])
  return (
    <div><ContextUser.Provider value={{
        user,setUser
    }}>
        {children}
        </ContextUser.Provider></div>
  )
}

export default UserProvider