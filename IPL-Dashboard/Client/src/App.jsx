import { useState } from 'react'
import React from 'react';
import './App.css'
import { TeamPage } from './Pages/TeamPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TeamPage />
      </div>
    </>
  )
}

export default App
