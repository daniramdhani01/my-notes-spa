import React from 'react'
import TopBar from './components/TopBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import NotFound from './pages/NotFound'
import DetailNotes from './pages/DetailNotes'
import AddNew from './pages/AddNew'

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <TopBar/>
        <main>
        <Routes>
          <Route path='/' element={<Navigate to={"/notes"}/>}/>
          <Route path='/notes' element={<Notes/>}/>
          {/* <Route path='/notes/new' element={<AddNew />}/>
          <Route path='/notes/:id' element={<DetailNotes/>}/>
          <Route path='/archives' element={<Notes/>}/> */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}