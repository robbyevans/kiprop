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
          <div className={`${css.lowerElement}`}>
            <div className={css.experience}>

              <div className="primaryText">10</div>
              <div className='secondaryText'>

                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
            <div className={css.certificate}></div>
          </div>

      </div>
    </section>
  )
}

export default Hero