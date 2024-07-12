import React, { createContext, useState } from 'react'
import UseExample3 from './UseExample3';

export let mycontext=createContext();

export default function UseExample1() {
    let [Name,setName]=useState('')
  return (
    <div>
    
    <input type="text" onChange={(e)=>setName(e.target.value)} />

      <h3>first component</h3>

        <mycontext.Provider value={Name}>
            <UseExample3/>
        </mycontext.Provider>
    
    </div>
  )
}
