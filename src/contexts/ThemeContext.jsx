import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem("theme", newTheme)
            return newTheme
        });
    };

    const localContextValue = useMemo(()=>({ theme, toggleTheme }),[theme])

    useEffect(()=>{
        const themeLocalStorage = localStorage.getItem("theme")
        if(["light","dark"].includes(themeLocalStorage)) setTheme(themeLocalStorage)
    },[])

    return (
        <ThemeContext.Provider value={localContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
