import React, { useRef } from 'react'

export default function UseRefTask() {
  
    let nameRef=useRef('');
    let surnameRef=useRef('');

   let handleSubmit=()=>
    {
        let name=nameRef.current.value;
        let surname=surnameRef.current.value;
        alert(`name=${name},surname=${surname}`);
    }

    return (
    <div>
        <input type="text" placeholder='Enter Name :' ref={nameRef} />
        <input type="text" placeholder='Enter Surname : ' ref={surnameRef} />
        <button onClick={handleSubmit}>Click Here</button>
    </div>
  )
}
