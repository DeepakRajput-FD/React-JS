import React, { useEffect, useState } from 'react'

export default function Api2() {
 
    const [newdata,setnewData]=useState([]);

    useEffect(()=>{
            FetchData();
    })

    const FetchData=async()=>{
        const oldData= await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const respond= await oldData.json();
        console.log(respond);
        setnewData(respond);
    }

    return (
    <>
    
        <table border={2} >
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    newdata.map((e,i)=>{
                        return <tr>
                            <td>{e.userId}</td>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td style={{color:e.completed ? 'blue':'red'}} >{e.completed ? 'completed':'incompleted'}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
  )
}
