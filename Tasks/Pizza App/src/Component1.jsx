import React, { useEffect, useState } from 'react'

export default function Component1() {
 
    let [data,setdata]=useState('');
    let [img,setimg]=useState([]);

    let pizzaimage1='PizzaImage1.jpg';

    let arr=[]

    let handleAdd=()=>
        {

            for (let i = 1; i <=data; i++)
                 {
                    console.log(i);
                    
                    arr.push(pizzaimage1);
                }
                console.log(arr);
                setimg([...arr]);
                localStorage.setItem('Check',JSON.stringify([...img,arr]));
        }

        useEffect((e,i)=>
            {
                let record=JSON.parse(localStorage.getItem('Check'))||[];
                setimg(record)
            },[])

    return (
    <div>
        <input type="text" placeholder='Enter Number' onChange={(e)=>setdata(e.target.value)} />
        <button onClick={handleAdd}>click here</button>

        {
            img.map((e,i)=>
                {
                    return <div key={i}>
                        <img src={e} alt="" />
                        {/* <h4>{e}</h4> */}
                        </div>
                })
        }

    </div>
  )
}
