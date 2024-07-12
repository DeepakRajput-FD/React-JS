import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function StateExample1() {
  
    let [name,setname]=useState('');
    let navigate=useNavigate();
    
    let handleButton=()=>
        {
            navigate('/Access',{state:{name}});
        }

    return (
    <>
    <input type="text" placeholder='Enter Name : ' onChange={(e)=>setname(e.target.value)} />
    <button onClick={handleButton}>send record </button>
    </>
  )
}
