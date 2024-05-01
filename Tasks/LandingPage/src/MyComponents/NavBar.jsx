import React from 'react'
import './MyStyle1.css'
export default function NavBar() {
  return (
    <div>

<nav>

<ul className='mainList'>

<ul>
    <li>
    <img src={"shiva.png"} alt="" id='img1' />
    </li>
</ul>

<ul className='list2'>
    <li>Home</li>
    <li>About Us</li>
    <li>Services</li>
    <li>Pages</li>
    <li>Blog</li>
    <li>Contact Us</li>
</ul>
<ul className='list3'>
    <li><i class="fa-solid fa-magnifying-glass"></i></li>
    <li>
        <button><i class="fa-brands fa-phoenix-framework"></i></button>
        </li>
        
</ul>
</ul>

</nav>

    </div>
  )
}
