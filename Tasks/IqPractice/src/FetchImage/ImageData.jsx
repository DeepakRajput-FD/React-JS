import React, { useState } from 'react'

export default function ImageData() {
  
    const [imageData,setImageData]=useState([]);

    console.log(imageData,'with console');

    console.log(imageData.length);


    const Add=()=>{
      localStorage.setItem('Mydata',JSON.stringify([imageData]));
    }

    const get=()=>{

    }

  
    return (
    <>
    
    <input type="file" multiple onChange={(e)=>setImageData(e.target.files[0])} />

        <button  onClick={Add}>Add</button>

       
    </>
  )
}
