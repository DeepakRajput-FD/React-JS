import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeUseLocation() {
  return (
    <div>
    <Link to={'/UseLocation'}>
        <button>CLick to use Location Page</button>
        </Link>      
    </div>
  )
}
