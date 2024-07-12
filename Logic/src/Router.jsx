import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRedux from './Redux/MainRedux'
import { store } from './Redux/Store'

export default function Router() {
  return (
    <>

    <Provider store={store} >
        <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainRedux} ></Route>
        </Routes>
        </BrowserRouter>
    </Provider>

    </>
  )
}
