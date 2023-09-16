import React from "react";
import styles from "./NextAccrual.module.scss";

const NextAccrual = () => {
  return (
    <div className={styles["next-accrual"]}>
      <div>
        <p>New updated</p>
        <p>Следующее начисление через:</p>
        <p>Пусть каждая секунда приближает вас к большему!</p>
      </div>
      <div>timer</div>
    </div>
  );
};

export default NextAccrual;
