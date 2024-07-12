import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Finance1 from './Finance1'
import { store } from './store'

export default function Router3() {
  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
        <Routes>
            <Route path='/' Component={Finance1} ></Route>
        </Routes>
        </BrowserRouter>

      </Provider>
    </>
  )
}
