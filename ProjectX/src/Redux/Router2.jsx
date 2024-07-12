import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRedux from './MainRedux'
import { Provider } from 'react-redux'
import { store } from './store'
import ReduxComponent1 from './ReduxComponent1'
import TodoComponent from './Todo/TodoComponent'
import ProductComponent from './ProductComponent'
export default function Router2() {
  return (
    <>
    {/* it is the component of redux */}
    <Provider store={store}  >
    <BrowserRouter>
    <Routes>
        {/* <Route path='/' Component={ReduxComponent1} ></Route> */}
        <Route path='/' Component={ProductComponent} ></Route>
    </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}
