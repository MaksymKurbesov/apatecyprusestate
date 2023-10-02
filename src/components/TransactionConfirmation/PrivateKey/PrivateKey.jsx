import React from "react";
import styles from "./PrivateKey.module.scss";
import { ReactComponent as InfoIcon } from "../../../assets/SVG/info-circle.svg";
import { ReactComponent as Exclamation } from "../../../assets/SVG/exclamation.svg";
import { ErrorMessage } from "@hookform/error-message";

const PrivateKey = ({ register, errors }) => {
  return (
    <div className={`${styles["private-key"]} custom-border`}>
      <p>
        Please enter your private financial key
        <InfoIcon className={styles["info-icon"]} />
      </p>
      <input
        {...register("private-key", {
          required: "Введите пожалуйста приватный финансовый ключ",
        })}
        type={"text"}
        placeholder={"Enter your private financial key "}
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
      {/*{errors["private-key"] ? (*/}
      {/*  <div className={`${styles["private-key-error"]} error`}>*/}
      {/*    <ErrorIcon />*/}
      {/*    <p>Введите пожалуйста приватный финансовый ключ</p>*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </div>
  );
};

export default PrivateKey;
