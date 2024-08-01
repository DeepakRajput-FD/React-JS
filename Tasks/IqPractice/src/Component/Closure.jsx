import React from 'react'

export default function Closure() {
  
    const outer=()=>{

        const inner=()=>{
            console.log(x);
        }
        const x=10;
       return inner();
    }

    outer();

    return (
    <>
    </>
  )
}
