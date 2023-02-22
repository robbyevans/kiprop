import React from 'react'
import css from './Hero.module.scss'
import {motion} from "framer-motion"
import { staggerContainer,fadeIn,slideIn } from '../../utils/motion'

function Hero() {
  return (
    <section
    className= {`paddings ${css.wrapper}`}>
      <motion.div className={`innerWidth ${css.container}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}>

        {/* upper element */}
          <div className={`${css.upperElement}`}>

              <motion.span
              variants={fadeIn("right","tween",0.2,1)}
              className='primaryText'>Hey There,<br/>I`m Kiprop.
              </motion.span>
              <motion.span
               variants={fadeIn("left","tween",0.2,1)}
               className='secondaryText'>I create beautiful things <br/>on the web
               </motion.span>

          </div>

              {/* person image */}
              <div className={css.person}>
                <motion.img
                variants={slideIn('up','tween',0.5,1.3)}
                 src='./person.png' alt=''/>
              </div>

              {/* email */}
              <motion.a
              variants={fadeIn("right","tween",0.2,1)}
               href="mailto:ruttoevans001@gmail.com" className={css.email}>
                ruttoevans001@gmail
              </motion.a>


              {/* lower element */}
          <div className={`${css.lowerElement}`}>
            <motion.div className={css.experience}
            variants={fadeIn("right","tween",0.2,1)}>

              <div className="primaryText"
              >3+</div>
              <div className='secondaryText'>

                <div>Years</div>
                <div>Experience</div>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left","tween",0.2,1)}
             className={css.certificate}>
              <img src="./certificate.png" alt=""
              />
              <span>CERTIFIED</span>
              <span>SOFTWARE DEVELOPER</span>
            </motion.div>
          </div>

      </motion.div>
    </section>
  )
}

export default Hero