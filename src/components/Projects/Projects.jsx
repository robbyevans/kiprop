import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
const Projects = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">Recent Projects</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>

          <a
            className="secondaryText"
            href="https://github.com/robbyevans"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More Works
          </a>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <a
            href="https://local-shop.herokuapp.com/mlog-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./localshop.png"
              alt="project"
            />
          </a>

          <a
            href="https://rickmorty.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./00015.jpg"
              alt="project"
            />
          </a>
          <a
            href="https://keevadis.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./keevadis.png"
              alt="project"
            />
          </a>

          <a
            href="https://sil-gallery-app.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./viewIT.png"
              alt="project"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
