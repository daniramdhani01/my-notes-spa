import React from 'react'
import { useLogin } from '../contexts/LoginContext'
import { Navigate } from 'react-router-dom'
import { getAccessToken } from '../utils/network-data'
import PropTypes from 'prop-types';

function PrivateRoute({children}) {
    const { isLogin } = useLogin()

    if(!isLogin && !getAccessToken()) return <Navigate to="/" replace/>
    return children
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute