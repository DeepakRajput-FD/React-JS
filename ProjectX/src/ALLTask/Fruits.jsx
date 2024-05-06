import React, { useState } from 'react'
import './Fruits.css'
export default function Fruits() {
    let [subject,Setsubject]=useState('');
    let [Arrray,SetArray]=useState([]);

    
    let Add=()=>
    {
        SetArray([...Arrray,subject]);
        Setsubject('');
    }



    return (
    <div className='mainwarpper'>

<div className='container'>
        <input type="text" placeholder="Enter Fruits " className='style2' value={subject} onChange={(e)=>Setsubject(e?.target?.value)} />

        <button onClick={Add}  className='style3'>
            Add
        </button>

        {
           Arrray.map((e,i)=>
           {
            return <li  className='list' key={i}>{e}</li>
           }) 
        }

    </div>

    </div>
  )
}
