import React, { useState } from 'react'
import ChildTask from './ChildTask';

export default function Task2() {
  
    let [name,setname]=useState('');
    let [subname,setsubname]=useState('');
    let [surname,setsurname]=useState('');
    let [Show,Setshow]=useState(false);

    let [name2,setname2]=useState('');
    let [surname2,setsurname2]=useState('');
    let [subname2,setsubname2]=useState('');
    
    let arr=[];
    
    let handle=()=>
        {
            setname2(name)
            setsubname2(subname)
            setsurname2(surname)
            Setshow(!Show);
        }
        
        let obj=
        {
            Data1:name2,
            Data2:surname2,
            Data3:subname2
        }
        arr.push(obj);

    return (
    <div>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setname(e?.target?.value)}  />
        <br />
        <input type="text" placeholder='Enter surname'  onChange={(e)=>setsurname(e?.target?.value)} />
        <br />
        
        <input type="text" placeholder='Enter subname'  onChange={(e)=>setsubname(e?.target?.value)} />
        <br />
        <br />

        <button onClick={handle}>click</button>

        {
            Show && arr.map((e,i)=>
                {
                    return <h2 key={i}>{e.Data1}</h2>
                })
        }

        


    </div>
  )
}
