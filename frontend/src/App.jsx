import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/profile update/ProfileUpdate'

const App = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/chat' element={<Chat/>}></Route>
                <Route path='/Profile' element={<ProfileUpdate/>}></Route>
            </Routes>
        </>
    )
}


export default App