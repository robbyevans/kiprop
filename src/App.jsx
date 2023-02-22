import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Expertise from './components/Experties/Expertise'
import Works from './components/Works/Works'
import css from "./styles/app.module.scss"

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Expertise/>
      <Works/>
    </div> 
  )
}

export default App
