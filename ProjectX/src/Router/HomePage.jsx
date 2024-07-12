import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h1>Home page</h1>
        <Link to={'/Contact'}>
            click for contact page
        </Link>
    </div>
  )
}
