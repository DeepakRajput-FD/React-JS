import React, { useState } from 'react'

export default function Crud1() {

    let  [name,Setname]=useState('');
    let  [subject,Setsubject]=useState('');
    let  [city,Setcity]=useState('');

    let [change,Setchange]=useState(false);

    let [array,Setarray]=useState([]);

    let [num,Setnum]=useState('');

    let handleClick=()=>
        {
            let obj={name,subject,city}

            Setarray([...array,obj]);

            Setname('');
            Setsubject('');
            Setcity('');


        }

        let handleDelete=(index)=>
            {
                console.log(index);

                let oldData=array;

                oldData.splice(index,1);

                Setarray([...oldData])

            }

            let handleEdit=(index)=>
                {

                    Setchange(!change)

                    console.log(index);

                    let oldData=array[index];

                    console.log(oldData);

                    Setname(oldData.name)
                    Setsubject(oldData.subject)
                    Setcity(oldData.city)

                    Setnum(index)

                    // Setarray([...oldData])
                }

                let handleUpdate=()=>
                    {
                        let oldData=array;

                        oldData[num].name=name;
                        oldData[num].subject=subject;
                        oldData[num].city=city;

                        Setarray([...oldData])

                    }
              



    return (
    <div>

        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>Setname(e.target.value)} />
        <input type="text" placeholder='Enter Subject' value={subject} onChange={(e)=>Setsubject(e.target.value)} />
        <input type="text" placeholder='Enter City' value={city} onChange={(e)=>Setcity(e.target.value)} />

        {
            change 
            ?
            <button onClick={handleUpdate}>Update</button>
            :
            <button onClick={handleClick}>click</button>
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
            array.map((item,index)=>
                {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.subject}</td>
                        <td>{item.city}</td>
                        <th><button onClick={()=>handleEdit(index)} >Edit</button></th>
                        <th><button onClick={()=>handleDelete(index)}>Delete</button></th>
                    </tr>
                })
        }
        </tbody>

       </table>

    </div>
  )
}
