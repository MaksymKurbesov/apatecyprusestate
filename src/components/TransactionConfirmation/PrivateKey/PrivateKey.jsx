import React from "react";
import styles from "./PrivateKey.module.scss";
import { ReactComponent as InfoIcon } from "../../../assets/SVG/info-circle.svg";
import { ReactComponent as Exclamation } from "../../../assets/SVG/exclamation.svg";
import { ErrorMessage } from "@hookform/error-message";
import { useTranslation } from "react-i18next";

const PrivateKey = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["private-key"]} custom-border`}>
      <p>
        {t("private_key.title")}
        <InfoIcon className={styles["info-icon"]} />
      </p>
      <input
        {...register("private-key", {
          required: "Введите пожалуйста приватный финансовый ключ",
        })}
        type={"text"}
        placeholder={t("private_key.placeholder")}
      />
      <ErrorMessage
        name={"private-key"}
        errors={errors}
        render={({ message }) => (
          <div className={`${styles["private-key-error"]} error`}>
            <Exclamation />
            <p>{message}</p>
          </div>
        )}
      />
    </div>
  );
};

export default PrivateKey;
