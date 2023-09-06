import React, { useState, useRef } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants, getMenuStyles } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

function MenuItems() {
  return (
    <>
      <li>
        <a href="#experties">Services</a>
      </li>
      <li>
        <a href="#works">Experience</a>
      </li>
      <li>
        <a href="#projects">Portfolio</a>
      </li>
      <li>
        <a href="#contacts">Contacts</a>
      </li>
      <Contact />
    </>
  );
}

function Contact() {
  return (
    <li className={`flexCenter ${css.phone}`}>
      <a href="#contacts">
        <BiPhoneCall size={"40px"} />
      </a>
    </li>
  );
}

function Header() {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(true);
  const headerShadow = useHeaderShadow();

  // Handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Kiprop</div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <MenuItems />
        </ul>

        {/* Icon for medium and small screens */}
        <div
          ref={menuRef}
          className={css.menuIcon}
          onClick={() => setMenuOpened((prevMenuOpened) => !prevMenuOpened)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
