import React from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  return (
    <div className={styles["menu-btn"]}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
