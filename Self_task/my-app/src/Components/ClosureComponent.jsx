import React from 'react'

export default function ClosureComponent() {
  
    const outerFunction=()=>{
        console.log('outer function');
        let mydata=10;
        const innerFunction=()=>{
            console.log('data ::',mydata);
            console.log('increment ::',mydata);
        }

        return innerFunction();

    }

    outerFunction();

    return (
    <>

    </>
  )
}
