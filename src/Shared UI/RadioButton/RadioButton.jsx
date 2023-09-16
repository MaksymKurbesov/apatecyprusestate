import React, { useState } from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ label, walletLabel, name, handler, checked }) => {
  const [wallet, setWallet] = useState(null);

  return (
    <div className={styles["radio-button"]}>
      <label htmlFor={label}>
        {label}
        {walletLabel ? (
          <span className={styles["wallet-label"]}>{walletLabel}</span>
        ) : (
          ""
        )}
      </label>
      <input
        id={label}
        type={"radio"}
        name={name}
        value={label}
        onChange={(e) => handler(e.target.value)}
        checked={checked}
      />
    </div>
  );
};

export default RadioButton;
