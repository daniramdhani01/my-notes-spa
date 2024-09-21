import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocale } from '../contexts/LocaleContext'
import { home } from '../utils/content'
import Sun from "../assets/icons/sun.svg?react"
import Moon from "../assets/icons/moon.svg?react"
import Translate from "../assets/icons/translate.svg?react"
import Logout from "../assets/icons/logout.svg?react"
import { useTheme } from '../contexts/ThemeContext'
import { useLogin } from '../contexts/LoginContext'
import { getUserLogged } from '../utils/network-data'

export default function TopBar(){
  const {locale, toogleLocale} = useLocale()
  const {theme, toggleTheme} = useTheme()
  const {endSession, isLogin} = useLogin()
  const [user, setUser] = useState({email: "", name:"", id: ""})
  
  useEffect(()=>{
    if(isLogin){
      getUserLogged().then(({data})=>{
        if(data) setUser(data)
      })
    }
  },[isLogin])

  return (
    <header>
      <h1><Link to={"/"}>{home[locale].header}</Link></h1>
      {isLogin && <nav className="navigation">
        <ul>
          <li><a href="/archives">{home[locale].archived}</a></li>
        </ul>
      </nav>
      }
      <button className="toggle-locale" type="button" onClick={toogleLocale}><Translate/></button>
      <button className="toggle-theme" type="button" onClick={toggleTheme}>{theme === "light" ? <Moon/> : <Sun/>}</button>
      {isLogin && <button className="button-logout" type="button" onClick={endSession}><Logout/>{" "}{user.name}</button>}
    </header>
  )
}