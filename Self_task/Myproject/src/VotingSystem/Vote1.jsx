import React, { useState } from 'react'

import './Vote1.css'

export default function Vote1() {
  
    let [name,Setname]=useState('');
    let [bool,Setbool]=useState(false);

    let [bjp,Setbjp]=useState('');
    let [congress,Setcongress]=useState('');
    let [aap,Setaap]=useState('');


    let [array,Setarray]=useState([]);
    
    let obj=
    {
        data1:name,
        data2:bjp || congress || aap
    }
    
    let handle=()=>
        {
            Setbool(!bool);
        Setarray([...array,obj])

    }


    let [info1,setinfo1]=useState(0);



        


    return (
    <div className='maincontainer'>

        <div className='votecontainer'>


        <h2>Welcome to voting System</h2>
        <br />
        <input type="text" placeholder='Enter name' value={name} onChange={(e)=>Setname(e?.target?.value)} />

        <div className='childContainer'>


        <input type="radio" name="vote1"  value={bjp} onChange={(e)=>Setbjp(e.target.nextElementSibling.textContent)}/>
        <label htmlFor="">BJP</label>
        <br />

        <input type="radio" name="vote1" value={congress} onChange={(e)=>Setcongress(e.target.nextElementSibling.textContent)}  />
        <label htmlFor="">Congress</label>
        <br />

        <input type="radio" name="vote1" value={aap} onChange={(e)=>Setaap(e.target.nextElementSibling.textContent)} />
        <label htmlFor="">AAP</label>
        <br />

        </div>

        <button onClick={handle}>Submit</button>
        <br />        


        <div className='showdata'>

            <h3>Your voting Details</h3>
        {


            array.map((item,i)=>
                {
                    return <div key={i}>
                        <h2>{item.data1}</h2>
                        <h2>{item.data2}</h2>

                    </div>
                })
        }

     

       
        
        </div>

        </div>

    </div>
  )
}
