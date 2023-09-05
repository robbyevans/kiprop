import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./Comments.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const CommentItem = ({ img, comment, name, post }) => (
  <div className={`flexCenter ${css.comment}`}>
    <img src={img} alt="" />
    <p>{comment}</p>
    <div className={css.line}></div>
    <div className={css.bio}>
      <span>{name}</span>
      <span>{post}</span>
    </div>
  </div>
);

const Comments = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="comments"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Clients and Colleagues</span>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => (
              <CommentItem key={i} {...comment} />
            ))}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Comments;
