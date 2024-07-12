import { Button } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, inc_by_user, increment } from './Counter';

export default function MainRedux() {
  
  const data=useSelector((state)=>{
    console.log('=========> state ',state);
    return state.counterKey.countNumber
  })

  const scoreData=useSelector((state)=>
    {
      return state.scoreKey.score;
    })

  const dispatch=useDispatch();

  // console.log(dispatch);

  const handle=()=>
    {
        dispatch(inc_by_user(100))
    }

  return (
    <>
    
    <h1>Redux</h1>

    <Button variant='contained' onClick={()=>dispatch(increment())} >Increment</Button>

    <h1>counter : {data}</h1>

    <Button variant='contained' onClick={()=>dispatch(decrement())} >Decrement</Button>

    <br />
    <br />

    <Button onClick={handle} variant='contained' >Inc By user</Button>

    <h2>
      {scoreData}
    </h2>

    </>
  )
}
