import React, { useState } from 'react'

export default function Factorial() {
    let [show,Setshow]=useState('');

    function one(event)
     {
       let a= Number(event.target.value);
       let value1=1;
           for (let i = 1; i <=a; i++) 
           {
            value1=value1*i;
            Setshow(value1)
        }
    }

    return (
    <div>
        <input type="text" placeholder="Enter Fact Value" onChange={one} />
        <h2>{show}</h2>

    </div>
  )
}
