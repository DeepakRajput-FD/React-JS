import React, { useState } from 'react'

export default function Array2() {
  
    let [name,Setname]=useState('');
    let [Subject,Setsubject]=useState('');
    let [city,Setcity]=useState('');

    let [num,Setnum]=useState('');

    let  [array,setarray]=useState([]);

    let [show,Setshow]=useState(false);

   let handleAdd=()=>
    {
        let obj={name,Subject,city}
        setarray([...array,obj])
        Setname('')
        Setsubject('')
        Setcity('');
    }

    
    let handleEdit=(index)=>
        {
            // console.log('Index value : ',index);
            let reference1=array[index];
            Setname(reference1.name);
            Setsubject(reference1.Subject)
            Setcity(reference1.city)
            
            // Set the index
            Setnum(index);
            // console.log('num value : ',num);
            Setshow(!show)


        }
        let update=()=>
            {
                console.log('num value in update section: ',num);

                let secondArr=array;
                secondArr[num].name=name;
                secondArr[num].Subject=Subject;
                secondArr[num].city=city;
                console.log('Array 2 ',secondArr);

                setarray([...secondArr])
                Setname('');
                Setsubject('');
                Setcity5('');
                Setshow(!show)
            }

            let handleDelete=(index)=>
                {
                    let olddata=array;
                    olddata.splice(index,1);
                    setarray([...olddata])
                    
                }


    return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>Setname(e.target.value)} />
        <input type="text" placeholder='Enter Subject' value={Subject} onChange={(e)=>Setsubject(e.target.value)} />
        <input type="text" placeholder='Enter City' value={city} onChange={(e)=>Setcity(e.target.value)} />

        {
            !show ?
            <button onClick={handleAdd}>click</button>
            :
        <button onClick={update}>update</button>
        }

        <table>

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
                        <td>{item.Subject}</td>
                        <td  >{item.city}</td>
                        <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                        
                    </tr>
                })
            }

            </tbody>

            </table>
    </div>
  )
}
