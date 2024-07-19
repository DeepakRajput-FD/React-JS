import React, { useState } from 'react'

export default function Page1() {
  
    const [name,setname]=useState('');
    const [subject,setsubject]=useState('');
    const [city,setcity]=useState('');

    const [data,setdata]=useState([]);

    const [dataId,setdataId]=useState('');

    const [change,setchange]=useState(false);

    const obj={
        name,subject,city
    }

    const handleAdd=()=>{
        setdata([...data,obj]);
        setname('');
        setsubject('');
        setcity('');
    }

    const handleEdit=(i)=>{
        const oldData=data[i];
        setname(oldData.name);
        setsubject(oldData.subject);
        setcity(oldData.city);
        setdataId(i);
        setchange(!change)
    }

    const handleDelete=(i)=>{
        const oldData=data;
       const previousData= oldData.filter((e,index)=>i!==index);
        console.log(previousData);
        setdata(previousData)
    }

    const handleUpdate=()=>{
    //   let oldData=data;
      data[dataId]=obj;
    //   console.log(oldData);
      setdata(data);
      setchange(!change)
    }

    return (
    <>
    
    <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setname(e.target.value)} />
    <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>setsubject(e.target.value)} />
    <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setcity(e.target.value)} />

        {
            change
            ?
            <button onClick={handleUpdate} >Update</button>
            :
        <button onClick={handleAdd} >Add</button>
        }


        <table border={2} >
            <thead>
                <tr>
                    <th>name</th>
                    <th>Subject</th>
                    <th>City</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e,i)=>{
                        return <tr key={i} >
                            <td>{e.name}</td>
                            <td>{e.subject}</td>
                            <td>{e.city}</td>
                            <td><button onClick={()=>handleEdit(i)} >Edit</button></td>
                            <td><button onClick={()=>handleDelete(i)} >Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
  )
}
