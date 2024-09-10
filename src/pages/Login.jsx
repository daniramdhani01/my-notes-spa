import React from 'react'
import useFetch from '../hooks/useFetch';

export default function Login() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  // useFetch()
  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />
    </div>
  );
}
