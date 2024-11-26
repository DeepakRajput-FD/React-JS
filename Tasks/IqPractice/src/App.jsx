import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/app/Store'
import Show1 from './Show1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PromiseData from './Practice1/PromiseData'


export default function App() {
   
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PromiseData/>} ></Route>
        {/* <Route path='/' element={<Show1/>} > */}
      </Routes>
      </BrowserRouter>
    </Provider>

    </>
  )
}
