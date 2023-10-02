import React from "react";
import Title from "../../../Shared UI/Title/Title";
import RoadmapBackground from "../../../assets/images/roadmap2.svg";
import VerticalRoadmapBackground from "../../../assets/images/vertical-roadmap2.svg";

import styles from "./Roadmap.module.scss";
import { useWindowSize } from "../../../hooks/useWindowSize";

const STEPS = [
  {
    date: "2020 Q1-Q2",
    description:
      "Заключение стратегических партнерств и подготовка к первому большому проекту с архитекторами, инженерами и поставщиками материалов.",
  },
  {
    date: "2020 Q3-Q4",
    description:
      "Начало строительства первого флагманского проекта и осуществление рекламных кампаний для привлечения потенциальных инвесторов.",
  },
  {
    date: "2021 Q1-Q2",
    description:
      "Завершение строительства первого проекта и его успешное введение в эксплуатацию. Привлечение первых инвесторов.",
  },
  {
    date: "2021 Q3-Q4",
    description:
      "Начало разработки идеи для следующего инновационного проекта. Расширение команды для обеспечения более масштабных задач.",
  },
  {
    date: "2022 Q1-Q4",
    description:
      "Запуск строительства второго проекта с акцентом на устойчивость и инновации. Расширение строительной базы и использование современных методов управления проектами.",
  },
  {
    date: "2023 Q1-Q4",
    description:
      "Продолжение второго проекта и завершение работ по диверсификации. Аудит для оптимизации внутренних процессов.",
  },
  {
    date: "2024 Q1-Q2",
    description:
      "Внедрение усовершенствованных методов управления проектами для обеспечения эффективности и качества. Запуск международной партнерской программы.",
  },
  {
    date: "2024 Q3-Q4",
    description:
      "Завершение строительства второго проекта и его успешное введение в эксплуатацию. Внедрение новых технологий и подходов для устойчивого роста.",
  },
];

const Roadmap = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles["roadmap"]}>
      {/*<div className={"container"}>*/}
      <Title text={"APATE CYPRUS ESTATE ROADMAP"} />
      <p className={styles["subtitle"]}>
        Market that combines several global areas such as: investment online
        platform
      </p>
      <div className={styles["roadmap-wrapper"]}>
        {windowSize > 1024 ? (
          <img src={RoadmapBackground} alt={"Roadmap scheme"} width={"100%"} />
        ) : (
          <img
            src={VerticalRoadmapBackground}
            alt={"Roadmap scheme"}
            width={550}
            className={styles["vertical-roadmap"]}
          />
        )}

        {STEPS.map(({ date, description }, index) => {
          return (
            <div key={index} className={styles["step"]}>
              <span>{index + 1}</span>
              <h3>{date}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
      {/*</div>*/}
    </div>
  );
};

export default Roadmap;
