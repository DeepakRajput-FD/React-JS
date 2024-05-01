import React, { useState } from 'react'

export default function RandomName() {
    
    let [name,SetName]=useState('');

    let arrayName=['Arjun','Jitendra','Gaurav','Deepak'];

    let handlearr=()=>
    {
        let indexarr=Math.floor(Math.random()*arrayName.length);
        SetName(arrayName[indexarr]);
        }

    return (
    <div>
        <h1>{name}</h1>
        <button onClick={handlearr}>click</button>
    </div>
  )
}
