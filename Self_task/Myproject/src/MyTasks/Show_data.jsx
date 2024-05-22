import React, { useState } from 'react'
import ShowChild from './ShowChild';

export default function Show_data() {
  
    let [name,setname]=useState('');
    let [subject,setsubject]=useState('');
    let [arr,setarr]=useState([]);
    let [show,setshow]=useState(false);

    let obj={
        data1:name,
        data2:subject
    }

    let handleClick =()=>
        {
            setshow(true);
            setarr([...arr,obj]);
            setsubject('');
            setname('');
        }

    return (
    <div>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setname(e?.target?.value)}  /    >
        <input type="text" placeholder="Enter subject" value={subject} onChange={(e)=>setsubject(e?.target?.value)}  /    >
            
            <button onClick={handleClick}>click</button>

        {
            show && <ShowChild mydata={arr} />
        }


    </div>          
  )
}
