import React from 'react'
import { useState } from 'react'
import './App.css'
import Game from './components/Game'


function App() {
  const [nameOne, setNameOne] = useState('')
  const [nameTwo, setNameTwo] = useState('')

  return (
    <div className="wrapper">
      <Game nameOne={nameOne} nameTwo={nameTwo}/>
    </div>
    )
}
export default App;