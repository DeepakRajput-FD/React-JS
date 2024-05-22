import React, { useState } from 'react'

// LOcal Storage Crud

export default function LocalStorage() {
 
    // Use States

    let [name,setName]=useState('');
    let [subject,setsubject]=useState('');
    let [city,setcity]=useState('');

    let [record,Setrecord]=useState([]);

    let [indexV,setIndexV]=useState('');

    // boolean value

    let [show,Setshow]=useState(false);

    // events

    let obj=
    {
        name:name,
        subject:subject,
        city:city
    }

    let handleSubmit=()=>
        {
            Setrecord([...record,obj]);

            setName('');
            setsubject('');
            setcity('');
        }

        // pass the data to localStorage
        //create a variable and pass the array
        let data=record;
        localStorage.setItem('MyData',JSON.stringify(data));


        // Fetching Data from localStorage
        let allData= localStorage.getItem('MyData')


        // And COnverting into json
        let second =JSON.parse(allData);

        // Operation Buttons

        let handlEdit=(index)=>
            {
                let fetchold=second[index];
                console.log(fetchold);

                setName(fetchold.name)
                setsubject(fetchold.subject)
                setcity(fetchold.city)
                setIndexV(index);
                Setshow(!show);
            }

            let handleDelete=(index)=>
                {
                    let fetchold=second;
                    // console.log(fetchold.splice(index,1));
                    second.splice(index,1);

                    Setrecord([...fetchold])
                }

            let handleUpdate=()=>
                {
                    let fetchold=second;

                    // object value is passed to  fetchold's indexv

                    fetchold[indexV]=obj;
                    Setrecord([...fetchold])

                    Setshow(!show)

                    setName('');
                    setsubject('');
                    setcity('');

                }

        return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>setsubject(e.target.value)} />
        <input type="text" placeholder='Enter City' value={city} onChange={(e)=>setcity(e.target.value)} />

            {

                !show 
                ?
                <button onClick={handleSubmit}>Submit</button>
                :
            <button onClick={handleUpdate}>update</button>

            }
        
        <table border={1}>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>City</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>

            <tbody>

            {
            // print the data using localstorage
            second.map((element,i)=>
                {
                    return <tr key={i}>
                        <td>{element.name}</td>
                        <td>{element.subject}</td>
                        <td>{element.city}</td>
                        <td><button onClick={()=>handlEdit(i)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(i)}>Delete</button></td>
                    </tr>
                })
            
            }

            </tbody>

        </table>


    </div>
  )
}
