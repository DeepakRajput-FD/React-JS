import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {FetchData} from './Features/Slice1'

export default function MainData() {
  
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(FetchData())
  },[])

  const data1=useSelector((state,action)=>{
    return state.AllData.Data;
  })

  const data2=useSelector((state,action)=>{
    return state.AllData.isLoading;
  })

  if (data2==false)
     {
    return <h2>waiting for sometime</h2>
    }


    return (
    <>
    {data1.map((e,i)=>{
      return  <div key={i}>
        <h1>{e.title}</h1>
      </div>
    })}

    </>
  )
}
