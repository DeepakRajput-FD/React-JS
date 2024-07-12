import React, { useMemo, useState } from 'react'

export default function UseMemoExample() {
  
    // localState
    const [num1,setNum1]=useState(1); 
    const [num2,setNum2]=useState(10); 
  
    // function doSomething(){
    //     console.warn('===> do something')
    //     return num1*10;
    // } 

    const useData=useMemo(()=>{
        console.warn('use memo');
        return num1*10;
    },[num1]);


    return (
    <>
    
        <h3>{num1}</h3>
        {/* <h3>do Something : {doSomething()} </h3> */}

        <h3>{useData}</h3>

        <button onClick={()=>setNum1(num1+1)}>count + 1</button>

        <h3>{num2}</h3>
        <button onClick={()=>setNum2(num2+1)}>count + 10</button>

    </>
  )
}
