import React from 'react'

export default function MyFunctionComponent5() {
    let subList=["c","Python","React Js","Mern Stack"]
    return (
    <div>

        <ul>

        {
            subList.map((e,i)=>{
                return <h2 key={i}>{e}</h2>
            })
        }
        </ul>

    </div>
  )
}
