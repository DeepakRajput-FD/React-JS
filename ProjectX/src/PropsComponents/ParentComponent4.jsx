import React, { useState } from 'react'
import ChildComponent4 from './ChildComponent4';

export default function parentComponent4() {
    let [isLogin,SetLogin]=useState(false);
    let [msg,Setmsg]=useState('My react msg');

    let handleclick=()=>
    {
        console.log('clicked');
        console.log(isLogin);
        SetLogin(!isLogin)
    }

    return (
    <div>
        <button onClick={handleclick}>click here</button>
        
        {
            isLogin && <ChildComponent4  msg={msg} /> 
        }
    </div>
  )
}
