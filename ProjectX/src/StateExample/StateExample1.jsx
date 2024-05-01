import React, { useState } from 'react'

export default function StateExample1() {
  
    // I Q
    // What is state
    // what is useState?
    // use state is a hook which is return stateful value and function - using that function we can change state

    // const [property,propertyChangeMethod]
    // what is return value of use state
    // ans- use state return array value return which contain statefull value and function that can change state of variable. 
    
    // in react js class component is use for Setstate for state modification
    
    const [count,SetCount]=useState(100);//use state(initial state) or default value

        const handlerButton=()=>
        {
            console.log('Button Clicked');
            SetCount(count+1);
        }

    return (
    <div>
        Hello Deepak
        <br /> 
        <button onClick={handlerButton}>clicked</button>
        <br />
        {count}
    </div>
  )
}
