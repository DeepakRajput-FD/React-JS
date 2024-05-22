import React, { useEffect, useState } from "react";

export default function UseEffect() {
  let [counter, Setcounter] = useState(0);
  let [data, setData] = useState("");

  let [width,setWidth]=useState('');

  useEffect(()=>
    {
      document.title=counter
    },)
    
    let handleChange = () => {
      Setcounter(counter + 1);
    };
    
    let handleWidth=()=>
      {
        setWidth(window.Screen);
        console.log('hii');
      }


  return (
    <div onResize={handleWidth}>
      {counter}
      <button onClick={handleChange}>click</button>
      {width}
    </div>
  );
}
