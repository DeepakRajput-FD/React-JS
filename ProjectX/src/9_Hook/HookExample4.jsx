import React, { useEffect, useState } from 'react'

export default function HookExample4() {
  
    const [data,setdata]=useState('');

    useEffect(()=>
        {
            fetchData();
        })

    const fetchData=async()=>
        {
            const response= await fetch('https://jsonplaceholder.typicode.com/posts');
            const res= await response.json();
            setdata(res);
        }


    return (
    <div>

        { data ?
            data.map((e,i)=>
                {
                    return <h2 key={i}>{e.body}</h2>
                })
                :
                <p>loading ...</p>
        }

    </div>
  )
}
