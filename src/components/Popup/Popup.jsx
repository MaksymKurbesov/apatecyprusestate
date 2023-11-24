import React from "react";
import styles from "./Popup.module.scss";

const Popup = ({ text }) => {
  return (
    <div className={`${styles["pop-up"]} custom-bg custom-border`}>
      <p>{text}</p>
    </div>
  );
};

export default Popup;
