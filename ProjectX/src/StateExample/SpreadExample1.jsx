import React, { useState } from 'react'

export default function SpreadExample1() {
  const [myarr,Setmyarr]=useState([]); //blank array initialization
  const [subject,Setsubject]=useState('');
  
  let handleSubmit=()=>
  {
    Setmyarr([...myarr,subject]);
  }

    return (
    <div>
        <input type="text" placeholder="Enter subject" onChange={(e)=>Setsubject(e?.target?.value)} />
        <button onClick={handleSubmit}>Add</button>
        <br /><br />
        {
            myarr.map((e,i)=>
            {
                return <h2 key={i}>{e}</h2>
            })
        }
    </div>
  )
}
