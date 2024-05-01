import React, { useState } from 'react'

export default function StateExample4() {
    const [bgColor,SetBgColor]=useState('white');
    
    return (
    <div style={{background:bgColor}}>
        <h1>Hello</h1>
        <button onClick={()=>SetBgColor('green')}>change color</button>
    </div>
  )
}
