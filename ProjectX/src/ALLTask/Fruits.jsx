import React, { useState } from 'react'
import FontSize from './FontSize';

export default function Fruits() {
    let [subject,Setsubject]=useState('');
    let [Arrray,SetArray]=useState([]);

    
    let Add=()=>
    {
        SetArray([...Arrray,subject]);
        Setsubject('');
    }

    // CSS

    let Mystyle=
    {
        style1:
        {
            color:'red' ,
            fontSize:25  ,
            textTransform:'Capitalize',
            listStyle:'none',
            padding:10,
        },
        style2:
        {
            margin:10,
            padding:5,
            fontSize:20       
        },

        style3:
        {
            margin:10,
            padding:5,
            fontSize:20,
            background:'red',
            color:'white'       
        },


    }

    return (
    <div>
        <input type="text" placeholder="Enter Fruits " style={Mystyle.style2} value={subject} onChange={(e)=>Setsubject(e?.target?.value)} />

        <button onClick={Add} style={Mystyle.style3}>
            Add
        </button>

        {
           Arrray.map((e,i)=>
           {
            return <li style={Mystyle.style1} key={i}>{e}</li>
           }) 
        }

    </div>
  )
}
