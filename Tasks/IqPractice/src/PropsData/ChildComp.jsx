import React from 'react'

export default function ChildComp({myfun}) {
  
    const run=()=>{
        myfun('Hii this is deepak')
    }

    return (
    <>
    
    <button onClick={run} >click</button>

    </>
  )
}
