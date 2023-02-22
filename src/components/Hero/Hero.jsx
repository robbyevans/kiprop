import React from 'react'
import css from './Hero.module.scss'

function Hero() {
  return (
    <section
    className= {`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>

        {/* upper element */}
          <div className={`${css.upperElement}`}></div>
              
              <span>Hey There,<br/>I`m Kiprop.</span>
              <span>I create beautiful things <br/>on the web</span>

              {/* lower element */}
          <div className={`${css.lowerElement}`}></div>

      </div>
    </section>
  )
}

export default Hero