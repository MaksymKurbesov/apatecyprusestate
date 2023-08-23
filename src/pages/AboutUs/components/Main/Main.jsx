import React from "react";
import styles from "./Main.module.scss";
import SectionLabel from "../../../../Shared UI/SectionLabel/SectionLabel";
import Button from "../../../../Shared UI/Button/Button";

const STATISTIC = [
  {
    count: 50,
    title: "Companies",
  },
  {
    count: 200,
    title: "Team Members",
  },
  {
    count: 2,
    title: "Capital",
  },
  {
    count: 10,
    title: "Year of experience",
  },
];

const Main = () => {
  return (
    <section className={`${styles["main"]} container`}>
      <div className={styles["text"]}>
        <SectionLabel text={"ABOUT US"} style={{ marginBottom: 20 }} />
        <h2>
          If you want to know more about us, then you are in the right place
        </h2>
        <p>
          Read on to understand how we can help you with your real estate
          investment.
        </p>
        <Button text={"Sign In"} />
      </div>
      <div className={styles["statistic"]}>
        <ul>
          {STATISTIC.map(({ count, title }, index) => {
            const isCapital = title === "Capital";

            return (
              <li className={styles["statistic-item"]} key={index}>
                <p>{isCapital ? `${count}M` : count}+</p>
                <span>{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
