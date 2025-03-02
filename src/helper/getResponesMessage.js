import { NextResponse } from 'next/server'
import React from 'react'

const getResponesMessage = (message,status,success) => {
  return (
    NextResponse.json(
        {
            message:message,
            status:status,
        },{
            success
        }
    )
   
  
  )
}

export default getResponesMessage

