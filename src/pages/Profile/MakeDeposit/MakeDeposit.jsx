import React from "react";
import Stepper from "../../Shared UI/Stepper/Stepper";
import WalletsList from "../../components/WalletsList/WalletsList";
import EnterTheAmount from "../../components/EnterTheAmount/EnterTheAmount";
import PlansList from "../../components/PlansList/PlansList";
import styles from "./MakeDeposit.module.scss";

const STEPS = [
  {
    title: "Choose a plan",
    content: (
      <div className={styles["make-deposit-plans"]}>
        <PlansList />
      </div>
    ),
  },
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

const MakeDeposit = () => {
  return (
    <div className={styles["make-deposit"]}>
      <Stepper steps={STEPS} />
    </div>
  );
};

export default MakeDeposit;
