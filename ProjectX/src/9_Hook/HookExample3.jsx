import React, { useEffect, useState } from 'react'

export default function HookExample3() {
  
    const [count,setcount]=useState(0)

    useEffect(()=>
        {
            console.log('Use Effect Called');
        },[])

        // it invoke once in a program before initialization

    return (
    <div>
        {count}
        <button onClick={()=>setcount(count+1)}>Click Here</button>
    </div>
  )
}
