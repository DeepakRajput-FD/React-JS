import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage1() {

  let [record,setrecord]=useState([]);

  useEffect(()=>
    {
      let data=JSON.parse(localStorage.getItem('Data'));
      setrecord(data);
      console.log(data);
    },[])

    let handleEdit=(i)=>
      {
        console.log(i);
      }
    let handleDelete=(i)=>
      {
        console.log(i);

        let oldData=record;
        console.log(oldData);
        oldData.splice(i,1);

        // console.log(oldData);
        localStorage.setItem('Data',JSON.stringify(oldData))
        setrecord(oldData)
        // setrecord(oldData)
      }

  return (
    <div>
      <h3>this is home page1</h3>
      <Link to={'/Form'}>
        <button>Go to Form</button>
        </Link>

      {

      (record==null)
        ?
        <p>No Data Found</p>  
      :
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th colSpan={3}>Subject</th>
          <th>Gender</th>
          <th>Email</th>
          <th>City</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        
          {record.map((e,i)=>
          {
            return <tr key={i}>
              <td>{e.name}</td>
              <td>{e.sub1==''?'Not Added':e.sub1}</td>
              <td>{e.sub2==''?'Not Added':e.sub2}</td>
              <td>{e.sub3==''?'Not Added':e.sub3}</td>
              <td>{e.gender==''?'Not Added':e.gender}  </td>
              <td>{e.email==''?'Not Added':e.email}</td>
              <td>{e.city==''?'Not Added':e.city}</td>
              <td><button onClick={(e)=>handleEdit(i)}>Edit</button></td>
              <td><button onClick={(e)=>handleDelete(i)}>Delete</button></td>
            </tr>
          })

          }

      </tbody>
    </table>
    }
    </div>
  )
}
