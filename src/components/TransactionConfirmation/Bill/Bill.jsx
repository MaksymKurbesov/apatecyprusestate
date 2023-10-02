import React from "react";
import styles from "./Bill.module.scss";
import { ReactComponent as InfoIcon } from "../../../assets/SVG/info-circle.svg";
import ColoredLabel from "../../ColoredLabel/ColoredLabel";
import { WALLETS } from "../../../utils/consts";

const Bill = ({ bill, info, selectedWallet }) => {
  return (
    <div className={`${styles["bill"]} custom-bg custom-border`}>
      <h3>
        Transaction confirmation
        {info ? <InfoIcon className={styles["info-icon"]} /> : null}
      </h3>
      <ul>
        {bill.map((row) => {
          let rowWithCurrencyLabel =
            row.label === "Amount" ||
            row.label === "Income in day" ||
            row.label === "Total income" ||
            row.label === "Commission";

          const walletIcon =
            !!selectedWallet &&
            WALLETS.find((wallet) => wallet.name === selectedWallet).icon;

          return (
            <li className={styles["row"]} key={row.label}>
              <p>{row.label}:</p>
              <span className={styles["dotted-line"]}></span>
              <div className={styles["value"]}>
                {row.label === "Payment system" && (
                  <div className={styles["wallet-icon"]}>
                    {walletIcon && (
                      <img src={walletIcon} alt={"selected wallet"} />
                    )}
                  </div>
                )}
                {row.value}
                {rowWithCurrencyLabel && <ColoredLabel text={"USD"} />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bill;
