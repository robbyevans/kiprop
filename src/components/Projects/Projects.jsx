import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
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
          <span className="secondaryText">Explore More Works</span>
        </motion.div>
        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://rickmorty.pages.dev/">
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./00015.jpg"
              alt="project"
            />
          </a>

          <a href="https://sil-gallery-app.herokuapp.com/">
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./viewIT.png"
              alt="project"
            />
          </a>

          <a href="https://local-shop.herokuapp.com/mlog-in">
            <motion.img
              variants={fadeIn("up", "tween", 0.9, 0.6)}
              src="./localshop.png"
              alt="project"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
