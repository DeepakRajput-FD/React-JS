import React, { useState } from 'react'

export default function LocalStorage1() {

    const [name,setname]=useState('');
    const [subject,setsubject]=useState('');
    const [msg,setmsg]=useState('');

    const handlesubmit=()=>
        {
            localStorage.setItem(name,subject);
            // localStorage.setItem('subject',subject);
            setmsg('sucessfully record added')
        }

    return (
    <div>
        
        <input type="text" placeholder="Enter name" onChange={(e)=>setname(e?.target?.value)} />
        <input type="text" placeholder="Enter subject" onChange={(e)=>setsubject(e?.target?.value)}  />

        <button onClick={handlesubmit}>
            click
        </button>
        {msg}
    </div>
  )
}
