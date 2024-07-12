import React from 'react'
import { Link } from 'react-router-dom'

export default function ParamsPage1() {
  return (
    <div>
        <h2>page 1 use params</h2>
        <Link to={'/paramsPage2/1'}><button>id send to params page 2</button></Link>
        <br />
        <br />
        <Link to={'/paramsPage2/2'}><button>id send to params page 2</button></Link>
        <br />
        <br />
        {/* for name and id */}
        <Link to={'/paramsPage2/101/ReactJS'}><button>id and name send to params page 2</button></Link>
    </div>
  )
}
