import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

export default function HomePage() {
  
  const navigate=useNavigate();

  let handleSubmit=()=>
    {
      navigate('/contact');
    }

  return (
    <div>
        <h1> use Navigate Home page</h1>
        <button onClick={handleSubmit} >Click for contact page </button>
        <button onClick={(e)=>navigate(1)}>Go to Next Page</button>
        <button onClick={(e)=>navigate(-1)}>Go to Previous Page</button>
    </div>
  )
}
