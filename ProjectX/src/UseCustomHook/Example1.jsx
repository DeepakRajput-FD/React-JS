import React from 'react'
import UseCustomHook from './UseCustomHook'

export default function Example1() {
  
    const [count,addCount,removeCount]=UseCustomHook();

    return (
    <>

    {/* {count<0 ? 0 :count} */}

        {count}

    <button onClick={addCount} >Count + 1</button>

    <button onClick={removeCount} >Count -1</button>

    </>
  )
}
