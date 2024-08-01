import React, { useState } from 'react'

export default function CrudData() {
    const [data,setdata]=useState([]);
    const [name,setname]=useState('');
    const [subject,setsubject]=useState('');

    const [index,setIndex]=useState('');

    const [change,setchange]=useState(false);
    
    const obj={name,subject};

    const handleAdd=()=>{ 
        setdata([...data,obj]);
        setname('');
        setsubject('');
     }

    const handleEdit=(i)=>{
        const oldData=data[i];
        // console.log(oldData);
        setname(oldData.name);
        setsubject(oldData.subject);
        setIndex(i);
        setchange(true);
    }

    const handleDelete=(index)=>{
        const oldData=data;
       const second = oldData.filter((e,i)=>i!==index);
        setdata(second);
    }

    const handleUpdate=()=>{
        const oldData=data;
        oldData[index]=obj;
       setdata(oldData);
        setchange(false);
    }

    return (
    <>
    
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setname(e.target.value)} />
        <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>setsubject(e.target.value)} />

        {
            change
            ?
            <button onClick={handleUpdate}>Update</button>
            :
            <button onClick={handleAdd} >Submit</button>
        }


        {
            data.map((e,i)=>{
                return <div key={i} style={{display:'flex',gap:2,border:'2px solid black',margin:'20px auto',width:'20%',justifyContent:'space-between',fontFamily:'sans-serif'}} >
                    <h4>{e.name}</h4>
                    <h4>{e.subject}</h4>
                    <button onClick={()=>handleEdit(i)}>Edit</button>
                    <button onClick={()=>handleDelete(i)}>Delete</button>
                </div>
            })
        }

    </>
  )
}
