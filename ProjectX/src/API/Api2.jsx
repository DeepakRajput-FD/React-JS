import React, { useEffect, useState } from 'react'

export default function Api2() {
  
    let [data,setdata]=useState(null);
    let [data2,setdata2]=useState('');

    useEffect(()=>
        {
            Alldata();
            console.log("hello");
        },[data2])

        let Alldata=async()=>
        {
            let respond=await fetch(`https://jsonplaceholder.typicode.com/posts/${data2}`)
            let second=await respond.json();
            setdata(second)
        }

    return (
    <div>
            
            <input type="text" placeholder="Enter Value" onChange={(e)=>setdata2(e.target.value)} />

            {
                data 
                ?
                <div>
                    <h2>{data.id}</h2>
                    <h2>{data.title}</h2>
                    <h2>{data.body}</h2>
                </div>
                    :
                    <p>...Loading</p>
            }
    </div>
  )
}
