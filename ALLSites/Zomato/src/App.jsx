import React from 'react'
import NavBar1 from './MyComponents/NavBar1'
import Footer1 from './MyComponents/Footer1'
import SideBar1 from './MyComponents/SideBar1'
import Cards from './MyComponents/Cards'
import Header from './MyComponents/Header'

export default function App() {
  return (
    <div>
      <NavBar1 />
      <SideBar1/>
      <Cards/>
      <Header/>
      <Footer1 />
    </div>
  )
}
