import React, { useState } from 'react'

export default function DaysAndMonth() {
  
    // Showing
    let [show1,Setshow1]=useState('');
    let [show2,Setshow2]=useState('');

    function mainfun(event)
     {
        let a=event.target.value;

        Setshow1(a*12);
        Setshow2((a*12)*30+5);

        // console.log(convert2*30);

    }

    return (
    <div>
        <input type="text" placeholder="Enter Years" onBlur={mainfun} />
        <input type="text" placeholder="Month into Days" value={show1}  />
        <input type="text" placeholder="Days into Months" value={show2} />
    </div>
  )
}
