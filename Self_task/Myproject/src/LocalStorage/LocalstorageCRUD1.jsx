import React, { useState } from 'react'

export default function LocalstorageCRUD1() {


    const [name,SetName]=useState('');
    const [subject,Setsubject]=useState('');
    const [city,Setcity]=useState('');
    const [student,Setstudent]=useState([]);


    let obj={name,subject,city};
    let handleSubmit=()=>
        {
            Setstudent([...student,obj]);
            console.log(student);
            

            localStorage.setItem('Students',JSON.stringify([student]));
            SetName('');
            Setsubject('');
            Setcity('');
        }

    return (
    <div>
        <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>SetName(e.target.value)} />
        <input type="text" value={subject} placeholder='Enter Subject' onChange={(e)=>Setsubject(e.target.value)} />
        <input type="text" value={city} placeholder='Enter City' onChange={(e)=>Setcity(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}
