import React, { useEffect } from 'react'
import Page1 from './Page1'
import NavBar1 from './NavBar1'
import SecondBg2 from './SecondBg2'
import ThirdBg3 from './ThirdBg3'
import Card1 from './Card1'
import Footer from './Footer'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MainPage1() {
  
  const location=useLocation();
  // console.log(location.state);

  const navigate=useNavigate('');

  useEffect(()=>{
    (location.state)?'':navigate('/message');
  },[])

  
  return (
    <>
    <Page1/>
    <NavBar1/>
        <SecondBg2/>
        <ThirdBg3/>
        <Card1/>
        <Footer/>

    </>
  )
}
