import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = ({ menuStatus, openMenuHandler }) => {
  return (
    <div
      onClick={() => openMenuHandler(!menuStatus)}
      className={`${styles["menu-btn"]} ${menuStatus && styles["menu-open"]}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
