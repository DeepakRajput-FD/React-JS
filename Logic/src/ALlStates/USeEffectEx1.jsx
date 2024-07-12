import React, { createContext, useState } from 'react'
import Example2 from './Example2';
import { useNavigate } from 'react-router-dom';

export let context1=createContext();

export default function USeEffectEx1() {

    let [name,setname]=useState('');
    let navigate=useNavigate();
    return (
    <div>
        <input type="text" placeholder='Enter value' onChange={(e)=>setname(e.target.value)} />
        <button onClick={()=>navigate('/second')}>send to other component</button>

        <context1.Provider value={name}>
        <Example2/>
        </context1.Provider>

    </div>
  )
}
