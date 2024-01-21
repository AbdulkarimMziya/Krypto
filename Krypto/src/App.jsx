import React from 'react'
import './App.scss'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Logo from './Components/Logo/Logo'
import Analytics from './Components/Analytics/analytics'
import GetApp from './Components/GetApp/GetApp'

const App = () => {
  return (
    <div className='webpage'>
      <NavBar />
      <Hero />
      <Logo />
      <Analytics />
      <GetApp />
    </div>
  )
}

export default App
