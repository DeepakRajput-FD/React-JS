import React, { useState } from 'react'
import Example2 from './Example2';

export default function Example1() {
  
    let [Name,setName]=useState('');

    return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />

        <h3>this is component1</h3>

        <Example2 msg={Name} />

    </div>
  )
}
