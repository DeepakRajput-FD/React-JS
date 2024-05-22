import React, { useState } from 'react'

export default function Checkbox() {
  
    let [change,setchange]=useState(null);

    let [data,setdata]=useState('');

    let [record,setrecord]=useState([]);

    let obj=
    {
        name:'Deepak',
        Subject:'react js',
        city:'Ahmedabad'
    }
    
    let obj2=
    {
        name:'Arjun',
        Subject:'react js',
        city:'Junagadh'
    }
    
    let obj3=
    {
        name:'Jitendra',
        Subject:'react js',
        city:'Rajasthan'
    }


    let handleClick=(e)=>
        {
            // e.target.checked=true;
            if (e.target.checked)
            {
                console.log('hii');
                setdata('data is avlaible')
                setrecord([...record,obj])
            }
            else 
            {
                record.splice(0,1)
                setrecord([record])
                setdata('data is nothing')
                     console.log('nothing');
            }
            


        }

    return (
    <div>
        <input type="checkbox"  onChange={(Event)=>handleClick(Event)}/>

        <h2>{data}</h2>

        {
            record.map((e,i)=>
                {
                    return <div key={i} className='MyTab'>
                        <h2>{e.name}</h2>
                        <h2>{e.Subject}</h2>
                        <h2>{e.city}</h2>
                    </div>
                })
        }

    </div>
  )
}
