import React, { useCallback, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';

export default function Example1() {
  
    const [count,setcount]=useState(0);
    const [mylist,setlist]=useState([]);

    // it is called when we call parent component
    // console.log('hii this is main component');

    const addRecord=useCallback(()=>{
        setlist([...mylist,'New Data']);
    },[mylist]);

    return (
    <>
    
    {count}
    {/* <Component1/> */}
    <button onClick={()=>setcount(count+1)} >count+1</button>
        <Component2 mylist={mylist} addRecord={addRecord} />
    </>

  )
}
