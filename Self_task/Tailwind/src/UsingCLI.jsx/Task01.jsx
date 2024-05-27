import React from 'react'
import { NavLink } from 'react-router-dom'
import AllTailwind from '../UsingCdn/AllTailwind'
import Tail01 from '../UsingCdn/Tail01'

export default function Task01() {
  return (
    <div className='bg-slate-400'>
        <div>
          <h1 className='text-red-600 text-center '>Hii My name is Deepak</h1>
          
          <li><NavLink to='./contact' >Next</NavLink></li>
          <li><NavLink to='/' >Previous</NavLink></li>

        </div>
    </div>
  )
}
