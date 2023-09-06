import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <a className="anchor" id="contacts"></a>
          <div className={css.left}>
            <span className="primaryText">
              Let's make something <br />
              happen ....
            </span>
            <span className="primaryText">
              <a href="mailto:ruttoevans001@gmail.com">say hi</a>
            </span>
          </div>
          <div className={css.right}>
            <div className={css.info}>
              <span className="secondaryText">Information</span>
              <p>Tel: +254720563260</p>
            </div>
            <ul className={css.menu}>
              <li>
                <a href="#experties">Services</a>
              </li>
              <li>
                <a href="#projects">Works</a>
              </li>
              <li>
                <a href="#">Notes</a>
              </li>
              <li>
                <a href="#works">Experience</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
      <div className={css.footer_end}>
        <p>&copy; Kiprop 2023 </p>
      </div>
    </div>
  );
};

export default Footer;
