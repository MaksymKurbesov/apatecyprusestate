import React, { useState } from "react";
import styles from "./Bill.module.scss";
import { ReactComponent as InfoIcon } from "../../../assets/SVG/info-circle.svg";
import ColoredLabel from "../../ColoredLabel/ColoredLabel";
import { WALLETS } from "../../../utils/consts";
import { useTranslation } from "react-i18next";
import Popup from "../../Popup/Popup";

const Bill = ({ bill, info, infoText, selectedWallet }) => {
  const { t } = useTranslation();
  const [isInfoHovered, setIsInfoHovered] = useState(false);

  return (
    <div className={`${styles["bill"]} custom-bg custom-border`}>
      <h3>
        {t("bill.transaction_confirmation")}
        {info ? (
          <InfoIcon
            onMouseOver={() => setIsInfoHovered(true)}
            onMouseOut={() => setIsInfoHovered(false)}
            className={styles["info-icon"]}
          />
        ) : null}
      </h3>

      <div
        className={`${isInfoHovered ? styles["show-pop-up"] : ""} ${
          styles["pop-up-wrapper"]
        }`}
      >
        <Popup text={infoText} />
      </div>

      <ul>
        {bill.map((row) => {
          let rowWithCurrencyLabel =
            row.label === t("bill.amount") ||
            row.label === t("bill.income_in_day") ||
            row.label === t("bill.total_income") ||
            row.label === t("bill.commission");

          const walletIcon =
            !!selectedWallet &&
            WALLETS.find((wallet) => wallet.name === selectedWallet).icon;

          return (
            <li className={styles["row"]} key={row.label}>
              <p>{row.label}:</p>
              <span className={styles["dotted-line"]}></span>
              <div className={styles["value"]}>
                {row.label === t("bill.payment_system") && (
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
