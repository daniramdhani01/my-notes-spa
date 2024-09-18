import React from 'react'
import useInput from '../hooks/useInput';
import { useLocale } from '../contexts/LocaleContext';
import { home } from '../utils/content';
import { Link } from 'react-router-dom';

export default function Login() {
  const { locale } = useLocale()
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <section className="login-page">
      <h2>{home[locale].loginTitle}</h2>
      <div className="input-login">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <button type="button">Login</button>
      </div>
      <p>{home[locale].dontHaveAnAccount} <Link href="/register">{home[locale].registerHere}</Link></p>
    </section>
  );
}
