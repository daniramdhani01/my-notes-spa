import React, { useState } from 'react'
import useInput from '../hooks/useInput';
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';
import { Link } from 'react-router-dom';
import Spinner from "../assets/icons/spinner.svg?react"
import { login } from '../utils/network-data';
import { useLogin } from '../contexts/LoginContext';

export default function Login() {
  const { locale } = useLocale()
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [loading, setLoading] = useState(false)
  const {startSession} = useLogin()

  const handleLogin = async ()=>{
    setLoading(true)
    const { data } = await login({email, password})
    if(data){
      startSession(data.accessToken)
    }
    setLoading(false)
  }

  return (
    <section className="login-page">
      <h2>{home[locale].loginTitle}</h2>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <button type="button" disabled={loading} onClick={handleLogin}>Login {loading && <Spinner/>}</button>
      </div>
      <p>{home[locale].dontHaveAnAccount} <Link to="/register">{home[locale].registerHere}</Link></p>
    </section>
  );
}
