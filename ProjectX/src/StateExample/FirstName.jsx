import React, { useState } from 'react'

export default function FirstName() {
    let [user,setUser]=useState('');
    let [last,setlast]=useState('');
    let [show,Setshow]=useState('');

    function one()
     {
        Setshow(('Hello'+user+last))
    }

    return (
    <div>
        <input type="text" value={user} placeholder='Enter firstname' onChange={(e)=>setUser(e.target.value)} />
        <input type="text" value={last} placeholder="Enter LastName" onChange={(e)=>setlast(e.target.value)} />

        <button onClick={one}>Submit</button>

        <h2>{show}</h2>

    </div>
  )
}
