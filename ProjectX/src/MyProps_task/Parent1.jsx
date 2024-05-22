import React, { useState } from 'react'
import './parent1.css'
import ChildComponent1 from './ChildComponent1';
export default function Parent1() {
  
  let [Name,Setname]=useState('');
  let [Subject,SetSubject]=useState('');
  let [City,SetCity]=useState('');
  let [Email,SetEmail]=useState('');
  let [Gender,SetGender]=useState('');


//   Data handle state

let [Name2,Setname2]=useState('');
  let [Subject2,SetSubject2]=useState('');
  let [City2,SetCity2]=useState('');
  let [Email2,SetEmail2]=useState('');
  let [Gender2,SetGender2]=useState('');

  let [button,SetButton]=useState(false);

  let array=[];
  let obj={};

  let Add=()=>
  {

    SetButton(true)
    Setname2(Name);  
    SetSubject2(Subject);  
    SetCity2(City);  
    SetEmail2(Email);  
    SetGender2(Gender);

   
  }


  

    return (
    <div className='container2'>

    <input type="text"  placeholder="Enter Name" onBlur={(e)=>Setname(e?.target?.value)} />
    <input type="text"   placeholder="Enter Subject" onBlur={(e)=>SetSubject(e?.target?.value)} />
    <input type="text"   placeholder="Enter City" onBlur={(e)=>SetCity(e?.target?.value)} />
    <input type="email"    placeholder="Enter Email" onBlur={(e)=>SetEmail(e?.target?.value)} />
    
    <select  onChange={(e)=>SetGender(e.target.value)} >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select> 

        

        <button onClick={Add} >Send</button>

        {
            button && <ChildComponent1 Name={Name2} Subject={Subject2} City={City2} Email={Email2} Gender={Gender2} />
        }

    </div>
  )
}
