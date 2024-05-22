import React, { useState } from 'react'

export default function Array3() {
  
    let [name,Setname]=useState('');
    let [subject,Setsubject]=useState('');
    let [city,Setcity]=useState('');

    // Array 
    let [records,setRecords]=useState([]);

    // pass the index from list to another function
    let [show,setshow]=useState('');

    // Add Event

    // Boolean
    let [value,Setvalue]=useState(false);
    
    let obj=
    {
        name,subject,city
    }
        let handleAdd=()=>
            {
                setRecords([...records,obj]);
                Setname('');
                Setsubject('');
                Setcity('');

                
            }

            let handleEdit=(index)=>
                {
                    let fetchOldData=records[index];
                    
                    Setname(fetchOldData.name)
                    Setsubject(fetchOldData.subject)
                    Setcity(fetchOldData.city)
                    setshow(index);
                    Setvalue(!value);
                }

                let handleDelete=(index)=>
                    {
                        let fetchOldData=records;
                         fetchOldData.splice(index,1);
                       setRecords([...fetchOldData])
                    }

                    let handleUpdate=()=>
                        {
                            let fetchOldData=records;

                            fetchOldData[show]=obj;

                            setRecords([...fetchOldData])
                            Setvalue(!value);

                            Setname('');
                            Setsubject('');
                            Setcity('');            
                        }

    return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>Setname(e.target.value)} />
        <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>Setsubject(e.target.value)} />
        <input type="text" placeholder='Enter city' value={city} onChange={(e)=>Setcity(e.target.value)} />

        {

            !value ?
            <button onClick={handleAdd}>Add</button>
            :
        <button onClick={handleUpdate}>Update</button>

        }
        <table border={1} style={{color:'red', padding:20}}>

        <thead >
            <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>City</th>
                <th colSpan={2}>Action</th>
            </tr>
        </thead>

        <tbody>
            {

                records.map((element,index)=>
                    {
                        return <tr key={index}>
                            <td>{element.name}</td>                            
                            <td>{element.subject}</td>                            
                            <td>{element.city}</td>  
                            <td><button onClick={()=>handleEdit(index)}>Edit</button></td>                          
                            <td><button onClick={()=>handleDelete(index)} >Delete</button></td>                          
                        </tr>
                    })
                }

                </tbody>
                </table>
    </div>
  )
}
