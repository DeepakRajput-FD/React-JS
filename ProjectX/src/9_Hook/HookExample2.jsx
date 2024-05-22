import React, { useEffect, useState } from 'react'

export default function HookExample2() {
 
    const [count,setcount]=useState(0);
    const [num,setnum]=useState(0);

    // use effect with dependency

    useEffect(()=>
        {
            // with dependency
            console.log('Use Effect Calling');
        },[count])

        // it is run when we click the count 

    return (
    <div>
         <h3>{count}</h3>
        <h3>{num}</h3>
        <button onClick={()=>setcount(count+1)}>click here for count</button>
        <button onClick={()=>setnum(num+1)}>click here for num</button>
    </div>
  )
}
