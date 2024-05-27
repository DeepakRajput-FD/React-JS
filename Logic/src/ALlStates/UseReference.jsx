import React, { useRef } from 'react'

export default function UseReference() {
  
    let data1=useRef(0)

    
    let myfun=()=>
        {
            console.log(data1.current=data1.current+1);

        }

    return (
    <div>
        <button onClick={myfun}>click</button>
    </div>
  )
}
