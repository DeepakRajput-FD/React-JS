import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';

export default function Form1() {
 
  let [name,setname]=useState('');
  // checkbox
  let [sub1,setsub1]=useState('');
  let [sub2,setsub2]=useState('');
  let [sub3,setsub3]=useState('');
// for radio 
  let [gender,setGender]=useState('');

    // for city
    let [city,setcity]=useState('');

    // for email
    let [email,setemail]=useState('');

    // array
    let [data,setdata]=useState([]);

    let obj=
    {
      name:name,
      sub1:sub1,
      sub2:sub2,
      sub3:sub3,
      gender:gender,
      city:city,
      email:email
    }
    console.log(obj.value);

  useEffect(()=>
    {
        let allRecords=JSON.parse(localStorage.getItem('Data'))||[];
        console.log(allRecords);
        setdata(allRecords);
    },[])

    let handleSubmit=()=>
      {        
        setdata([...data,obj])
        localStorage.setItem('Data',JSON.stringify([...data,obj]))
        // setname('');
        // setsub1('')
        // setsub2('')
        // setsub3('')
        // setGender('');
        // setcity('')
        // setemail('')
      }


  return (
    <>

    <div className='Parent1'>

    <input type="text" placeholder='Enter Name : ' value={name} onChange={(e)=>setname(e.target.value)} />

    <label >
      select Subject
    </label>

    <div className='subject'>

      <label htmlFor="React js">
        React js
      </label>
        <input type="checkbox" name="React Js" className='checkbox' onChange={(e)=>setsub1(e.target.previousSibling.textContent)} />
    </div>

    <div className='subject'>

        <label htmlFor="React js">
        Node js
      </label>
        <input type="checkbox" name="React Js" className='checkbox' onChange={(e)=>setsub2(e.target.previousSibling.textContent)} />
    </div>

    <div className='subject'>

        <label htmlFor="React js">
        React native
      </label>
        <input type="checkbox" name="React Js" className='checkbox' onChange={(e)=>setsub3(e.target.previousSibling.textContent)} />

    </div>

    <input type="email" placeholder='Enter Email : ' value={email} onChange={(e)=>setemail(e.target.value)} />

      <label htmlFor="">
        select gender
      </label>

      <div className='gender'>
      <label htmlFor="">
        male
      </label>
      <input type="radio" name="gender" className='radio' onChange={(e)=>setGender(e.target.previousSibling.textContent)} />
      </div>


      <div className='gender'>
      <label htmlFor="">
        female
      </label>
      <input type="radio" name="gender" className='radio' onChange={(e)=>setGender(e.target.previousSibling.textContent)}  />
      </div>

      <select onChange={(e)=>setcity(e.target.value)} >
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Surat">Surat</option>
        <option value="Rajkot">Rajkot</option>
      </select>

      {gender}
      {city}

      <button onClick={handleSubmit}>Add to Form</button>

      <Link to={'/'}>
        <button>Go to HomePage</button>
      </Link>

      </div>

      </>
  )
}
