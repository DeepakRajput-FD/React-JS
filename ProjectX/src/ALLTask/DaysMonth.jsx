import React, { useState } from 'react'

export default function DaysMonth() {

    let [show,Setshow]=useState('');

    function one(event)
     {
        let a= event.target.value;
     
        Setshow(a/30);

    }
  return (
    <div>
        <input type="text" placeholder="Enter Days to Month" onBlur={one} />
        <h2>{show}</h2>
    </div>
  )
}
