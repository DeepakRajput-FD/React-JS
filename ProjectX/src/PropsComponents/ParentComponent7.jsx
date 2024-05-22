import React from 'react'
import ChildComponent7 from './ChildComponent7'

export default function ParentComponent7() {
  
    const products=
    [
        {
            id:1,
            name:'Deepak',
            subject:'Node'
        },
        {
            id:2,
            name:'Jitendra',
            subject:'Flutter'
        },
        {
            id:3,
            name:'Arjun',
            subject:'Mern Stack'
        }
    ]

    return (
    <div>
        <ChildComponent7 products={products} />
    </div>
  )
}
