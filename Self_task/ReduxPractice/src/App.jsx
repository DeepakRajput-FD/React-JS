import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Manager from './Manager'
import { Provider } from 'react-redux'
import { store } from './Redux/App/store'

export default function App() {
  return (
    <>
    <Provider store={store} >
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={Manager} ></Route>  
    </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}
