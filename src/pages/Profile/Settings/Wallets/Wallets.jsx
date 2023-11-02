import React, { useState } from "react";
import styles from "./Wallets.module.scss";
import { useForm } from "react-hook-form";
import { updateUserWallets } from "../../../../Api/UserData";
import { normalizeUserWallets } from "../../../../utils/helpers/transformersData";
import { useTranslation } from "react-i18next";
import ButtonWithState from "../../../../Shared UI/ButtonWithState/ButtonWithState";

const Wallets = ({ userWallets }) => {
  const { t } = useTranslation();
  const [buttonState, setButtonState] = useState("idleWallet");

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setButtonState("loading");
    updateUserWallets(data)
      .then(() => {
        setButtonState("walletsUpdated");
      })
      .catch((e) => {
        setButtonState("failed");
      })
      .finally(() => {
        setTimeout(() => {
          setButtonState("idleWallet");
        }, 2000);
      });
  };

  return (
    <div className={styles["wallets"]}>
      <h3>{t("settings.wallets")}</h3>

      <form
        className={styles["wallets-form"]}
        id={"wallets-form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        {normalizeUserWallets(userWallets).map((wallet) => {
          return (
            <div className={styles["wallet"]} key={wallet.name}>
              <label htmlFor={wallet.name}>{wallet.name}</label>
              <div
                className={`${styles["input-wrapper"]} custom-bg custom-border`}
              >
                <img
                  className={styles["wallet-icon"]}
                  src={wallet.icon}
                  alt={"wallet icon"}
                />
                <input
                  {...register(wallet.name, {
                    value: wallet.number,
                  })}
                  type={"text"}
                  placeholder={wallet.placeholder}
                  id={wallet.name}
                />
              </div>
            </div>
          );
        })}
      </form>
      <ButtonWithState buttonState={buttonState} form={"wallets-form"} />
    </div>
  );
};

export default Wallets;
