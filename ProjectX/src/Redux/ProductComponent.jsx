import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Features/ApiProducts';

export default function ProductComponent() {
    
    let dispatch=useDispatch();
    
        useEffect(()=>{
            dispatch(fetchData())
        },[])
  

    let {products,pending,error}=useSelector((state)=>{
        return state.ProductKey;
    });

    if (pending) return <h1>Loading... </h1>

    if (error.length>0) return <h3>something went wrong</h3>

    return (
    <>
    
    { products.map((item,index)=>{
            return <h3 key={index} >{item.title}</h3>
        })
    }


    </>
  )
}
