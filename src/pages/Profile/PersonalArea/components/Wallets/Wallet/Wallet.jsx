import React from "react";
import styles from "./Wallet.module.scss";
import TetherIcon from "../../../../../assets/images/wallets/tether.png";

const Wallet = () => {
  return (
    <div className={styles["wallet"]}>
      <div className={styles["name"]}>
        <div className={styles["icon"]}>
          <img src={TetherIcon} alt={"Wallet Icon"} />
        </div>
        <span>Tether</span>
        <div className={styles["label"]}>USDT</div>
      </div>
      <ul className={styles["information"]}>
        <li>
          <p>Available</p>
          <span>464.6$</span>
        </li>
        <li>
          <p>Withdraw</p>
          <span>464.6$</span>
        </li>
        <li>
          <p>Deposited</p>
          <span>464.6$</span>
        </li>
        <li>
          <p>Referrals</p>
          <span>464.6$</span>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
