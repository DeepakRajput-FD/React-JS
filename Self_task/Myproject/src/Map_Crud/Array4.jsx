import React, { useState } from 'react'

export default function Array4() {
  
    let [name,setname]=useState('');
    let [subject,setsubject]=useState('');
    let [city,setcity]=useState('');

    let [record,setrecord]=useState([]);

    let [index,setindex]=useState('');

    let [bool,setbool]=useState(false);
    
    let obj={name,subject,city}

    let handleSubmit=()=>
        {

            setrecord([...record,obj])
            setname('');
            setsubject('');
            setcity('');


        }

       let handleDelte=(i)=>
        {
            let oldData=record;
            oldData.splice(i,1);
            setrecord([...oldData]);
        }

        let handleEdit=(i)=>
            {
               let oldData=record[i];
                // console.log(oldData);
               setname(oldData.name)
               setsubject(oldData.subject)
               setcity(oldData.city)

               setindex(i);
                setbool(true)

               
            }

            let handleUpdate=()=>
                {
                    let oldData=record;
                    oldData[index]=obj;
                    setrecord([...oldData])

                    setbool(false)

                    setname('')
                    setsubject('')
                    setcity('')    


                }

    return (
    
    <div>
        <div>
        
        <input type="text" placeholder='Enter Name : ' value={name} onChange={(e)=>setname(e.target.value)}  />
        <input type="text" placeholder='Enter Subject : ' value={subject} onChange={(e)=>setsubject(e.target.value)} />
        <input type="text" placeholder='Enter City : ' value={city} onChange={(e)=>setcity(e.target.value)}  />
        
        {
            !bool ?
            <button onClick={handleSubmit}>Add</button>
            :
        <button onClick={handleUpdate}>update</button>
        }



        </div>

        {
            record.map((e,i)=>
                {
                    return <div key={i}>
                    <h2>{e.name}</h2>
                    <h2>{e.subject}</h2>
                    <h2>{e.city}</h2>

                    <button onClick={()=>handleEdit(i)}>Edit</button>
                    <button onClick={()=>handleDelte(i)}>delete</button>

                    </div>
                })
        }

    </div>
  )
}
