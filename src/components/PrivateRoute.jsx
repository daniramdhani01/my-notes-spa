import React from 'react'
import { useLogin } from '../contexts/LoginContext'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const { isLogin } = useLogin()

    if(!isLogin) return <Navigate to="/" replace/>
    return children
}

export default PrivateRoute