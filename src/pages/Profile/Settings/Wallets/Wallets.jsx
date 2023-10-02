import React, { useState } from "react";
import styles from "./Wallets.module.scss";
import { useForm } from "react-hook-form";
import { updateUserWallets } from "../../../../Api/UserData";
import { normalizeUserWallets } from "../../../../utils/helpers/transformersData";

const Wallets = ({ userWallets }) => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    updateUserWallets(data).then(() => {
      setLoading(false);
    });
  };

  return (
    <div className={styles["wallets"]}>
      <h3>Wallets</h3>

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
      <button
        type="submit"
        form="wallets-form"
        className={`${styles["save-button"]} button`}
        disabled={loading}
      >
        Save
      </button>
    </div>
  );
};

export default Wallets;
