import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Rate from './Components/Rate'
import Ratetoggle from './Components/Ratetoggle'

function App() {


  return (
    <main>
      <Rate/>
      <Ratetoggle
      country="AUD"
      />
    </main>
  )
}

export default App
