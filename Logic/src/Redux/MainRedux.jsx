import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice1';

export default function MainRedux() {
  
    // use the value from redux
    const data=useSelector((state)=>
        {
           return state.counterValue1.countNumber;
        });

        // access function from redux

    const dispatch=useDispatch();

    return (
    <>
    <h1>Hello Redux</h1>

        <h3>value from redux {data}</h3>

        <button onClick={()=>dispatch(increment())} >Increase</button>
        <br />
        <button onClick={()=>dispatch(decrement())} >Decrease</button>

    </>
  )
}
