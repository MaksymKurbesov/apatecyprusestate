import React from "react";
import styles from "./Main.module.scss";
import HeroImage from "../../../../assets/images/hero-image.png";

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

const Main = () => {
  return (
    <section className={styles["main"]}>
      <div className={`${styles["main-wrapper"]} container`}>
        <h1 className={styles["title"]}>
          International <span>real estate</span> holding company in the UAE
        </h1>
        <h2 className={styles["subtitle"]}>
          Market that combines several global areas such as: investment online
          platform
        </h2>
        <img
          className={styles["hero-image"]}
          src={HeroImage}
          alt={"hero-banner"}
          width={1024}
        />
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
      </div>
    </section>
  );
};

export default Main;
