import React from "react";
import styles from "./OurTeam.module.scss";
import Title from "../../../../Shared UI/Title/Title";
import CEOPhoto from "../../../../assets/images/team members/CEO.png";
import CTOPhoto from "../../../../assets/images/team members/CTO.png";
import ProjectFinancingPhoto from "../../../../assets/images/team members/Project Financing.png";

const TEAM = [
  {
    position: "CEO",
    name: "Arif  Mohd Al Alawi",
    photo: CEOPhoto,
  },
  {
    position: "CTO",
    name: "Vadym Shkarupeta",
    photo: CTOPhoto,
  },
  {
    position: "Project Financing",
    name: "Yousaf Abbasi",
    photo: ProjectFinancingPhoto,
  },
];

const OurTeam = () => {
  return (
    <section className={`${styles["our-team"]} container`}>
      <Title text={"Our Team"} style={{ marginBottom: 20 }} />
      <p className={styles["subtitle"]}>
        Market that combines several global areas such as: investment online
        platform
      </p>
      <ul className={styles["team-list"]}>
        {TEAM.map(({ position, name, photo }, index) => {
          return (
            <li className={styles["member"]} key={index}>
              <img
                className={styles["photo"]}
                src={photo}
                alt={"Team member"}
              />
              <span>{position}</span>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OurTeam;
