import React from "react";
import Title from "../../../../../Shared UI/Title/Title";
import RoadmapBackground from "../../../../../assets/images/roadmap.svg";
import VerticalRoadmapBackground from "../../../../../assets/images/vertical-roadmap.svg";

import styles from "./Roadmap.module.scss";
import { useWindowSize } from "../../../../../hooks/useWindowSize";

const STEPS = [
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
  {
    date: "May 2013",
    description:
      "Establishment of Trust Investment as a separate legal entity in the UAE.",
  },
];

const Roadmap = () => {
  const windowSize = useWindowSize();

  return (
    <div className={styles["roadmap"]}>
      <div className={"container"}>
        <Title text={"TRUST INVESTMENT ROADMAP"} />
        <p className={styles["subtitle"]}>
          Market that combines several global areas such as: investment online
          platform
        </p>
        <div className={styles["roadmap-wrapper"]}>
          {windowSize > 1024 ? (
            <img
              src={RoadmapBackground}
              alt={"Roadmap scheme"}
              width={"100%"}
            />
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
      </div>
    </div>
  );
};

export default Roadmap;
