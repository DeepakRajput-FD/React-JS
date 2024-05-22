import React from 'react'

export default function ChildComponent5(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        
    </div>
  )
}
ChildComponent5.defaultProps={
  name:"React Js"
}
