import React, { useState } from 'react'

export default function MonthDays() {
  
    let [show,Setshow]=useState('');

    function one(e)
     {
        let a=e.target.value;
        Setshow(a*30);
    }

    return (
    <div>
        <input type="text" placeholder="Enter Months" onBlur={one} />
        <h2>{show}</h2>
    </div>
  )
}
