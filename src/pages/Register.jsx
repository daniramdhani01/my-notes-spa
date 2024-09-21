import React, { useState } from 'react'
import useInput from '../hooks/useInput';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from "../assets/icons/spinner.svg?react"
import { register } from '../utils/network-data';
import { home } from '../utils/content';
import { useLocale } from '../contexts/LocaleContext';

function Register() {
    const navigate = useNavigate()
    const { locale } = useLocale()
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');
    const [loading, setLoading] = useState(false)

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleRegister = async()=>{
        // start validation
        if(name.length < 1) return alert(`"name" is not allowed to be empty.`)
        if(email.length < 1) return alert(`"email" is not allowed to be empty.`)
        if(!validateEmail()) return alert(`"email" must be a valid email.`)
        if(password.length < 6) return alert("Password must contain at least 6 character.")
        if(password !== confirmPassword) return alert("Password and password confirm must be same.")
        // end validation
    
        setLoading(true)
        const {error} = await register({name, email, password})
        setLoading(false)
        if(!error) navigate("/")
    }

    return (
        <section className="regsiter-page">
            <h2>{home[locale].fillFormRegister}</h2>
            <div className="input-register">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={onNameChange}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={onEmailChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={onPasswordChange}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange}/>

                <button type="button" disabled={loading} onClick={handleRegister}>Register {loading && <Spinner/>}</button>
            </div>
            <p>{home[locale].alreadyAccount} <Link to={"/"}>{home[locale].loginHere}</Link></p>
        </section>
    )
}

export default Register