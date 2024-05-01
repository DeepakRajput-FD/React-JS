import React, { useState } from 'react'

export default function StateExample2() {
    let [count,SetCount]=useState(0);
    return (
    <div>
        <button onClick={()=>SetCount(count+1)}>
            Increase 
        </button>
        <button onClick={()=>SetCount(count-1)}>Decrease </button>
        {count}
    </div>
  )
}
