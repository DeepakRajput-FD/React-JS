import React from 'react'

export default function Child1Components(props) {
  return (
    <div>
        <h1>Name : {props.name}</h1>
        <h2>Surname : {props.surname}</h2>
    </div>
  )
}
