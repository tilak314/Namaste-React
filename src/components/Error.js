import React from 'react'
import { useState, useEffect } from "react";



const Error = () => {

  useEffect(() => {
    console.log("hello")
  }, [])

  return (
    <div>
        <h1>Oops</h1>
        <h2>Something went wrong</h2>
    </div>
  )
}

export default Error