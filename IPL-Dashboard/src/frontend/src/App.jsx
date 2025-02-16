import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css'
import { TeamPage } from './Pages/TeamPage'


function App() {

  return (
    <>
      <div className='p-10 text-left'>
        <Router>
          {/* <Routes>

          <Route path='/matches'> */}
            <TeamPage />
          {/* </Route>
          </Routes> */}
        </Router>
      </div>
      

    </>
  )
}

export default App
