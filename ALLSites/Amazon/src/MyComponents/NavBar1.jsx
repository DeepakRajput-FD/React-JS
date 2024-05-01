import React from 'react'

export default function NavBar1() {
    let hello=''
  return (
    <div>
        <nav>
            <ul className='parent'>
                <li>Amazon</li>
                <li><input type="text" placeholder="Surat" id="" /></li>
                <li><input type="text" placeholder="Search for restaurant, cuisine or a dish" id="" /></li>
                <li><a href="">Log in</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
        </nav>
    </div>
  )
}
