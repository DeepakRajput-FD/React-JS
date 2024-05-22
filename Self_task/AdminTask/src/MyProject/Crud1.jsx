import React, { useState } from 'react'
import Tab from './Tab';

export default function Crud1() {
  
    let [name,Setname]=useState('');
    let [Subject,Setsubject]=useState('');

    let [prio,setprio]=useState('');

    let [num,Setnum]=useState('');

    let  [record,setrecord]=useState([]);

    let [show,Setshow]=useState(false);
    
    let [userId,SetuserId]=useState(1);

    let [secondArr,setsecondarr]=useState([]);


    let obj={userId,name,Subject,prio}     
   let handleAdd=()=>
    {
        setrecord([...record,obj])
        Setname('')
        Setsubject('')
        SetuserId(userId+1)
    }

    
    let handleEdit=(index)=>
        {
            // console.log('Index value : ',index);
            let reference1=record[index];
            Setname(reference1.name);
            Setsubject(reference1.Subject)
            
            // Set the index
            Setnum(index);
            // console.log('num value : ',num);
            Setshow(!show)


        }
        let update=()=>
            {
                console.log('num value in update section: ',num);

                let oldData=record;

                oldData[num]=obj;

                setrecord([...oldData]);

                
                Setname('');
                Setsubject('');
                Setcity('');
                Setshow(!show)
            }

            let handleDelete=(index)=>
                {
                    let olddata=record;
                    olddata.splice(index,1);
                    setrecord([...olddata])
                    
                }

            let handleChecked=(Event,i)=>
                {
                  let check= Event.target;
                 
                        console.log(check);
                        let oldData=record;
                        let CompletedTask=oldData[i];

                        // console.log(other);
                        
                        setsecondarr([...secondArr,CompletedTask]);
                        
                        setrecord([...oldData]);
                        // console.log('hii');
                     
                    if (!check.checked)
                     {

                        console.log(secondArr[i]);
                        
                        secondArr.splice(i,1)

                        setsecondarr([secondArr])

                        console.log('nothing');

                        //  setsecondarr('');
                    }
                    
                }
                
                
                return (
                    <div>

        <div className='myINput'>

        <input type="text" placeholder='Enter Task Title' value={name} onChange={(e)=>Setname(e.target.value)} />
        <input type="text" placeholder='Enter Task Description' value={Subject} onChange={(e)=>Setsubject(e.target.value)} />

        <select onChange={(e)=>setprio(e.target.value)} >
         <option >Select Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>


        {
            !show ?
            <button onClick={handleAdd}>click</button>
            :
            <button onClick={update}>update</button>
        }
        

        </div>

        <table>

        <thead>
            <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th colSpan={2}>Action</th>
                <th >Mark As Completed</th>
            </tr>
        </thead>

        <tbody>

        {
            record.map((item,index)=>
                {
                    return <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.name}</td>
                        <td>{item.Subject}</td>
                        <td>{item.prio}</td>
                        <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
                        <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                        <td><input type="checkbox" className='checkbox' onChange={(Event)=>handleChecked(Event,index)} /></td>
                    </tr>
                })
            }

            </tbody>

            </table>

            <Tab data1={secondArr} data2={record}  />

    </div>
  )
}
