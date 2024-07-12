import React, { useContext } from 'react'
import { context1 } from './USeEffectEx1'

export default function Example2() {
  
    let context=useContext(context1);

    return (
    <div>
        hii this is second Component
        <p>{context}</p>
    </div>
  )
}
