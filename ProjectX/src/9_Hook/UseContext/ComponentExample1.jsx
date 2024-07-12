import React, { createContext, useState } from 'react'
import ComponentExample4 from './ComponentExample4';

export let mycontext1=createContext();

export default function ComponentExample1() {

    let [name,setname]=useState('');
    let [subject,setsubject]=useState('');

    return (
    <div>

        <input type="text" onChange={(e)=>setname(e.target.value)} />
        <input type="text" onChange={(e)=>setsubject(e.target.value)} />

        <p>This is Component1</p>

        <mycontext1.Provider value={{name,subject}}>
        <ComponentExample4/>
        </mycontext1.Provider>

    </div>
  )
}
