import React from 'react'
import TopBar from './components/TopBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import NotFound from './pages/NotFound'
import DetailNotes from './pages/DetailNotes'
import AddNew from './pages/AddNew'
import { useTheme } from './contexts/ThemeContext'
import Login from './pages/Login'

export default function App() {
  const {theme} = useTheme()
  return (
    <BrowserRouter>
      <div className="app-container" data-theme={theme}>
        <TopBar/>
        <main>
          <Routes>
            {/* <Route path='/' element={<Login/>}/> */}
            <Route path='/' element={<Notes/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/notes/new' element={<AddNew />}/>
            <Route path='/notes/:id' element={<DetailNotes/>}/>
            <Route path='/archives' element={<Notes/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}