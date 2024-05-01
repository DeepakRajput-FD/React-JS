import React from 'react'

export default function Component3() {
    let subArray=['c','c++','JAVASCRIPT','jquery'];
    let arr2=[];
    return (
    <div>
        {/* ARRAY */}

        {/* key is unique if have much more same element then you want to set unique key */}

        {
            subArray.map((e,i)=>{
                return <h2 key={i}>{e}</h2>
            })
        }        

        {
          arr2= subArray.map((e,i)=>
           {
            return e+' '+e;
           })
        }

        {
            
            console.log(arr2)
        }

    </div>
  )
}
