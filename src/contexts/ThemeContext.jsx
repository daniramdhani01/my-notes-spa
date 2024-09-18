import React, { createContext, useState, useContext, useMemo } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const localContextValue = useMemo(()=>({ theme, toggleTheme }),[theme])

    return (
        <ThemeContext.Provider value={localContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
