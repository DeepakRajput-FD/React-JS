import React, { useState } from 'react'

export default function Task3() {
  
    let [name,Setname]=useState('');
    let [Arr,Setarr]=useState([]);

    let handle=()=>
        {
            Setarr([...Arr,name])
        }
    
    return (
    <div>
        <input type="text" placeholder='Enter name' onChange={(e)=>Setname(e?.target?.value)} />
        <button onClick={handle}>click</button>
        
        {
            Arr.map((e,i)=>
                {
                    return <h2 key={i}>{e}</h2>
                })
        }

    </div>
  )
}
