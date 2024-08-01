import React from 'react'

export default function Timeout() {
  
    setTimeout(() => {
        console.log('hii this is settimeout');
    }, 500);

    const promise1=new Promise(()=>{
        console.log('hii this is promise');
    },[])

    return (
    <>
    
    </>
  )
}
