import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, onChange, type, name, placeholder }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <input
        className={styles["custom-input"]}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        required
      />
      <label className={styles["label"]} htmlFor={name}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
