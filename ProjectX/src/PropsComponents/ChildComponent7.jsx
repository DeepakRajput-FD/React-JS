import React from 'react'

export default function ChildComponent7(props) {
  return (
    <div>
        {
            props.products.map((item,i)=>
                {
                    return <div key={i}>
                        <h2>{item.id}</h2>
                        <h2>{item.name}</h2>
                        <h2>{item.subject}</h2>
                    </div>
                })
        }
    </div>
  )
}
