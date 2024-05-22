import React from 'react'
import ChildComponent3 from './ChildComponent3'

export default function ParentComponent3() {
  
    let hadleClick=()=>
    {
        alert('Hii this is Alert Box')
    }

    return (
    <div>
        <ChildComponent3 myfun={hadleClick} />
        <button onClick={hadleClick}>Parent component</button>
    </div>
  )
}
