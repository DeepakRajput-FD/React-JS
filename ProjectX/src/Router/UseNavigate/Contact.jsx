import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
  
  let navigate=useNavigate();

  let handleSubmit=()=>
    {
      navigate('/about')
    }

  return (
    <div>
        <h1>Contact Component</h1>
        <button onClick={handleSubmit}>Click here for about page</button>
        <button onClick={(e)=>navigate(1)}>Go to Next Page</button>
        <button onClick={(e)=>navigate(-1)}>Go to Previous Page</button>
        {/* <Link to={'/About'}>For About Page</Link> */}
    </div>
  )
}
