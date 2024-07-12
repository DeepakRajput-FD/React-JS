import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import LoginPage from './LoginPage'
import DashBoard from './DashBoard'
import Guest from './Guest'
import EditPage from './EditPage'
import NewPost from './NewPost'
import ViewPost from './ViewPost'
import ChatScreen from './ChatScreen'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<RegistrationPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/Dashboard' element={<DashBoard/>} ></Route>

            <Route path='/Guest' element={<Guest/>} ></Route>
            
            <Route path='/EditPage/:uid' element={<EditPage/>} ></Route>
            <Route path='/newpost' element={<NewPost/>} ></Route>
            <Route path='/viewpost' element={<ViewPost/>} ></Route>

            <Route path='/chatscreen/:uid' element={<ChatScreen/>} ></Route>

        </Routes>
        </BrowserRouter>
    </div>
  )
}