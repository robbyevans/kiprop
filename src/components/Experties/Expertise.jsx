import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import { fadeIn, staggerContainer ,textVariant} from '../../utils/motion'
import {motion} from 'framer-motion'
import css from "./Expertise.module.scss"

function Expertise() {
  return (
    <section
    
    className={`${css.wrapper}`}>

      <motion.div
      variant={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
       className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>

      {/* left side */}
        <div className={css.leftSide}>

          {/* experience cards */}
          {
            projectExperience.map((exp,i)=>{
              return <motion.div
              
              variant={fadeIn("right","tween",(i+1)*0.2, 1)}
               className={css.exp} key={i}>
                <div className="flexCenter" style={{background:exp.bg}}>
                  <exp.icon size={25} color="white"/>
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText"> {exp.projects}</span>
                  </div>

              </motion.div>
            })
          }
        </div>

        {/* right side */} 
        <div className={css.rightSide}>
          <span className="primaryText">What do i help? </span>
            {
              WhatDoIHelp.map((paragraph,i)=>{
                return <span className="secondaryText" key={i}>{paragraph}</span>
              })
            }

            <div className={`flexCenter ${css.stats}`}>
              <div className={`flexCenter ${css.stat}`}>
                <span className='primaryText'>285+</span>
                <span className='secondaryText'>projects completed</span>
              </div>
              <div className={`flexCenter ${css.stat}`}>
                <span className='primaryText'>190+</span>
                <span className='secondaryText'>Happy Clients</span>
              </div>
            </div>
         
        </div>

      </motion.div>
    </section>
  )
}

export default Expertise