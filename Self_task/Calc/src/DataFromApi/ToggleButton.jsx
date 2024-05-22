import React, { useState } from 'react'

export default function ToggleButton() {
 
    let [change,setchange]=useState(false);

   let handleChange=()=>
    {
        setchange(!change);
        console.log('hii');
        document.body.style.background= change ? 'White' : 'black'       
    }

    return (
    <div>
        <button onClick={()=>handleChange()}>{change?'white ':'Dark'}</button>
       
    </div>
  )
}
