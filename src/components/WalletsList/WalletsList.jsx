import React from "react";
import { WALLETS } from "../../utils/consts";
import styles from "./WalletsList.module.scss";
import RadioButton from "../../Shared UI/RadioButton/RadioButton";
import ColoredLabel from "../ColoredLabel/ColoredLabel";
import { useFormContext } from "react-hook-form";

const WalletsList = () => {
  const { watch, register } = useFormContext();

  return (
    <div className={styles["wallets-list"]}>
      {WALLETS.map((wallet, index) => {
        const isChecked = watch("wallet") === wallet.name;
        const checkedClassName = isChecked ? styles["isChecked"] : "";

        return (
          <div
            key={index}
            className={`${styles["wallet"]} ${checkedClassName} custom-bg custom-border`}
          >
            <RadioButton
              radioName={"wallet"}
              value={wallet.name}
              register={register}
            >
              <div className={styles["label-wrapper"]}>
                <img src={wallet.icon} alt={"wallet icon"} />
                <p>{wallet.name}</p>
                <ColoredLabel text={wallet.label} />
              </div>
            </RadioButton>
          </div>
        );
      })}
    </div>
  );
};

export default WalletsList;
