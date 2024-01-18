import React from 'react'
import './App.scss'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Logo from './Components/Logo/Logo'
import Analytics from './Components/Analytics/analytics'

const App = () => {
  return (
    <div className='webpage'>
      <NavBar />
      <Hero />
      <Logo />
      <Analytics />
    </div>
  )
}

export default App
