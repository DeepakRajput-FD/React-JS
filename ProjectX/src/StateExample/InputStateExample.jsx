import React, { useState } from 'react'

export default function InputStateExample() {
    let [username,Setusername]=useState('');
    return (
    <div>
        <input type="text"  placeholder='Enter UserName' onChange={(e)=>{Setusername(e.target.value)}} />
        <h1>{username}</h1>
    </div>
  )
}
