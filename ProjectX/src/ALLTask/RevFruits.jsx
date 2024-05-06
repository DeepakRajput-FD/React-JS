import React, { useState } from 'react'

export default function RevFruits() {
  
    let [fruit,Setfruit]=useState('');
    let [array,setarray]=useState([]);

    let [third,Setthird]=useState([]);

    let one=()=>
    {
        setarray([...array,fruit]);
        // console.log(setarray);
        Setfruit('');
    }

    let rev=()=>
    {
       
            // console.log(array[i]);
             Setthird([...array].reverse());
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
        <input type="text" placeholder="Enter Fruit name" style={Mystyle.style2} value={fruit} onChange={(e)=>Setfruit(e?.target?.value)} />
        <button onClick={one} style={Mystyle.style3}>Add</button>

        {
            array.map((e,i)=>
            {
               return <li key={i} style={Mystyle.style1}>{e}</li>
            })
        }

    {
        
            third.map((e,i)=>
            {
               return <h1 key={i}>{e}</h1>
            })
        }

        <button onClick={rev} style={Mystyle.style3}>Reverse</button>


    </div>
  )
}
