import React from "react";
import styles from "./Instruction.module.scss";
import CopyText from "../../CopyText/CopyText";
import { ReactComponent as ErrorIcon } from "../../../assets/SVG/exclamation.svg";

const Instruction = ({ register, errors }) => {
  return (
    <div className={`${styles["instruction"]} custom-bg custom-border`}>
      <h3>Instructions for payment transfer</h3>
      <ul className={styles["instruction-list"]}>
        <li>
          <p>1. Select a payment system</p>
        </li>
        <li>
          <p>2. Specify the refill amount</p>
        </li>
        <li>
          <p>3. Make the payment using these details</p>
          <CopyText text={`U40108873484bflls9jfclwse`} />
        </li>
        <li className={styles["transaction-number-wrapper"]}>
          <p>
            4. Confirm the transaction by entering the transaction number/hash
            below
          </p>
          <input
            {...register("transaction-hash", {
              required: true,
            })}
            type={"text"}
            className={styles["transaction-number"]}
            placeholder={"Enter the transaction number"}
          />
          {errors["transaction-hash"] ? (
            <div className={`${styles["transaction-error"]} error`}>
              <ErrorIcon />
              <p>Введите пожалуйста номер транзакции</p>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Instruction;
