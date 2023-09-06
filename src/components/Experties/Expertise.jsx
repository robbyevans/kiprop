import React from "react";
import { projectExperience, WhatDoIHelp } from "../../utils/data";
import css from "./Expertise.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.js";
const Experties = () => {
  return (
    <section className={css.wrapper}>
      <a className="anchor" id="experties"></a>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.exp}
                key={i}
              >
                <div style={{ background: exp.bg }} className="flexCenter">
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  <span className="secondaryText">
                    {" "}
                    Stacks:
                    {exp.stacks.map(function (icons) {
                      return (
                        <icons.icon
                          className={css.icon}
                          size={30}
                          color={icons.color}
                        />
                      );
                    })}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right */}
        <motion.div variants={textVariant(0.5)} className={css.rightSide}>
          <span className="primaryText">What i do? </span>
          {WhatDoIHelp.map((paragraph, i) => (
            <span className="secondaryText" key={i}>
              {paragraph}
            </span>
          ))}

          <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className={`primaryText ${css.orange}`}>35+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className={`primaryText ${css.orange}`}>50+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experties;
