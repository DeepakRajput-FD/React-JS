import React, { useState } from 'react'

export default function Task1() {
  
    let [name,Setname]=useState('');
    let [filtername,Setfiltername]=useState('');

    let [array,setarray]=useState([]);

    let check=()=>
        {
            let obj={name};
            
            setarray([...array,obj])

            Setname('');
        }

        let filterdata=()=>
            {

               let oldData =array.filter((element,index)=>element.name==filtername)
                console.log(oldData);

                setarray([...oldData])

            }

    return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>Setname(e.target.value)} />

        <input type="text" placeholder='Enter name you not want filter' onChange={(e)=>Setfiltername(e.target.value)} />
        
        <button onClick={check}>ADD</button>

        <button onClick={filterdata}>Filter</button>

        {
            array.map((e,i)=>
                {
                    return <h2 key={i}>{e.name}</h2>
                })
        }

    </div>
  )
}
