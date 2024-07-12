import React, { useEffect, useRef, useState } from 'react'

export default function UseRefExample2() {
  
    const [count,setcount]=useState(0);
    const prevCount=useRef();

    useEffect(()=>
        {
            prevCount.current=count;
        },[count])
    
    return (
    <>
    <p>current value : {count}</p>
    <p>previous value : {prevCount.current}</p>
     <button onClick={()=>setcount(count+1)}>click here</button>   

    </>
  )
}
