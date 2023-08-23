import React from "react";
import styles from "./SectionLabel.module.scss";

const SectionLabel = ({ text, style }) => {
  return (
    <div className={styles["section-label"]} style={style}>
      {text}
    </div>
  );
};

export default SectionLabel;
