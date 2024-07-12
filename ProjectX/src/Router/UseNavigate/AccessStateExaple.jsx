import React from 'react'
import { useLocation } from 'react-router-dom'

export default function AccessStateExaple() {
  
    const Location =useLocation();

    const {name}=Location.state

    return (
    <div>
        <h2>Msg from state</h2>
        <h3>Data from first component {name}</h3>
    </div>
  )
}
