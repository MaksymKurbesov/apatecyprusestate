import React from "react";
import styles from "./Wallet.module.scss";
import ColoredLabel from "../../../../../components/ColoredLabel/ColoredLabel";

const Wallet = ({ wallet }) => {
  const { name, label, available, deposited, withdrawn, referrals } = wallet;

  return (
    <div className={`${styles["wallet"]} custom-bg custom-border`}>
      <div className={styles["name"]}>
        <div className={styles["icon"]}>
          <img src={wallet.icon} alt={"Wallet Icon"} />
        </div>
        <span>{name}</span>
        <ColoredLabel text={label} />
      </div>
      <ul className={styles["information"]}>
        <li>
          <p>Available</p>
          <span>${available.toFixed(2)}</span>
        </li>
        <li>
          <p>Deposited</p>
          <span>${deposited.toFixed(2)}</span>
        </li>
        <li>
          <p>Withdraw</p>
          <span>${withdrawn.toFixed(2)}</span>
        </li>
        <li>
          <p>Referrals</p>
          <span>${referrals.toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Wallet;
