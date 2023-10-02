import React from "react";
import styles from "./ColoredLabel.module.scss";
import { LABEL_COLORS } from "../../utils/consts";

const ColoredLabel = ({ text }) => {
  return (
    <div className={`${styles["label"]} ${styles[LABEL_COLORS[text]]}`}>
      {text}
    </div>
  );
};

export default ColoredLabel;
