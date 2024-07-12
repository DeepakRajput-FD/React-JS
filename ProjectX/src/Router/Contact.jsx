import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {

  let naviagte=useNavigate();

  let handleSubmit=()=>
    {
      naviagte('/about')
    }

  return (
    <div>
        <h1>UseNavigate Contact Component</h1>
       <button onClick={handleSubmit}>click for about page</button>
       {/* <button onClick={(e)=>naviagte(1)}>Go to Next Page</button>
        <button onClick={(e)=>naviagte(-1)}>Go to Previous Page</button> */}
    </div>
  )
}
