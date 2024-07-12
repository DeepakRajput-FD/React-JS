import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './Counter';

export default function ReduxComponent1() {
  
    const [name,setname]=useState('');
  
    const data=useSelector((state)=>
        {
            return state.counterKey.username;
        })

    const dispatch=useDispatch();

    const saveHandler=()=>
        {
            dispatch(updateUser(name));
            setname('');
        }

    return (
    <>
    
        <input type="text" placeholder='Enter UserName : ' value={name} onChange={(e)=>setname(e.target.value)} />

        <br />
        <Button onClick={saveHandler} variant='contained' >Save</Button>
        <br />
        {data}

    </>
  )
}
