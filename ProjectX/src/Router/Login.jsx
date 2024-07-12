import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
 
    let navigate=useNavigate();

    return (
    <div>
        <h1>Login Page</h1>
        <button onClick={()=>navigate("/home",{ replace : true})}>Sign in</button>
    </div>
  )
}
