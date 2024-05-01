import React, { useState } from 'react'

export default function ButtonBack() {

    let [colorChange,SetColor]=useState();
    let [BackChange,SetBackChange]=useState();

  let colorArr=['red','green','blue','teal','crimson'];
  let BackArr=['red','green','blue','teal','yellow','crimson'];

  let handleButton=()=>
  {
    let colorIndex=Math.floor(Math.random()*colorArr.length);
    let BackIndex=Math.floor(Math.random()*BackArr.length);

    // console.log(colorIndex);

    SetColor(colorArr[colorIndex]);
    SetBackChange(BackArr[BackIndex]);

  }

    return (
    <div>

        <button onClick={handleButton} style={{color:colorChange, backgroundColor:BackChange, fontSize:20}}>change</button>

    </div>
  )
}
