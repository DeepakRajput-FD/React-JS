import React, { useState } from 'react'

export default function StateExample3() {
  const [name,SetName]=useState('');
    return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>SetName('My React Js')}>change</button>
    </div>
  )
}
