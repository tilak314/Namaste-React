import React from 'react'

import { useState, useEffect } from "react";


const Cart = () => {

  console.log("above")

  useEffect(() => {
      console.log("hello")
    }, [])

  return (
    <div>
        <h1>Cart</h1>
        {console.log("inside div")}
    </div>
  )
}

export default Cart