import React, { useState } from 'react'

export default function FontSize() {
    let [size,SetSize]=useState(18);
    return (
    <div>
        <h1 style={{fontSize:size}}>Deepak</h1>

    <button onClick={()=>SetSize(size+1)}> + plus   </button>

    <button onClick={()=>SetSize(size-1)}> - Minus</button>

    </div>
  )
}
