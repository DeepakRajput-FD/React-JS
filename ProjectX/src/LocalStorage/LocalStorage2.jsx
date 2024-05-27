import React, { useEffect, useState } from 'react'
import { jsx } from 'react/jsx-runtime';

export default function LocalStorage2() {
  
    const [name,SetName]=useState('');
    const [subject,Setsubject]=useState('');
    const [city,Setcity]=useState('');
    const [student,Setstudent]=useState([]);

    const [EditIndex,SetEditIndex]=useState('');

    let [Change,setchange]=useState(false);

    // use effect bascially used for to show only one time data. we don't want to call multiple time

    useEffect(()=>
        {
            let allRecords=JSON.parse(localStorage.getItem('Students')) || []
            Setstudent(allRecords);
            console.log(allRecords);
        },[])

    let obj={ id:Date.now(),name,subject,city};
    // console.log(obj);
    const handleSubmit=(e)=>
        {
            e.preventDefault();
            Setstudent([...student,obj]);
            console.log(student);
            // the data is not directly change then we use spread opreartor
            localStorage.setItem('Students',JSON.stringify([...student,obj]));
            SetName('');
            Setsubject('');
            Setcity('');
        }

        const handleDelete=(index)=>
            {
                console.log(`Delete index -- ${index}`);
                let allRecords=student.filter((e,i)=>i !== index);
                console.log(allRecords);
                localStorage.setItem('Students',JSON.stringify(allRecords))
                Setstudent(allRecords)
            }

        const handleEdit=(i)=>
            {
                setchange(!Change)
                SetEditIndex(i);
                // let allRecords=student[i];
                SetName(student[i].name)
                Setsubject(student[i].subject)
                Setcity(student[i].city)
                console.log(i);
            }

        const handleUpdate=()=>
            {
                let olddata=student;
                olddata[EditIndex]=obj
                // olddata[EditIndex].name=name;
                // olddata[EditIndex].subject=subject;
                // olddata[EditIndex].city=city;
                // student.splice(EditIndex,1);
                // student.splice(EditIndex,1);
                Setstudent(olddata)
            localStorage.setItem('Students',JSON.stringify(olddata));
                setchange(!Change)
            }
 

    return (
    <div>
        
        <form >
        <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>SetName(e.target.value)} />
        <input type="text" value={subject} placeholder='Enter Subject' onChange={(e)=>Setsubject(e.target.value)} />
        <input type="text" value={city} placeholder='Enter City' onChange={(e)=>Setcity(e.target.value)} />
        {
            !Change
            ?
            <button type='submit' onClick={handleSubmit}>Submit</button>
            :
            <button onClick={handleUpdate}>Update</button>
        }
        </form>

       <table border={2}>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Subject</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
            </tr>
        </thead>
        <tbody>
       
        {
            student.map((e,i)=>
                {
                    return <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.subject}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>handleEdit(i)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(i)}>Delete</button></td>

                    </tr>

                })
        }

        </tbody>
       </table>

    </div>
  )
}
