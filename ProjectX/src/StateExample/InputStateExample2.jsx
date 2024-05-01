import React, { useState } from 'react'

export default function InputStateExample2() {
  const [username,Setusername]=useState("");
  const [data,Setdata]=useState("");

  const handlerButton=()=>
  {
    Setdata(username);
    Setusername("");
  }

    return (
    <div>
        <input type="text" placeholder="Enter Your Username" value={username} onChange={(e)=>Setusername(e.target.value)} />
        <h1>{data}</h1>
        <button onClick={handlerButton}>Submit</button>
    </div>
  )
}
