import React, { useEffect, useState } from 'react'

export default function Api() {
    
    const [newData,setnewData]=useState([]);

    useEffect(()=>{
        AllData();
    },[])

    const AllData=async()=>{
        const respond=await fetch(`https://jsonplaceholder.typicode.com/users`);
       const data= await respond.json();
       console.log(data);
       setnewData(data);
    }


    return (
    <>
    
    <table border={2} >
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th colSpan={4}>address</th>
                <th colSpan={2} >Geo</th>
                <th>phone</th>
                <th>website</th>
                <th colSpan={3}>company</th>
           </tr>
        </thead>

        <tbody>

        {
            newData.map((e,i)=>{
                return <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.address.street}</td>
                    <td>{e.address.suite}</td>
                    <td>{e.address.city}</td>
                    <td>{e.address.zipcode}</td>
                    <td>{e.address.geo.lat}</td>
                    <td>{e.address.geo.lng}</td>
                    <td>{e.phone}</td>
                    <td>{e.website}</td>
                    <td>{e.company.name}</td>  
                    <td>{e.company.catchPhrase}</td>  
                    <td>{e.company.bs}</td>  
                </tr>
            })
        }

        </tbody>

    </table>

    </>
  )
}
