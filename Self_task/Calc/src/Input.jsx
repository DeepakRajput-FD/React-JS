import React, { useState } from 'react'

export default function Input() {
    let [inp,Setinp]=useState('');
    let [arr,Setarr]=useState([]); 
    let [second,Setsecond]=useState([]);
    
       let deepak=()=>
    {
        Setarr([...arr,inp]);
        // console.log(arr);
        Setinp('');
    }

    let reverse=()=>
    {
        Setsecond([...arr].reverse())
    }

    return (
    <div>
        <input type="text" placeholder="Enter Value" value={inp} onChange={(e)=>Setinp(e?.target?.value)} />
        <button onClick={deepak}>click</button>


        <ul>
            {
                arr.map((e,i)=>
                {
                    return <li key={i}>{e}</li>
                })
            }
        </ul>

        <button onClick={reverse}>Reverse</button>

        <ul>
            {
                second.map((e,i)=>
                {
                    return <li key={i}>{e}</li>
                })
            }
        </ul>


    </div>
  )
}
