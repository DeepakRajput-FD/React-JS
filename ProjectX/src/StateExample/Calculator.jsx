import React, { useState } from 'react'

export default function Calculator() {
  
    let [first,setfirst]=useState('');
    let [Second,setsecond]=useState('');

    // operation

    let [show,Setshow]=useState('');
    

    return (
    <div>
        <input type="text" placeholder="Enter First Value" value={first} onChange={(e)=>setfirst(e.target.value)} />
        <input type="text" placeholder="Enter Second Value" value={Second} onChange={(e)=>setsecond(e.target.value)} />

        <button onClick={()=>{Setshow(Number(first)+Number(Second)), setfirst(''),setsecond('') }}>+</button>
        <button onClick={()=>{Setshow(Number(first)-Number(Second)), setfirst(''),setsecond('') }}>-</button>
        <button onClick={()=>{Setshow(Number(first)*Number(Second)), setfirst(''),setsecond('')}}>*</button>
        <button onClick={()=>{Setshow(Number(first)/Number(Second)), setfirst(''),setsecond('')}}>/</button>

        <h1>{show}</h1>
        

    </div>
  )
}
