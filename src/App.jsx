import React from 'react'
import TopBar from './components/TopBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import NotFound from './pages/NotFound'
import DetailNotes from './pages/DetailNotes'
import AddNew from './pages/AddNew'
import { useTheme } from './contexts/ThemeContext'
import Login from './pages/Login'
import Register from './pages/Register'
import { useLogin } from './contexts/LoginContext'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  const {theme} = useTheme()
  const {isLogin} = useLogin()

  return (
    <BrowserRouter>
      <div className="app-container" data-theme={theme}>
        <TopBar/>
        <main>
          <Routes>
            <Route path='/' element={isLogin ? <Notes/> : <Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/* start private route */}
            <Route path='/notes' element={<PrivateRoute><Notes/></PrivateRoute>}/>
            <Route path='/notes/new' element={<PrivateRoute><AddNew/></PrivateRoute>}/>
            <Route path='/notes/:id' element={<PrivateRoute><DetailNotes/></PrivateRoute>}/>
            <Route path='/archives' element={<PrivateRoute><Notes/></PrivateRoute>}/>
            {/* end private route */}
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}