import React, { createContext, useState, useContext, useMemo } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('en'); // en or id

    const toogleLocale = () => {
        setLocale((prev) => prev === "en" ? "id" : "en");
    };

    const localContextValue = useMemo(()=>({ locale, toogleLocale }),[locale])

    return (
        <LocaleContext.Provider value={localContextValue}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    return useContext(LocaleContext);
};