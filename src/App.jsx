import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import css from "./styles/app.module.scss"

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
    </div> 
  )
}

export default App
