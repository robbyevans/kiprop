import React from 'react'
import css from './Hero.module.scss'

function Hero() {
  return (
    <section
    className= {`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>

        {/* upper element */}
          <div className={`${css.upperElement}`}>

              <span
              className='primaryText'>Hey There,<br/>I`m Kiprop.</span>
              <span className='secondaryText'>I create beautiful things <br/>on the web</span>

          </div>
              {/* person image */}
              <div className={css.person}>
                <img src='./person.png' alt=''/>
              </div>

              {/* email */}
              <a href="mailto:ruttoevans001@gmail.com" className={css.email}>
                ruttoevans001@gmail
              </a>


              {/* lower element */}
          <div className={`${css.lowerElement}`}>
            <div className={css.experience}>

              <div className="primaryText">10</div>
              <div className='secondaryText'>

                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
            <div className={css.certificate}>
              <img src="./certificate.png" alt=""
              />
              <span>CERTIFIED PROFATIONAL</span>
              <span>SOFTWARE DEVELOPER</span>
            </div>
          </div>

      </div>
    </section>
  )
}

export default Hero