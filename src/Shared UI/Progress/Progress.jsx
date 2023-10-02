import React from "react";
import styles from "./Progress.module.scss";

const Progress = ({ percent }) => {
  return (
    <div className={styles["progress-wrapper"]}>
      <div className={styles["progress"]}>
        <span style={{ width: `${percent}%` }}></span>
      </div>
      {/*<p>{percent.toFixed(0)}%</p>*/}
    </div>
  );
};

export default Progress;
