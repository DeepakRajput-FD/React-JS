import React from 'react'
import './Child1Css.css'
export default function ChildComponent1(props) {
  
    let Male='Male.webp';
    let Female='female.avif';

  
    console.log(props.array);

    return (
    <div>
      
<div className='cards'>
{
    props.Gender=='Male'
    ?
    <img src={Male} alt="" />
    :
    <img src={Female} alt="" />
}
    <h3>{props.Name}</h3>
        <h3>{props.Subject}</h3>
        <h3>{props.City}</h3>
        <h3>{props.Gender}</h3>
        <h3>{props.Email}</h3>
</div>


    </div>
  )
}
