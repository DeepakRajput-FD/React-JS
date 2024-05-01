import React, { useState } from 'react'

export default function App() {

  let [value1,SetValue1]=useState();
  let [value2,SetValue2]=useState();
  let [value3,SetValue3]=useState();
  
  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter Value first' onBlur={(event)=> SetValue1(event.target.value)} />
      <br />
      <input type="text" name="" id="" placeholder='Enter Value second' onBlur={(event)=> SetValue2(event.target.value)} />
      <br />
      <button onClick={()=>{ SetValue3((Number(value1)+Number(value2)))}}>click</button>
      <br />
      {/* {value1}
      {value2} */}

      {value3}

    </div>
  )
}
