import React from "react";
import Stepper from "../../Shared UI/Stepper/Stepper";
import WalletsList from "../../components/WalletsList/WalletsList";
import styles from "./CashIn.module.scss";
import EnterTheAmount from "../../components/EnterTheAmount/EnterTheAmount";

const STEPS = [
  {
    title: "Choose a wallet",
    content: <WalletsList />,
  },
  {
    title: "Enter the amount",
    content: <EnterTheAmount />,
  },
  {
    title: "Transaction confirmation",
    content: "content 3",
  },
];

const CashIn = () => {
  return (
    <div className={styles["cash-in"]}>
      <Stepper steps={STEPS} />
    </div>
  );
};

export default CashIn;
