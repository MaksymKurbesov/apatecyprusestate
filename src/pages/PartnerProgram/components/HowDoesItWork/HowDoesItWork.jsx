import React from "react";
import Title from "../../../../../Shared UI/Title/Title";
import styles from "./HowDoesItWork.module.scss";

const STEPS_LIST = [
  {
    title: "Start",
    description:
      "If you have your own blog, website or buy advertising, you can place your referral link there",
  },
  {
    title: "Your link",
    description:
      "When a user clicks on your link, we'll tag the user with your unique ID for future referrals",
  },
  {
    title: "Referral Registration",
    description:
      "The user (referral) registers with our company and begins to use its services",
  },
  {
    title: "Revenue accrual",
    description:
      "Immediately after registration in the affiliate program your reward will be 7%.",
  },
  {
    title: "Payment",
    description:
      "You can receive your profit from the affiliate program at any time.",
  },
];

const HowDoesItWork = () => {
  return (
    <section className={styles["how-does-it-work"]}>
      <div className={"container"}>
        <Title text={"How does it work?"} style={{ marginBottom: 30 }} />
        <ul className={styles["steps-list"]}>
          {STEPS_LIST.map((step, index) => {
            return (
              <li className={styles["step"]} key={index}>
                <div className={styles["count"]}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles["information"]}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HowDoesItWork;
