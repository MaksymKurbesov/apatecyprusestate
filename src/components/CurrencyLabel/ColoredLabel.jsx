import React from "react";
import styles from "./CurrencyLabel.module.scss";

const LABEL_COLORS = {
  ETH: "blue",
  USDT: "green",
  BTC: "yellow",
  SOL: "violet",
  BNB: "yellow",
  PM: "red",
  DOT: "pink",
};

const CurrencyLabel = ({ text }) => {
  return (
    <div className={`${styles["label"]} ${styles[LABEL_COLORS[text]]}`}>
      {text}
    </div>
  );
};

export default CurrencyLabel;
