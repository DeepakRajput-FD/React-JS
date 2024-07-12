import React, { useRef } from 'react'
import ChildComponentExample from './ChildComponentExample';

export default function ParentComponent() {

    let inputRef=useRef();

    let handleSubmit=()=>
        {
            inputRef.current.focus();
        }

    return (
    <div>
        <h1>parent Component</h1>
        <ChildComponentExample ref={inputRef} />
        {/* <input type="text" ref={inputRef}  /> */}
        <button onClick={handleSubmit}>click here</button>
    </div>
  )
}
