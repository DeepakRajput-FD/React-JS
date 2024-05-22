import React from 'react'

export default function TaskChildComponent2(props) {
  return (
    <div>
      {props.mydata.map((item,i)=>
        {
          return <div key={i}>
            <h2>{item.data1}</h2>
            <h2>{item.data2}</h2>
            <h2>{item.data3}</h2>
          </div>
        })}
    </div>
  )
}
