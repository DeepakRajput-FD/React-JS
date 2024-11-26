import React, { useState } from 'react'
import ChildComp from './ChildComp'

export default function ParentComp1() {
  
    const [message,setmessage]=useState('');

    const mymessage=(data)=>{
        setmessage(data);
    }

    return (
    <>
    <h1>ParentComp1</h1>
    
    <ChildComp myfun={mymessage} />

        {message}

    </>
  )
}
