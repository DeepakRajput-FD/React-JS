import React from 'react'
import { useContext } from 'react'

import { mycontext } from './UseExample1';
export default function UseExample3() {
  
    let record=useContext(mycontext)
    
    return (
    <>UseExample3
    <h4>{record}</h4>
    </>
  )
}
