import React from "react";
import styles from "./RadioButton.module.scss";

const RadioButton = ({ value, register, radioName, children }) => {
  let message = "";

  if (radioName === "region") {
    message = "Выберите регион";
  }

  if (radioName === "project") {
    message = "Выберите проект";
  }

  if (radioName === "wallet") {
    message = "Выберите кошелёк";
  }

  return (
    <div className={styles["radio-button"]}>
      <input
        id={value}
        type={"radio"}
        {...register(radioName, {
          required: {
            value: true,
            message,
          },
        })}
        value={value}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

export default RadioButton;
