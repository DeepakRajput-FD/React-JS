import React from 'react'
import Cards from './MyComponents/Cards'
import Footer from './MyComponents/Footer1'
import SideBar1 from './MyComponents/SideBar1'
import NavBar1 from './MyComponents/NavBar1'
import Header from './MyComponents/Header'

export default function App() {
  return (
    <div>
      <NavBar1/>
      <SideBar1/>
      <Cards/>
      <Header/>
      <Footer/>
    </div>
  )
}
