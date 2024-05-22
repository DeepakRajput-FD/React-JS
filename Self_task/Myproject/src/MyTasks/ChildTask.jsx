import React from 'react'

export default function ChildTask(props) {
  return (
    <div>
        {
            props.mydata.map((item,i)=>
                {
                  return <div key={i}>
                    <h2>{item.Data1  }</h2>
                    <h3>{item.Data2}</h3>
                    <h4>{item.Data3}</h4>
                    </div>
                    
                })
        }

       
    </div>

  )
}
