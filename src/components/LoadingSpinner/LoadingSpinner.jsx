import React from "react";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles["loader"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
