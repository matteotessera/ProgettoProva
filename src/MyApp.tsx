import { useState, useMemo, useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'


function App() {

  // Render
  return (
    <div> 
      <Navbar>
      </Navbar>

      <Body/>

    </div>
  )
}

export default App
