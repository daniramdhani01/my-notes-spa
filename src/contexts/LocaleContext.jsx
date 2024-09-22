import PropTypes from 'prop-types';
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState('en'); // en or id

    const toogleLocale = () => {
        setLocale((prev) => {
            const newLocale = prev === "en" ? "id" : "en"
            localStorage.setItem("locale",newLocale)
            return newLocale
        });
    };

    const localContextValue = useMemo(()=>({ locale, toogleLocale }),[locale])

    useEffect(()=>{
        const localeLocalStorage = localStorage.getItem("locale")
        if(["en","id"].includes(localeLocalStorage)) setLocale(localeLocalStorage)
    },[])

    return (
        <LocaleContext.Provider value={localContextValue}>
            {children}
        </LocaleContext.Provider>
    );
};

LocaleProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useLocale = () => {
    return useContext(LocaleContext);
};