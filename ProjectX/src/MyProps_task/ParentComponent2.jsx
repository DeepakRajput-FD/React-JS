import React, { useState } from 'react'
import TaskChildComponent2 from './TaskChildComponent2';

export default function ParentComponent2() {
  
  let [name,setname]=useState('');
  let [subname,setsubname]=useState('')
  let [surname,setsurname]=useState('');

  let [Change,Setchange]=useState(false);

  let arr=[];

  let obj=
  {
    data1:name,
    data2:surname,
    data3:subname
  }
  arr.push(obj);

  let handle=()=>
    {
      Setchange(!Change);
    }


  return (
    <div>
      
      <input type="text" placeholder='Enter Name' onBlur={(e)=>setname(e?.target?.value)} />
      <input type="text" placeholder='Enter subject' onBlur={(e)=>setsubname(e?.target?.value)} />
      <input type="text" placeholder='Enter surname' onBlur={(e)=>setsurname(e?.target?.value)} />

    <button onClick={handle}>click</button>

    {
      Change && <TaskChildComponent2 mydata={arr} />
    }

    </div>
  )
}
{/* <h2 key={i}>{e.data1 + e.data2 + e.data3 }</h2> */}