import React from "react";
import Wallets from "./components/Wallets/Wallets";
import styles from "./PersonalArea.module.scss";
import NextAccrual from "./components/NextAccrual/NextAccrual";
import UserStatistic from "./components/UserStatistic/UserStatistic";
import Deposits from "./components/Deposits/Deposits";

const PersonalArea = () => {
  return (
    <div className={styles["personal-area"]}>
      <Wallets />
      <NextAccrual />
      <UserStatistic />
      <Deposits />
    </div>
  );
};

export default PersonalArea;
