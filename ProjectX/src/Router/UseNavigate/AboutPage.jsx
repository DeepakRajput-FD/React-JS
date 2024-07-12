import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutPage() {
  
  let navigate=useNavigate();

  return (
    <div>
      
        <h1>About Page</h1>
        <button onClick={(e)=>navigate(1)}>Go to Next Page</button>
        <button onClick={(e)=>navigate(-1)}>Go to Previous Page</button>
        {/* <Link to={'/'}>Click for home page</Link> */}
    </div>
  )
}
