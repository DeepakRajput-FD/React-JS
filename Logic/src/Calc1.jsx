import React, { useState } from 'react'

export default function () {

    let [Count,setCount]=useState(0);
    function fun1()
     {
      //  console.log('setcount',setCount);
       if (Count==20)
       {
         Count=20;
         Count=useState(20);
        }
        setCount(Count+1);
      }
  
     function fun2()
      {
        if (Count<1)
         {
          Count=useState(0)
        }
        setCount(Count-1)
      }

    return (
    <div>
         <button onClick={fun1}>Increase</button>
        <br />
      <button onClick={fun2}>Decrease</button>
      <br />
      {Count}
    </div>
  )
}
