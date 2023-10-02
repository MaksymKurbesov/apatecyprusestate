import React from "react";
import styles from "./Statistic.module.scss";
import SectionLabel from "../../../Shared UI/SectionLabel/SectionLabel";
import Title from "../../../Shared UI/Title/Title";

const STATISTIC = [
  {
    count: 100,
    title: "Partners",
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
    count: 125,
    title: "ROI",
  },
];

const Statistic = () => {
  return (
    <section className={styles["main"]}>
      <div className={"container"}>
        <div className={styles["text"]}>
          <SectionLabel
            text={"КОМПАНИЯ В ЦИФРАХ"}
            style={{ marginBottom: 30 }}
          />
          <Title text={"Ключевые показатели нашей компании"} />
          <p>
            Знакомьтесь с нашими основными достижениями и показателями. Здесь мы
            собрали статистику, которая отражает опыт, размер и стабильность
            нашей компании, чтобы вы могли лучше узнать нас и наше направление в
            индустрии.
          </p>
        </div>
        <div className={styles["statistic"]}>
          <ul>
            {STATISTIC.map(({ count, title }, index) => {
              const isCapital = title === "Capital";
              const isROI = title === "ROI";

              let updatedCount;

              if (isCapital) updatedCount = `${count}M+`;
              if (isROI) updatedCount = `~${count}%`;

              return (
                <li className={styles["statistic-item"]} key={index}>
                  <p>{updatedCount ? updatedCount : `${count}+`}</p>
                  <span>{title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
