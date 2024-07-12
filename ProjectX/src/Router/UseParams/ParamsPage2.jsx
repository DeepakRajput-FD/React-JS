import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamsPage2() {
 
    let param=useParams();

    return (
    <div>
        <h2>page 2</h2>
        <br />
        {param.id}
        <br />
        {param.name}
    </div>
  )
}
