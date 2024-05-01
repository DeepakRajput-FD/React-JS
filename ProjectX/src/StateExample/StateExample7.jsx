import React, { useState } from 'react'

export default function StateExample7() {
    const [bgColor,SetBgColor]=useState(0);
    const colorArray=["blue",'green','yellow','purple'];
    const handlerButton=()=>
    {
        let indexArr=Math.floor(Math.random()*colorArray.length)
        console.log(indexArr);
        SetBgColor(indexArr);
    }
    return (
    <div style={{backgroundColor:colorArray[bgColor],color:'white'}}>
        <h1>hello</h1>
        <button onClick={handlerButton}>click</button>
    </div>
  )
}
