import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'
import NotFound from '../NotFound/NotFound'

function Logout() {
    const {logout} = useAuth()
    let navigate = useNavigate()
  return {logout}  (
    <>
    
    </>
  ) 
}

export default Logout