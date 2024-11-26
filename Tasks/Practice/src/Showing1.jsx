import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProductData } from './Redux/Features/ProductData';

export default function Showing1() {

    const dispatch=useDispatch();
    
    useEffect(()=>{
        console.log('hii');
        dispatch(FetchProductData())
    },[])

    const {product,pending,error}=useSelector((state)=>{
        console.log("============== sssss>",state.ProductKey);
        return state.ProductKey;
    })

    console.log(product);
    
    if (pending) return <h2>loading....</h2>
    
    if (error) return <h2>error....</h2>

    return (
    <>

    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
     {
        product.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
                <td>{e.completed ? 'completed':'not completed'}</td>
            </tr>
        })
      }  
        </tbody>
    </table>


    </>
  )
}
