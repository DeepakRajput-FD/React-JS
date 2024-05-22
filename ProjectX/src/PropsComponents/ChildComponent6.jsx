import React from 'react'

export default function ChildComponent6(props) {
  return (
    <div>
        {
            props.myproduct.map((e,i)=>
                {
                 return   <h2 key={i}>{e}</h2>
                })
        }
    </div>
  )
}
