import React from "react";
import styles from "./Title.module.scss";

const Title = ({ text, align, style }) => {
  return (
    <h2
      data-aos={"fade-right"}
      style={style}
      className={`${styles["title"]} ${styles[align]}`}
    >
      {text}
    </h2>
  );
};

export default Title;
