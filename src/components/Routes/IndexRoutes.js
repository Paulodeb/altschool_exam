import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from '../Context/AuthContext'
import Dashboard from '../Pages/Dashboard'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/HomePage/LoginPage/Login'

import NotFound from '../Pages/NotFound/NotFound'
import UserProfile from '../Pages/UserProfile'

export default function IndexRoutes() {
  return (
    <AuthContextProvider>
    <Routes>

        <Route path='/' element={<HomePage/>}>
        <Route path= 'login' element={<Login/>}/>
        
        </Route>
        <Route path='user' element={<UserProfile/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </AuthContextProvider>
  )
}
