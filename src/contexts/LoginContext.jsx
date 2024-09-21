import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { getAccessToken, putAccessToken } from '../utils/network-data';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const startSession = (accessToken)=>{
        if(accessToken.length > 5){
            putAccessToken(accessToken)
            setIsLogin(true);
        }
    };

    const endSession = ()=>{
        localStorage.removeItem("accessToken")
        setIsLogin(false);
    };

    const localContextValue = useMemo(()=>({ isLogin, startSession, endSession }),[isLogin])

    useEffect(() => {
        const accessToken = getAccessToken()
        if (accessToken) {
            setIsLogin(true);
        }
    }, []);

    return (
        <LoginContext.Provider value={localContextValue}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => {
    return useContext(LoginContext);
};