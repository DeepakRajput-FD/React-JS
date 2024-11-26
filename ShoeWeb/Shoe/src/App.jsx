import React from 'react'
import { Box, Container } from '@mui/material'

import MenShoes from './AllCards/MenShoes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './MyComponents/Page1'
import WomenShoes from './AllCards/WomenShoes'
import KidsShoes from './AllCards/KidsShoes'
import MainPage1 from './MyComponents/MainPage1'
import ShowInfo from './AllCards/ShowInfo'
import { Provider } from 'react-redux'
import { Store1 } from '../public/Redux/Store1'
import Carts from './MyComponents/Carts'
import SignUpPage from './Authentication/SignUpPage'
import LoginPage from './Authentication/LoginPage'
import Message from './MyComponents/Message'
import UserPage from './MyComponents/UserPage'

export default function App() {

  return (
    <Provider store={Store1} >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} ></Route>
      <Route path='/SignUp' element={<SignUpPage/>} ></Route>
      <Route path='/Homepage' element={<MainPage1/>}  ></Route>
      <Route path='/Menshoes' element={<MenShoes/>} ></Route>
      <Route path='/Womenshoes' element={<WomenShoes/>} ></Route>
      <Route path='/Kidsshoes' element={<KidsShoes/>} ></Route>
      <Route path='/showingInfo' element={<ShowInfo/>} ></Route>
      <Route path='/mycart' element={<Carts/>} ></Route>
      <Route path='/message' element={<Message/>} ></Route>
      <Route path='/userpage' element={<UserPage/>} ></Route>
    </Routes>
    </BrowserRouter>
    </Provider>

  )
}
