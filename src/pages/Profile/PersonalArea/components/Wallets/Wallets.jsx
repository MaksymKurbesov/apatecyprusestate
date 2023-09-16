import React from "react";
import styles from "./Wallets.module.scss";
import Wallet from "./Wallet/Wallet";

const Wallets = () => {
  return (
    <div className={styles["wallets"]}>
      <Wallet />
      <Wallet />
      <Wallet />
    </div>
  );
};

export default Wallets;
