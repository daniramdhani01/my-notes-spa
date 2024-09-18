import React from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../contexts/LocaleContext'
import { home } from '../utils/content'
import Sun from "../assets/icons/sun.svg?react"
import Moon from "../assets/icons/moon.svg?react"
import Translate from "../assets/icons/translate.svg?react"
import Logout from "../assets/icons/logout.svg?react"
import { useTheme } from '../contexts/ThemeContext'

export default function TopBar(){
  const {locale, toogleLocale} = useLocale()
  const {theme, toggleTheme} = useTheme()
  
  return (
    <header>
      <h1><Link to={"/"}>{home[locale].header}</Link></h1>
      <nav className="navigation">
        <ul>
          <li><a href="/archives">{home[locale].archived}</a></li>
        </ul>
      </nav>
      <button className="toggle-locale" type="button" onClick={toogleLocale}><Translate/></button>
      <button className="toggle-theme" type="button" onClick={toggleTheme}>{theme === "light" ? <Moon/> : <Sun/>}</button>
      <button className="button-logout" type="button"><Logout/>{" "}admin</button>
    </header>
  )
}