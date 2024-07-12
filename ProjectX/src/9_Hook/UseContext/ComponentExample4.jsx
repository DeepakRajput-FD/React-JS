import React, { useContext } from 'react'

import { mycontext1 } from './ComponentExample1' 

export default function ComponentExample4() {
  
    let record1=useContext(mycontext1);

    return (
    <div>
        
        <p>{record1.name}</p>
        <p>{record1.subject}</p>

        <p>Component4</p>
    </div>
  )
}
