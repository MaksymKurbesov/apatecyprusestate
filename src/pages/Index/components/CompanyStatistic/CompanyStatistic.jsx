import React from "react";
import styles from "./CompanyStatistic.module.scss";

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
    count: 250,
    title: "Capital",
  },
  {
    count: 10,
    title: "Year of experience",
  },
];

const CompanyStatistic = () => {
  return (
    <ul className={`${styles["company-statistic"]} container`}>
      {STATISTIC.map(({ count, title }) => {
        return (
          <li key={title} className={styles["statistic"]}>
            <p>
              {title === "Capital" ? "$" : ""}
              {count}+
            </p>
            <span>{title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CompanyStatistic;
