import React from 'react'
import Example3 from './Example3'

export default function Example2(props) {
  return (
    <div>
        <h4>this is component2</h4>
        <Example3 msg={props.msg} />
    </div>
  )
}
