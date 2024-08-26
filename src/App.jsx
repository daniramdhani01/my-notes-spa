import React, { Component } from 'react'
import TopBar from './components/TopBar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import NotFound from './pages/NotFound'
import PageWrapper from './components/PageWrapper'
import DetailNotes from './pages/DetailNotes'
import AddNew from './pages/AddNew'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="app-container">
        <BrowserRouter>
          <TopBar/>
          <main>
          <Routes>
            <Route path='/' element={<Navigate to={"/notes"}/>}/>
            <Route path='/notes' element={<PageWrapper><Notes/></PageWrapper>}/>
            <Route path='/notes/new' element={<AddNew />}/>
            <Route path='/notes/:id' element={<PageWrapper><DetailNotes/></PageWrapper>}/>
            <Route path='/archives' element={<PageWrapper><Notes/></PageWrapper>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}
